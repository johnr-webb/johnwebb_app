#!/bin/bash

# Deployment script for johnwebb_app
# This script can be used for manual deployments or as a reference for CI/CD
# 
# For complete deployment documentation, see docs/deployment.md

set -e  # Exit on any error

# Configuration
PROJECT_ID="jrw-demo-project"
REGION="us-central1"
BACKEND_SERVICE_NAME="johnwebb-app-backend"
FRONTEND_BUCKET_PREFIX="johnwebb-app-frontend"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if gcloud is installed
    if ! command -v gcloud &> /dev/null; then
        log_error "gcloud CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if pulumi is installed
    if ! command -v pulumi &> /dev/null; then
        log_error "Pulumi CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if docker is installed
    if ! command -v docker &> /dev/null; then
        log_error "Docker is not installed. Please install it first."
        exit 1
    fi
    
    # Check if node is installed
    if ! command -v node &> /dev/null; then
        log_error "Node.js is not installed. Please install it first."
        exit 1
    fi
    
    log_info "All prerequisites are met!"
}

# Deploy infrastructure
deploy_infrastructure() {
    log_info "Deploying infrastructure with Pulumi..."
    
    cd infra
    
    # Install dependencies
    pip install -r requirements.txt
    
    # Deploy infrastructure
    pulumi up --yes
    
    # Get outputs
    BUCKET_NAME=$(pulumi stack output frontend_bucket_name)
    BACKEND_URL=$(pulumi stack output cloud_run_service_url)
    
    cd ..
    
    log_info "Infrastructure deployed successfully!"
    log_info "Frontend bucket: $BUCKET_NAME"
    log_info "Backend URL: $BACKEND_URL"
}

# Build and deploy backend
deploy_backend() {
    log_info "Building and deploying backend..."
    
    cd backend
    
    # Build Docker image
    IMAGE_TAG="gcr.io/$PROJECT_ID/$BACKEND_SERVICE_NAME:latest"
    docker build -t $IMAGE_TAG .
    
    # Push to Google Container Registry
    docker push $IMAGE_TAG
    
    # Deploy to Cloud Run
    gcloud run deploy $BACKEND_SERVICE_NAME \
        --image $IMAGE_TAG \
        --region $REGION \
        --platform managed \
        --allow-unauthenticated \
        --memory 512Mi \
        --cpu 1 \
        --max-instances 10
    
    cd ..
    
    log_info "Backend deployed successfully!"
}

# Build and deploy frontend
deploy_frontend() {
    log_info "Building and deploying frontend..."
    
    cd frontend
    
    # Install dependencies
    npm ci
    
    # Build the application
    npm run build
    
    # Get bucket name from Pulumi
    BUCKET_NAME=$(pulumi stack output frontend_bucket_name --cwd ../infra)
    
    # Deploy to Cloud Storage
    gsutil -m rsync -r -d dist/ gs://$BUCKET_NAME/
    gsutil -m acl ch -r -u AllUsers:R gs://$BUCKET_NAME/
    
    cd ..
    
    log_info "Frontend deployed successfully!"
    log_info "Frontend URL: https://storage.googleapis.com/$BUCKET_NAME/index.html"
}

# Main deployment function
deploy_all() {
    log_info "Starting full deployment..."
    
    check_prerequisites
    deploy_infrastructure
    deploy_backend
    deploy_frontend
    
    log_info "🎉 Deployment completed successfully!"
    
    # Display URLs
    BACKEND_URL=$(pulumi stack output cloud_run_service_url --cwd infra)
    BUCKET_NAME=$(pulumi stack output frontend_bucket_name --cwd infra)
    
    echo ""
    echo "=========================================="
    echo "Deployment Summary:"
    echo "=========================================="
    echo "Backend URL: $BACKEND_URL"
    echo "Frontend URL: https://storage.googleapis.com/$BUCKET_NAME/index.html"
    echo "=========================================="
}

# Parse command line arguments
case "${1:-all}" in
    "infrastructure"|"infra")
        check_prerequisites
        deploy_infrastructure
        ;;
    "backend"|"api")
        check_prerequisites
        deploy_backend
        ;;
    "frontend"|"web")
        check_prerequisites
        deploy_frontend
        ;;
    "all"|"")
        deploy_all
        ;;
    "help"|"-h"|"--help")
        echo "Usage: $0 [infrastructure|backend|frontend|all]"
        echo ""
        echo "Commands:"
        echo "  infrastructure, infra  - Deploy only infrastructure"
        echo "  backend, api          - Deploy only backend"
        echo "  frontend, web         - Deploy only frontend"
        echo "  all                   - Deploy everything (default)"
        echo "  help                  - Show this help message"
        ;;
    *)
        log_error "Unknown command: $1"
        echo "Use '$0 help' for usage information."
        exit 1
        ;;
esac
