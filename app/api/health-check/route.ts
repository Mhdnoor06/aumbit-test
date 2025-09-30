import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // Basic health check - verify the application is running
    const healthStatus = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "aumbit-site",
      version: process.env.npm_package_version || "1.15.0",
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "production",
      checks: {
        application: "ok",
        memory: "ok",
      }
    };

    // Check memory usage
    const memUsage = process.memoryUsage();
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024);

    healthStatus.checks.memory = heapUsedMB < (heapTotalMB * 0.9) ? "ok" : "warning";

    // Return 200 OK for healthy status
    return NextResponse.json(healthStatus, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    console.error("Health check failed:", error);

    // Return 503 Service Unavailable if health check fails
    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        service: "aumbit-site",
        error: error instanceof Error ? error.message : "Unknown error",
        checks: {
          application: "error",
        }
      },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
  }
}

// Also support HEAD requests for lighter health checks
export async function HEAD(request: NextRequest) {
  try {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    });
  } catch (error) {
    return new NextResponse(null, { status: 503 });
  }
}