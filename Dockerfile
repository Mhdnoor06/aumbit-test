# Use non-alpine for better compatibility
FROM node:20.3.0-slim

# Create app directory and set as working directory
WORKDIR /app

# Install only essential system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user with explicit UID/GID
RUN groupadd -g 1001 nodejs && \
    useradd -u 1001 -g nodejs -s /bin/bash -m nodejs

# Create npm cache directory with proper permissions
RUN mkdir -p /app/.npm && \
    chown -R 1001:1001 /app

# Set npm cache location to a writable directory
ENV npm_config_cache=/app/.npm

# Copy package files and change ownership
COPY --chown=1001:1001 package*.json ./

# Configure npm settings for the build
RUN npm config set fetch-timeout 900000 && \
    npm config set fetch-retries 10 && \
    npm config set fetch-retry-mintimeout 100000 && \
    npm config set fetch-retry-maxtimeout 600000 && \
    npm config set maxsockets 5 && \
    npm config set loglevel error && \
    npm config set cache /app/.npm

# Install dependencies as nodejs user
USER nodejs

# Install dependencies in chunks to avoid timeout
# First install critical dependencies
RUN npm install next react react-dom --legacy-peer-deps || \
    (sleep 5 && npm install next react react-dom --legacy-peer-deps)

# Then install remaining dependencies
RUN npm ci --legacy-peer-deps || \
    (echo "Retrying after cache clean..." && \
     npm cache verify && \
     npm ci --legacy-peer-deps --prefer-offline)

# Copy app files and ensure proper ownership
COPY --chown=1001:1001 . .

# Disable telemetry and skip Prisma generation during build
ENV NEXT_TELEMETRY_DISABLED=1
ENV SKIP_PRISMA_GENERATE=1

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "run", "start"]