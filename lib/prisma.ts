// Conditionally import Prisma only when available
let PrismaClient: any;
let prismaInstance: any;

// Check if Prisma client is available (skip during build when SKIP_PRISMA_GENERATE is set)
if (process.env.SKIP_PRISMA_GENERATE !== "1") {
  try {
    PrismaClient = require("@prisma/client").PrismaClient;
  } catch (error) {
    console.log("Prisma client not generated, using mock for build");
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined;
};

// Initialize Prisma client or use mock
if (PrismaClient) {
  try {
    prismaInstance = globalForPrisma.prisma ?? new PrismaClient();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prismaInstance;
    }
  } catch (error) {
    console.log("Failed to initialize Prisma client:", error);
    // Use mock if initialization fails
    const { prismaMock } = require("./prisma-mock");
    prismaInstance = prismaMock;
  }
} else {
  // Use mock during build or when Prisma is not available
  const { prismaMock } = require("./prisma-mock");
  prismaInstance = prismaMock;
}

export const prisma = prismaInstance;
