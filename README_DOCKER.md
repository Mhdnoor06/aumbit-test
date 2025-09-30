# Docker Deployment Guide

## Overview

This application uses PostgreSQL as its database and implements automatic database migrations on container startup (similar to Liquibase). Every time the container starts, it checks for pending migrations and applies them automatically.

## Quick Start

### Local Development

```bash
# 1. Start PostgreSQL
docker-compose up -d

# 2. Build the application image
docker build -t aumbit-app:latest .

# 3. Run the container
docker run -p 3000:3000 \
  --network aumbit-site_aumbit_network \
  -e DATABASE_URL="postgresql://aumbit_user:aumbit_password_2025@aumbit_postgres:5432/aumbitpass" \
  -e NEXTAUTH_SECRET="your-secret-here" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  aumbit-app:latest

# Application available at http://localhost:3000
# pgAdmin available at http://localhost:8080
```

## How Automatic Migrations Work

1. **Container Startup**: When the container starts, the entrypoint script runs
2. **Database Check**: Waits for PostgreSQL to be available (up to 30 seconds)
3. **Migration Execution**: Runs `prisma migrate deploy` to apply any pending migrations
4. **Fresh Database Handling**: If it's a new database, initializes with the base schema
5. **Application Start**: Once migrations complete, starts the Next.js application

## Environment Variables

### Required
- `DATABASE_URL`: PostgreSQL connection string (format: `postgresql://user:pass@host:port/db`)
- `NEXTAUTH_SECRET`: Secret for session encryption (generate with `openssl rand -hex 32`)
- `NEXTAUTH_URL`: Application URL

### Optional
- `AWS_REGION`: AWS region for SES (default: us-east-1)
- `SES_FROM_EMAIL`: Email address for sending emails
- `ADMIN_EMAILS`: Comma-separated list of admin emails

## Production Deployment on EKS

### 1. Build and Push to ECR

```bash
# Build the image
docker build -t aumbit-app:latest .

# Tag for ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin $ECR_REGISTRY
docker tag aumbit-app:latest $ECR_REGISTRY/aumbit-app:latest
docker push $ECR_REGISTRY/aumbit-app:latest
```

### 2. Create Kubernetes Secrets

```bash
kubectl create secret generic aumbit-secrets \
  --from-literal=database-url='postgresql://user:password@rds-endpoint:5432/dbname' \
  --from-literal=nextauth-secret='your-production-secret'
```

### 3. Deploy to Kubernetes

```bash
# Apply the deployment
kubectl apply -f k8s/deployment.yaml

# Check deployment status
kubectl rollout status deployment/aumbit-app

# View logs (including migration output)
kubectl logs -l app=aumbit --tail=100
```

## Database Migration Management

### Creating New Migrations (Development)

```bash
# Create a new migration
./scripts/db-migrate.sh create add_new_feature

# This creates a new migration file in prisma/migrations/
# Commit this file to git
```

### Viewing Migration Status

```bash
# Check which migrations have been applied
./scripts/db-migrate.sh status

# In production, check container logs
kubectl logs -l app=aumbit | grep -A 10 "migration status"
```

### Migration Workflow

1. **Development**: Create migrations locally using Prisma
2. **Commit**: Add migration files to git
3. **Deploy**: Push new container image
4. **Automatic**: Migrations apply automatically on container restart

## Troubleshooting

### Container Won't Start

Check the logs for migration errors:
```bash
docker logs <container-id>
# or in Kubernetes
kubectl logs <pod-name>
```

### Database Connection Issues

1. Verify DATABASE_URL format
2. Check network connectivity
3. Ensure PostgreSQL is running and accessible

### Migration Failures

The container will show detailed error messages. Common issues:
- Database permissions
- Network connectivity
- Conflicting schema changes

To manually fix:
```bash
# Connect to database
docker-compose exec postgres psql -U aumbit_user -d aumbitpass

# Check migrations table
SELECT * FROM _prisma_migrations;
```

## Key Features

- ✅ **Automatic Migrations**: No manual database updates required
- ✅ **Zero Downtime**: Migrations run before app starts
- ✅ **Production Safe**: Uses Prisma's production migration strategy
- ✅ **Fresh Database Support**: Automatically initializes new databases
- ✅ **Migration History**: Tracks all applied migrations
- ✅ **Health Checks**: Built-in health checks with migration awareness

## Architecture Notes

- **Database**: PostgreSQL (required)
- **Migrations**: Prisma Migrate (production mode)
- **Container**: Alpine Linux with Node.js 20
- **Security**: Runs as non-root user (uid: 1001)
- **Signal Handling**: Uses dumb-init for proper shutdown