"""A Google Cloud Python Pulumi program for johnwebb_app deployment"""

import pulumi
from pulumi_gcp import storage, cloudrun, sql, projects, serviceaccount, iam
import pulumi_docker as docker
import json
import os

# Configuration
config = pulumi.Config()
project_id = config.require("gcp:project")
region = config.get("region") or "us-central1"

# Create a service account for Cloud Run
service_account = serviceaccount.Account(
    "cloudrun-sa",
    account_id="johnwebb-app-cloudrun",
    display_name="John Webb App Cloud Run Service Account",
    description="Service account for johnwebb_app Cloud Run service"
)

# Create Cloud SQL instance for PostgreSQL
db_instance = sql.DatabaseInstance(
    "postgres-db",
    name="johnwebb-app-db",
    database_version="POSTGRES_15",
    region=region,
    settings=sql.DatabaseInstanceSettingsArgs(
        tier="db-f1-micro",  # Small instance for development
        disk_size=10,
        disk_type="PD_SSD",
        backup_configuration=sql.DatabaseInstanceSettingsBackupConfigurationArgs(
            enabled=True,
            start_time="03:00"
        )
    ),
    deletion_protection=False  # Set to True for production
)

# Create database
database = sql.Database(
    "app-database",
    name="johnwebb_app",
    instance=db_instance.name,
    charset="UTF8",
    collation="en_US.UTF8"
)

# Create database user
db_user = sql.User(
    "app-user",
    name="app_user",
    instance=db_instance.name,
    password="your-secure-password-here"  # Use Pulumi secrets in production
)

# Create Cloud Storage bucket for frontend static files
frontend_bucket = storage.Bucket(
    "frontend-bucket",
    name=f"johnwebb-app-frontend-{pulumi.get_stack()}",
    location="US",
    uniform_bucket_level_access=True,
    cors=[
        storage.BucketCorArgs(
            origins=["*"],
            methods=["GET", "HEAD"],
            response_headers=["*"],
            max_age_seconds=3600
        )
    ]
)

# Make bucket publicly readable for static website hosting
bucket_iam = storage.BucketIAMBinding(
    "frontend-bucket-iam",
    bucket=frontend_bucket.name,
    role="roles/storage.objectViewer",
    members=["allUsers"]
)

# Create Cloud Run service for FastAPI backend
cloud_run_service = cloudrun.Service(
    "fastapi-service",
    name="johnwebb-app-backend",
    location=region,
    template=cloudrun.ServiceTemplateArgs(
        spec=cloudrun.ServiceTemplateSpecArgs(
            containers=[
                cloudrun.ServiceTemplateSpecContainerArgs(
                    image="gcr.io/cloudrun/hello",  # Placeholder - will be updated by CI/CD
                    ports=[cloudrun.ServiceTemplateSpecContainerPortArgs(
                        container_port=8000
                    )],
                    envs=[
                        cloudrun.ServiceTemplateSpecContainerEnvArgs(
                            name="DATABASE_URL",
                            value=f"postgresql://{db_user.name}:{db_user.password}@{db_instance.connection_name}/johnwebb_app"
                        ),
                        cloudrun.ServiceTemplateSpecContainerEnvArgs(
                            name="DEBUG",
                            value="false"
                        )
                    ],
                    resources=cloudrun.ServiceTemplateSpecContainerResourcesArgs(
                        limits={"memory": "512Mi", "cpu": "1000m"}
                    )
                )
            ],
            service_account_name=service_account.email,
            timeout_seconds=300
        ),
        metadata=cloudrun.ServiceTemplateMetadataArgs(
            annotations={
                "autoscaling.knative.dev/maxScale": "10",
                "run.googleapis.com/cloudsql-instances": db_instance.connection_name
            }
        )
    ),
    traffics=[cloudrun.ServiceTrafficArgs(
        percent=100,
        latest_revision=True
    )]
)

# Allow unauthenticated access to Cloud Run service
cloud_run_iam = iam.IAMBinding(
    "cloudrun-iam",
    role="roles/run.invoker",
    members=["allUsers"],
    resource=cloud_run_service.name
)

# Grant Cloud Run service account access to Cloud SQL
cloud_sql_client = iam.IAMMember(
    "cloudrun-sql-client",
    role="roles/cloudsql.client",
    member=service_account.email.apply(lambda email: f"serviceAccount:{email}"),
    resource=db_instance.name
)

# Export important values
pulumi.export("frontend_bucket_name", frontend_bucket.name)
pulumi.export("frontend_bucket_url", frontend_bucket.url)
pulumi.export("cloud_run_service_url", cloud_run_service.statuses[0].url)
pulumi.export("database_connection_name", db_instance.connection_name)
pulumi.export("database_public_ip", db_instance.public_ip_address)
pulumi.export("service_account_email", service_account.email)
