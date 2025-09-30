#!/bin/bash
# Development startup script

set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}Starting Aumbit Development Environment${NC}"
echo -e "${BLUE}=========================================${NC}"

# Start PostgreSQL with docker-compose
echo -e "${YELLOW}Starting PostgreSQL...${NC}"
docker-compose up -d postgres

# Wait for PostgreSQL to be healthy
echo -e "${YELLOW}Waiting for PostgreSQL to be ready...${NC}"
until docker-compose exec -T postgres pg_isready -U aumbit_user -d aumbitpass > /dev/null 2>&1; do
    echo -n "."
    sleep 1
done
echo ""
echo -e "${GREEN}✅ PostgreSQL is ready!${NC}"

# Run migrations
echo -e "${YELLOW}Running database migrations...${NC}"
npx prisma migrate deploy || {
    echo -e "${YELLOW}No pending migrations or fresh database detected${NC}"
    echo -e "${YELLOW}Pushing schema to database...${NC}"
    npx prisma db push
}

# Generate Prisma client
echo -e "${YELLOW}Generating Prisma client...${NC}"
npx prisma generate

# Start the development server
echo -e "${GREEN}=========================================${NC}"
echo -e "${GREEN}Starting Next.js development server...${NC}"
echo -e "${GREEN}=========================================${NC}"
echo ""
echo -e "${BLUE}Application: http://localhost:3000${NC}"
echo -e "${BLUE}pgAdmin:     http://localhost:8080${NC}"
echo -e "${BLUE}             Email: admin@aumbit.com${NC}"
echo -e "${BLUE}             Password: admin123${NC}"
echo ""

npm run dev