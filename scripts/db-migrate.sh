#!/bin/bash
# Script to manage database migrations locally

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Aumbit Database Migration Manager${NC}"
echo -e "${GREEN}=========================================${NC}"

# Check if docker-compose is running
if ! docker-compose ps | grep -q "aumbit_postgres.*Up"; then
    echo -e "${YELLOW}PostgreSQL is not running. Starting docker-compose...${NC}"
    docker-compose up -d postgres
    echo "Waiting for PostgreSQL to be ready..."
    sleep 5
fi

# Load environment variables
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
else
    echo -e "${RED}ERROR: .env file not found${NC}"
    exit 1
fi

case "$1" in
    "status")
        echo -e "${YELLOW}Current migration status:${NC}"
        npx prisma migrate status
        ;;

    "deploy")
        echo -e "${YELLOW}Deploying pending migrations...${NC}"
        npx prisma migrate deploy
        echo -e "${GREEN}✅ Migrations deployed successfully!${NC}"
        ;;

    "create")
        if [ -z "$2" ]; then
            echo -e "${RED}ERROR: Please provide a migration name${NC}"
            echo "Usage: $0 create <migration_name>"
            exit 1
        fi
        echo -e "${YELLOW}Creating new migration: $2${NC}"
        npx prisma migrate dev --name "$2"
        echo -e "${GREEN}✅ Migration created successfully!${NC}"
        ;;

    "reset")
        echo -e "${RED}WARNING: This will reset your database and delete all data!${NC}"
        read -p "Are you sure? (yes/no): " -n 3 -r
        echo
        if [[ $REPLY =~ ^yes$ ]]; then
            echo -e "${YELLOW}Resetting database...${NC}"
            npx prisma migrate reset --force
            echo -e "${GREEN}✅ Database reset successfully!${NC}"
        else
            echo "Operation cancelled"
        fi
        ;;

    "seed")
        echo -e "${YELLOW}Seeding database...${NC}"
        npx prisma db seed
        echo -e "${GREEN}✅ Database seeded successfully!${NC}"
        ;;

    "studio")
        echo -e "${YELLOW}Opening Prisma Studio...${NC}"
        npx prisma studio
        ;;

    *)
        echo "Usage: $0 {status|deploy|create|reset|seed|studio}"
        echo ""
        echo "Commands:"
        echo "  status  - Show current migration status"
        echo "  deploy  - Deploy pending migrations (production-safe)"
        echo "  create  - Create a new migration"
        echo "  reset   - Reset database and apply all migrations"
        echo "  seed    - Seed the database with initial data"
        echo "  studio  - Open Prisma Studio GUI"
        exit 1
        ;;
esac