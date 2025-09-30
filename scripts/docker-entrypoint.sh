#!/bin/sh
set -e

echo "========================================="
echo "Starting Aumbit application initialization"
echo "========================================="

# Function to wait for PostgreSQL
wait_for_postgres() {
    echo "Waiting for PostgreSQL to be ready..."

    # Extract host and port from DATABASE_URL
    # Format: postgresql://user:password@host:port/database
    DB_HOST=$(echo "$DATABASE_URL" | sed -n 's/.*@\([^:]*\):.*/\1/p')
    DB_PORT=$(echo "$DATABASE_URL" | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')

    if [ -z "$DB_HOST" ] || [ -z "$DB_PORT" ]; then
        echo "Could not parse database host/port from DATABASE_URL"
        echo "Using default timeout approach..."
        sleep 10
        return
    fi

    echo "Database host: $DB_HOST"
    echo "Database port: $DB_PORT"

    # Wait up to 30 seconds for database
    RETRIES=30
    until nc -z "$DB_HOST" "$DB_PORT" 2>/dev/null; do
        RETRIES=$((RETRIES - 1))
        if [ $RETRIES -le 0 ]; then
            echo "ERROR: PostgreSQL is not responding after 30 seconds"
            exit 1
        fi
        echo "PostgreSQL is not ready yet. Retrying in 1 second... ($RETRIES retries left)"
        sleep 1
    done

    echo "PostgreSQL is ready!"
}

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
    echo "ERROR: DATABASE_URL environment variable is not set"
    echo "Please provide a PostgreSQL connection string:"
    echo "  postgresql://username:password@host:port/database"
    exit 1
fi

# Validate it's PostgreSQL
if ! echo "$DATABASE_URL" | grep -q "postgresql://"; then
    echo "ERROR: DATABASE_URL must be a PostgreSQL connection string"
    echo "Format: postgresql://username:password@host:port/database"
    echo "Received: $DATABASE_URL"
    exit 1
fi

echo "Database URL configured for PostgreSQL"

# Wait for database to be ready
wait_for_postgres

# Run Prisma migrations (Liquibase-style automatic migration)
echo "========================================="
echo "Running database migrations..."
echo "========================================="

# First, generate Prisma client (in case it's needed)
echo "Generating Prisma client..."
npx prisma generate

# Run migrations using migrate deploy (production-safe)
echo "Applying database migrations..."
npx prisma migrate deploy 2>&1 | tee /tmp/migration.log

MIGRATION_STATUS=$?

# Check if there are no migrations to deploy
if grep -q "No migration found" /tmp/migration.log; then
    echo "⚠️  No migrations found in prisma/migrations directory"
    echo "Applying schema directly with prisma db push..."

    # Use db push to create schema from prisma schema file
    npx prisma db push --accept-data-loss

    if [ $? -eq 0 ]; then
        echo "✅ Database schema applied successfully!"
    else
        echo "ERROR: Could not apply database schema"
        exit 1
    fi
elif [ $MIGRATION_STATUS -eq 0 ]; then
    echo "✅ Database migrations completed successfully!"
else
    echo "⚠️  Migration deployment failed. Checking error..."

    # Check for specific error conditions
    if grep -q "P3005" /tmp/migration.log; then
        echo "Database is already up to date"
    else
        echo "ERROR: Migration failed"
        echo "Check the logs above for details"
        exit 1
    fi
fi

# Show migration status
echo "========================================="
echo "Current migration status:"
npx prisma migrate status || true
echo "========================================="

echo "Database initialization complete!"
echo "Starting Next.js application on port ${PORT:-3000}..."

# Execute the main command (npm run start)
exec "$@"