# Deployment Guide

This guide covers deploying the johnwebb_app React frontend and FastAPI backend using Pulumi and GitHub Actions.

## Architecture Overview

- **Frontend**: React app built to static files and served directly from Google Cloud Storage
- **Backend**: FastAPI app containerized with Docker and deployed to Google Cloud Run
- **Database**: PostgreSQL on Google Cloud SQL
- **Infrastructure**: Managed by Pulumi
- **CI/CD**: GitHub Actions

## Prerequisites

### 1. Google Cloud Platform Setup

1. Create a GCP project (or use existing `jrw-demo-project`)
2. Enable required APIs:

   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable sqladmin.googleapis.com
   gcloud services enable storage.googleapis.com
   gcloud services enable cloudresourcemanager.googleapis.com
   ```

3. Create a service account for deployment:

   ```bash
   gcloud iam service-accounts create github-actions-sa \
     --display-name="GitHub Actions Service Account"

   gcloud projects add-iam-policy-binding jrw-demo-project \
     --member="serviceAccount:github-actions-sa@jrw-demo-project.iam.gserviceaccount.com" \
     --role="roles/editor"
   ```

4. Create and download service account key:
   ```bash
   gcloud iam service-accounts keys create key.json \
     --iam-account=github-actions-sa@jrw-demo-project.iam.gserviceaccount.com
   ```

### 2. Pulumi Setup

1. Install Pulumi CLI:

   ```bash
   curl -fsSL https://get.pulumi.com | sh
   ```

2. Login to Pulumi:

   ```bash
   pulumi login
   ```

3. Create a Pulumi access token at https://app.pulumi.com/account/tokens

### 3. GitHub Secrets Setup

Add the following secrets to your GitHub repository:

- `GCP_SA_KEY`: Contents of the service account key JSON file
- `PULUMI_ACCESS_TOKEN`: Your Pulumi access token
- `BACKEND_URL`: The URL of your deployed backend (will be set after first deployment)

## Manual Deployment Steps

### 1. Deploy Infrastructure

```bash
cd infra
pip install -r requirements.txt
pulumi stack select dev
pulumi up
```

This will create:

- Cloud SQL PostgreSQL instance
- Cloud Storage bucket for frontend
- Cloud Run service (with placeholder image)
- Service accounts and IAM bindings

### 2. Build and Deploy Backend

```bash
# Build Docker image
cd backend
docker build -t gcr.io/jrw-demo-project/johnwebb-app-backend:latest .

# Push to Google Container Registry
docker push gcr.io/jrw-demo-project/johnwebb-app-backend:latest

# Deploy to Cloud Run
gcloud run deploy johnwebb-app-backend \
  --image gcr.io/jrw-demo-project/johnwebb-app-backend:latest \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --max-instances 10
```

### 3. Build and Deploy Frontend

```bash
# Build React app to static files
cd frontend
npm install
npm run build

# Deploy static files to Cloud Storage
BUCKET_NAME=$(pulumi stack output frontend_bucket_name --cwd ../infra)
gsutil -m rsync -r -d dist/ gs://$BUCKET_NAME/
gsutil -m acl ch -r -u AllUsers:R gs://$BUCKET_NAME/
```

**Note**: The frontend is built to static files and served directly from Google Cloud Storage. No Docker container or web server is needed for the frontend.

## Automated Deployment with GitHub Actions

Once you've set up the secrets, the deployment will happen automatically on pushes to the `main` branch.

### Workflow Overview

1. **Test**: Runs tests for both frontend and backend
2. **Deploy Infrastructure**: Updates Pulumi infrastructure if needed
3. **Build and Deploy Backend**: Builds Docker image and deploys to Cloud Run
4. **Build and Deploy Frontend**: Builds React app to static files and uploads to Cloud Storage

### Manual Trigger

You can also trigger deployments manually from the GitHub Actions tab.

## Environment Configuration

### Backend Environment Variables

The backend uses these environment variables:

- `DATABASE_URL`: Automatically set by Pulumi
- `DEBUG`: Set to `false` in production

### Frontend Environment Variables

Set these in your GitHub repository secrets or environment:

- `VITE_API_BASE_URL`: URL of your deployed backend
- `VITE_NODE_ENV`: `production` for production builds

## Monitoring and Logs

### Cloud Run Logs

```bash
gcloud logs read --service=johnwebb-app-backend --limit=50
```

### Cloud SQL Monitoring

- Monitor in GCP Console under SQL > Instances
- Set up alerts for disk usage, CPU, and connections

### Frontend Monitoring

- Monitor Cloud Storage bucket usage
- Set up CDN monitoring if using Cloud CDN

## Troubleshooting

### Common Issues

1. **Database Connection Issues**

   - Check Cloud SQL instance is running
   - Verify connection name in Cloud Run environment variables
   - Ensure service account has Cloud SQL Client role

2. **Frontend Not Loading**

   - Check bucket permissions
   - Verify CORS configuration
   - Check if files were uploaded correctly

3. **Backend Deployment Fails**
   - Check Docker image builds successfully
   - Verify service account permissions
   - Check Cloud Run service limits

### Useful Commands

```bash
# Check Pulumi stack outputs
pulumi stack output

# View Cloud Run service details
gcloud run services describe johnwebb-app-backend --region us-central1

# Check Cloud SQL instance status
gcloud sql instances describe johnwebb-app-db

# List Cloud Storage bucket contents
gsutil ls -la gs://your-bucket-name
```

## Security Considerations

1. **Database Security**

   - Use private IP for Cloud SQL in production
   - Enable SSL connections
   - Use strong passwords and rotate regularly

2. **Service Account Permissions**

   - Follow principle of least privilege
   - Regularly audit IAM permissions

3. **Secrets Management**
   - Use Google Secret Manager for sensitive data
   - Never commit secrets to version control

## Cost Optimization

1. **Cloud SQL**

   - Use appropriate instance size
   - Enable automatic backups
   - Consider stopping instances during development

2. **Cloud Run**

   - Set appropriate memory and CPU limits
   - Use request-based pricing
   - Set maximum instances to control costs

3. **Cloud Storage**
   - Use appropriate storage class
   - Set up lifecycle policies for old files

## Next Steps

1. Set up custom domain with SSL certificate
2. Configure Cloud CDN for better performance
3. Set up monitoring and alerting
4. Implement blue-green deployments
5. Add database migrations to deployment pipeline
