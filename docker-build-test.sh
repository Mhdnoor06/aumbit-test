#!/bin/bash

# Docker build and run script for local testing
# Usage: ./docker-build-test.sh

set -e

echo "🔨 Building Docker image for Aumbit..."
docker build -t aumbit-app:latest .

echo "✅ Build completed successfully!"
echo ""
echo "📦 To run the container locally for testing:"
echo ""
echo "# Basic run (using SQLite):"
echo "docker run -p 3000:3000 --name aumbit-test aumbit-app:latest"
echo ""
echo "# Run with environment variables:"
echo "docker run -p 3000:3000 --name aumbit-test \\"
echo "  -e DATABASE_URL='file:./dev.db' \\"
echo "  -e NEXTAUTH_SECRET='your-secret-here' \\"
echo "  -e NEXTAUTH_URL='http://localhost:3000' \\"
echo "  aumbit-app:latest"
echo ""
echo "# Run with PostgreSQL from docker-compose:"
echo "docker run -p 3000:3000 --name aumbit-test \\"
echo "  --network aumbit-site_aumbit_network \\"
echo "  -e DATABASE_URL='postgresql://aumbit_user:aumbit_password_2025@aumbit_postgres:5432/aumbitpass' \\"
echo "  -e NEXTAUTH_SECRET='your-secret-here' \\"
echo "  -e NEXTAUTH_URL='http://localhost:3000' \\"
echo "  aumbit-app:latest"
echo ""
echo "# To stop and remove the container:"
echo "docker stop aumbit-test && docker rm aumbit-test"
echo ""
echo "🚀 Application will be available at http://localhost:3000"