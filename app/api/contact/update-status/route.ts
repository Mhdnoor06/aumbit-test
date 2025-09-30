import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: NextRequest) {
  try {
    // Check if database is available
    const isDatabaseAvailable = typeof prisma.contactSubmission?.update === "function" &&
                                !prisma.contactSubmission.update.toString().includes("Database not connected");

    if (!isDatabaseAvailable) {
      return NextResponse.json(
        { error: "Database not available. Admin functionality requires database connection." },
        { status: 503 }
      );
    }
    const body = await request.json();
    const { id, status } = body;

    // Validate required fields
    if (!id || !status) {
      return NextResponse.json(
        { error: "Missing required fields: id and status" },
        { status: 400 }
      );
    }

    // Validate status value
    const validStatuses = ["new", "read", "replied", "closed"];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "Invalid status. Must be one of: new, read, replied, closed" },
        { status: 400 }
      );
    }

    // Update the contact submission status
    const updatedSubmission = await prisma.contactSubmission.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json({
      success: true,
      data: updatedSubmission,
      message: "Contact submission status updated successfully",
    });
  } catch (error: any) {
    console.error("Error updating contact submission status:", error);
    console.error("Error details:", {
      code: error.code,
      message: error.message,
      meta: error.meta,
    });

    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Contact submission not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to update contact submission status",
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
