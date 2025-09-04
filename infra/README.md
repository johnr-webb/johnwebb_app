# Infrastructure as Code with Pulumi

This directory contains the Pulumi infrastructure code for deploying the johnwebb_app to Google Cloud Platform.

> 📖 **For complete deployment instructions, see the [Deployment Guide](../docs/deployment.md)**

## What's Deployed

- **Cloud SQL PostgreSQL**: Database for the FastAPI backend
- **Cloud Run**: Serverless container platform for the FastAPI backend
- **Cloud Storage**: Bucket for hosting the React frontend static files
- **Service Accounts**: IAM roles and permissions for secure access
- **Networking**: VPC and firewall rules (if needed)

## Prerequisites

1. Install Pulumi CLI: https://www.pulumi.com/docs/get-started/install/
2. Install Python 3.11+
3. Set up GCP credentials
4. Install dependencies: `pip install -r requirements.txt`

## Quick Start

1. **Login to Pulumi**:

   ```bash
   pulumi login
   ```

2. **Set up GCP project**:

   ```bash
   pulumi config set gcp:project jrw-demo-project
   ```

3. **Deploy infrastructure**:

   ```bash
   pulumi up
   ```

4. **View outputs**:
   ```bash
   pulumi stack output
   ```

## Configuration

### Required Configuration

- `gcp:project`: Your GCP project ID

### Optional Configuration

- `region`: GCP region (defaults to us-central1)

### Setting Configuration

```bash
# Set project
pulumi config set gcp:project your-project-id

# Set region
pulumi config set region us-west1

# View current configuration
pulumi config
```

## Stack Management

### Create a new stack

```bash
pulumi stack init production
```

### Switch between stacks

```bash
pulumi stack select dev
pulumi stack select production
```

### List all stacks

```bash
pulumi stack ls
```

## Common Commands

```bash
# Preview changes
pulumi preview

# Deploy changes
pulumi up

# Destroy infrastructure
pulumi destroy

# View stack outputs
pulumi stack output

# View stack history
pulumi history

# Export stack state
pulumi stack export --file backup.json
```

## Outputs

After deployment, the following outputs are available:

- `frontend_bucket_name`: Name of the Cloud Storage bucket for frontend
- `frontend_bucket_url`: URL of the frontend bucket
- `cloud_run_service_url`: URL of the deployed FastAPI backend
- `database_connection_name`: Cloud SQL connection name
- `database_public_ip`: Public IP of the database (if applicable)
- `service_account_email`: Email of the created service account

## Security Notes

- Database password is currently hardcoded - use Pulumi secrets in production
- Cloud Run service allows unauthenticated access - restrict as needed
- Consider using private IP for Cloud SQL in production

## Cost Considerations

- Cloud SQL instance uses `db-f1-micro` (smallest tier)
- Cloud Run has request-based pricing
- Cloud Storage has minimal costs for static hosting
- Monitor usage in GCP Console

## Troubleshooting

### Common Issues

1. **Permission denied errors**

   - Ensure your GCP credentials have sufficient permissions
   - Check that required APIs are enabled

2. **Resource already exists**

   - Use `pulumi import` to import existing resources
   - Or change resource names in the code

3. **Database connection issues**
   - Verify Cloud SQL instance is running
   - Check firewall rules and network configuration

### Getting Help

- Pulumi documentation: https://www.pulumi.com/docs/
- GCP Pulumi provider docs: https://www.pulumi.com/registry/packages/gcp/
- Check Pulumi community forum for common issues
