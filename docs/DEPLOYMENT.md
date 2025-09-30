# Deployment Guide - PostgreSQL with Automatic Migrations

## Database Setup

### Production (PostgreSQL - Required)

The application **requires PostgreSQL** for both development and production. Database migrations run automatically on server startup (Liquibase-style).

#### Option 1: AWS RDS PostgreSQL

```bash
# Create RDS instance
aws rds create-db-instance \
  --db-instance-identifier aumbit-prod \
  --db-instance-class db.t3.micro \
  --engine postgres \
  --engine-version 15 \
  --master-username aumbit_admin \
  --master-user-password YOUR_SECURE_PASSWORD \
  --allocated-storage 20
```

#### Option 2: Self-managed PostgreSQL

Use the provided `docker-compose.yml` or deploy PostgreSQL on Kubernetes.

### Automatic Migration System (Liquibase-style)

The Docker container automatically handles database migrations on every startup:

1. **Connection Check**: Waits for PostgreSQL to be ready (up to 30 seconds)
2. **Migration Deployment**: Runs `prisma migrate deploy` to apply pending migrations
3. **Fresh Database Detection**: If no migrations exist, marks initial schema as applied
4. **Migration Status**: Shows current migration status after deployment
5. **No Manual Intervention**: All migrations run automatically, just like Liquibase

## Local Development

### Quick Start (Recommended)

```bash
# Start everything with one command
./scripts/dev-start.sh
```

This script:
- Starts PostgreSQL via docker-compose
- Waits for database to be ready
- Runs migrations automatically
- Starts the Next.js dev server

### Manual Setup with PostgreSQL

```bash
# Start PostgreSQL
docker-compose up -d

# Build and run app
docker build -t aumbit-app:latest .

docker run -p 3000:3000 \
  --network aumbit-site_aumbit_network \
  -e DATABASE_URL="postgresql://aumbit_user:aumbit_password_2025@aumbit_postgres:5432/aumbitpass" \
  -e NEXTAUTH_SECRET="dev-secret-change-in-production" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  -e AWS_REGION="us-east-1" \
  -e SES_FROM_EMAIL="noreply@colate.io" \
  aumbit-app:latest
```

## Production Deployment on EKS

### Prerequisites

1. EKS cluster running
2. PostgreSQL database (RDS or self-managed)
3. ECR repository for Docker images
4. kubectl configured

### Step 1: Build and Push Image

```bash
# Build image
docker build -t aumbit-app:latest .

# Tag for ECR
docker tag aumbit-app:latest YOUR_ECR_REGISTRY/aumbit-app:latest

# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ECR_REGISTRY
docker push YOUR_ECR_REGISTRY/aumbit-app:latest
```

### Step 2: Create Secrets

```bash
# Create database secret
kubectl create secret generic aumbit-secrets \
  --from-literal=database-url='postgresql://user:password@rds-endpoint:5432/aumbit' \
  --from-literal=nextauth-secret='your-32-character-secret'
```

### Step 3: Deploy to Kubernetes

```bash
# Update k8s/deployment.yaml with your image URL
sed -i 's|YOUR_ECR_REGISTRY|your-actual-registry|g' k8s/deployment.yaml

# Apply deployment
kubectl apply -f k8s/deployment.yaml

# Check status
kubectl get pods -l app=aumbit
kubectl logs -l app=aumbit
```

### Step 4: Configure IRSA for AWS SES (Optional)

If using AWS SES for emails, set up IRSA:

```bash
# Create service account with IAM role
eksctl create iamserviceaccount \
  --cluster=your-cluster \
  --namespace=default \
  --name=aumbit-sa \
  --attach-policy-arn=arn:aws:iam::aws:policy/AmazonSESFullAccess \
  --approve
```

## Environment Variables

### Required for Production

- `DATABASE_URL`: PostgreSQL connection string (NOT SQLite)
- `NEXTAUTH_SECRET`: 32+ character secret for session encryption
- `NEXTAUTH_URL`: Your application's public URL

### Optional

- `AWS_REGION`: AWS region for SES (default: us-east-1)
- `SES_FROM_EMAIL`: Email address for sending emails
- `ADMIN_EMAILS`: Comma-separated list of admin emails
- `NEXT_PUBLIC_ENABLE_TRACKING`: Enable visitor tracking

## Monitoring

### Health Checks

- Liveness: `GET /` (checks if app is running)
- Readiness: `GET /` (checks if app can serve traffic)

### Logs

```bash
# View logs
kubectl logs -f deployment/aumbit-app

# Check database initialization logs
kubectl logs deployment/aumbit-app | grep "Database"
```

## Troubleshooting

### Database Connection Issues

1. Check DATABASE_URL format: `postgresql://user:password@host:5432/database`
2. Verify network connectivity between pods and database
3. Check security groups/firewall rules

### Understanding the Migration Process

1. **Adding New Migrations**:
   ```bash
   ./scripts/db-migrate.sh create <migration_name>
   ```
   Commit the new migration files to git.

2. **Deployment**:
   When you deploy a new version, the container automatically:
   - Detects pending migrations
   - Applies them in order
   - Starts the application

3. **Migration History**:
   View migration status:
   ```bash
   ./scripts/db-migrate.sh status
   ```

### Container Crashes

Check logs for initialization errors:
```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name> --previous
```

## Security Notes

1. **PostgreSQL is required** - No SQLite support for consistency
2. Always use strong secrets for `NEXTAUTH_SECRET`
3. Store sensitive environment variables in Kubernetes secrets
4. Use IRSA for AWS credentials instead of hardcoding keys
5. Regularly update base images for security patches