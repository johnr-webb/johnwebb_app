"""A Google Cloud Python Pulumi program for johnwebb_app deployment"""

import pulumi
from pulumi import Config
from pulumi_gcp import cloudrunv2 as cloudrun
from pulumi_gcp import organizations

# Get Pulumi configuration values
config = pulumi.Config()
frontend_image_url = config.require('frontend_image')
backend_image_url = config.require('backend_image')

# Get GCP configuration values
gcp_config = Config("gcp")
region = gcp_config.require('region') or "us-central1"
project = gcp_config.require("project")

gcp_project = organizations.get_project(project_id=project)
project_number = gcp_project.project_id

backend_service = cloudrun.Service(
    "backend-service",
    location=region,
    name="johnwebb-app-backend",
    template={
        "containers": [{
            "image": backend_image_url,
            "resources": {"limits": {"cpu": "1", "memory": "512Mi"}},
            "ports": [{"container_port": 8080}], 
        }],
        "service_account": f"{project_number}-compute@developer.gserviceaccount.com"
    },
    traffics=[{
        "type": "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
        "percent": 100,
    }]
)

frontend_service = cloudrun.Service(
    "frontend-service",
    location=region,
    name="johnwebb-app-frontend",
    template={
        "containers": [{
            "image": frontend_image_url,
            "resources": {"limits": {"cpu": "1", "memory": "256Mi"}},
        }],
    },
    traffics=[{
        "type": "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST",
        "percent": 100,
    }]
)

# IAM Policies
backend_iam_policy = cloudrun.ServiceIamMember(
    "backend-iam-public",
    location=backend_service.location,
    name=backend_service.name,
    role="roles/run.invoker",
    member="allUsers"
)

frontend_iam_policy = cloudrun.ServiceIamMember(
    "frontend-iam-public",
    location=frontend_service.location,
    name=frontend_service.name,
    role="roles/run.invoker",
    member="allUsers"
)

# Outputs
pulumi.export('frontend_url', frontend_service.uri)
pulumi.export('backend_url', backend_service.uri)




"""
    Before edits
        |
        V
"""
# Create a service account for Cloud Run
# service_account = serviceaccount.Account(
#     "cloudrun-sa",
#     account_id="johnwebb-app-cloudrun",
#     display_name="John Webb App Cloud Run Service Account",
#     description="Service account for johnwebb_app Cloud Run service"
# )

# # Create Cloud SQL instance for PostgreSQL
# db_instance = sql.DatabaseInstance(
#     "postgres-db",
#     name="johnwebb-app-db",
#     database_version="POSTGRES_15",
#     region=region,
#     settings=sql.DatabaseInstanceSettingsArgs(
#         tier="db-f1-micro",  # Small instance for development
#         disk_size=10,
#         disk_type="PD_SSD",
#         backup_configuration=sql.DatabaseInstanceSettingsBackupConfigurationArgs(
#             enabled=True,
#             start_time="03:00"
#         )
#     ),
#     deletion_protection=False  # Set to True for production
# )

# Create database
# database = sql.Database(
#     "app-database",
#     name="johnwebb_app",
#     instance=db_instance.name,
#     charset="UTF8",
#     collation="en_US.UTF8"
# )

# # Create database user
# db_user = sql.User(
#     "app-user",
#     name="app_user",
#     instance=db_instance.name,
#     password="your-secure-password-here"
# )

# Create Cloud Storage bucket for frontend static files
# frontend_bucket = storage.Bucket(
#     "frontend-bucket",
#     name=f"johnwebb-app-frontend-{pulumi.get_stack()}",
#     location="US",
#     uniform_bucket_level_access=True,
#     cors=[
#         storage.BucketCorArgs(
#             origins=["*"],
#             methods=["GET", "HEAD"],
#             response_headers=["*"],
#             max_age_seconds=3600
#         )
#     ]
# )

# # Make bucket publicly readable for static website hosting
# bucket_iam = storage.BucketIAMBinding(
#     "frontend-bucket-iam",
#     bucket=frontend_bucket.name,
#     role="roles/storage.objectViewer",
#     members=["allUsers"]
# )

# cloud_run_service = cloudrunv2.Service(
#     "fastapi-service",
#     name="johnwebb-app-backend",
#     location=region,
#     deletion_protection=False,
#     ingress="INGRESS_TRAFFIC_ALL",
#     template=cloudrunv2.ServiceTemplateArgs(
#         containers=[
#             cloudrunv2.ServiceTemplateContainerArgs(
#                 image="gcr.io/cloudrun/hello",  # Replace with your Artifact Registry image URL
#                 ports=cloudrunv2.ServiceTemplateContainerPortsArgs(
#                     container_port=8000
#                 ),
#                 envs=[
#                     cloudrunv2.ServiceTemplateContainerEnvArgs(
#                         name="DATABASE_URL",
#                         value=f"postgresql://{db_user.name}:{db_user.password}@{db_instance.connection_name}/johnwebb_app"
#                     ),
#                     cloudrunv2.ServiceTemplateContainerEnvArgs(
#                         name="DEBUG",
#                         value="false"
#                     )],
#                 resources=cloudrunv2.ServiceTemplateContainerResourcesArgs(
#                     limits={"memory": "512Mi", "cpu": "1000m"}
#                 )
#             )
#         ],
#         service_account=service_account.email,
#         timeout="300s",
#     )
# )

# Allow unauthenticated access to Cloud Run service
# cloud_run_iam = cloudrunv2.ServiceIamMember(
#     "cloudrun-iam",
#     role="roles/run.invoker",
#     member="allUsers",
#     name=cloud_run_service.name
# )

# Grant the Cloud SQL Client role to the service account
# sql_access_iam_binding = projects.IAMMember("cloudrun-sql-client",
#     role="roles/cloudsql.client",
#     member=service_account.email.apply(lambda email: f"serviceAccount:{email}"),
#     project=project_id
# )

# # Export important values
# pulumi.export("frontend_bucket_name", frontend_bucket.name)
# pulumi.export("frontend_bucket_url", frontend_bucket.url)
# pulumi.export("cloud_run_service_url", cloud_run_service.uri)
# pulumi.export("database_connection_name", db_instance.connection_name)
# pulumi.export("database_public_ip", db_instance.public_ip_address)
# pulumi.export("service_account_email", service_account.email)
