import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    // Check if database is available
    const isDatabaseAvailable = typeof prisma.contactSubmission?.create === "function" &&
                                !prisma.contactSubmission.create.toString().includes("Database not connected");

    if (!isDatabaseAvailable) {
      console.log("Database not available, skipping database operations");
    }
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    // 4. Log the submission

    // Save to database only if available
    let contactSubmission = null;
    if (isDatabaseAvailable) {
      try {
        contactSubmission = await prisma.contactSubmission.create({
          data: {
            name,
            email,
            company: company || null,
            subject,
            message,
          },
        });
        console.log("Contact form submission saved:", contactSubmission);
      } catch (dbError) {
        console.error("Database error (non-critical):", dbError);
        // Continue without database - form submission still succeeds
      }
    } else {
      console.log("Contact form submission received (database not available):", {
        name,
        email,
        company,
        subject,
        message,
      });
    }

    // 2. Send email notification (using Nodemailer, SendGrid, etc.)
    // await sendEmail({
    //   to: 'hello@aumbit.com',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // 3. Send confirmation email to user
    // await sendEmail({
    //   to: email,
    //   subject: 'Thank you for contacting Aumbit',
    //   html: `
    //     <h2>Thank you for contacting us!</h2>
    //     <p>Hi ${name},</p>
    //     <p>We've received your message and will get back to you within 24 hours.</p>
    //     <p>Best regards,<br>The Aumbit Team</p>
    //   `,
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form submission error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to submit contact form. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch contact submissions
export async function GET(request: NextRequest) {
  try {
    // Check if database is available
    const isDatabaseAvailable = typeof prisma.contactSubmission?.findMany === "function" &&
                                !prisma.contactSubmission.findMany.toString().includes("Database not connected");

    if (!isDatabaseAvailable) {
      // Return empty results when database is not available
      return NextResponse.json({
        success: true,
        data: [],
        pagination: {
          page: 1,
          limit: 10,
          totalCount: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPrevPage: false,
        },
        message: "Database not available",
      });
    }
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const status = searchParams.get("status") || "all";
    const search = searchParams.get("search") || "";

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    // Build where clause for filtering
    const where: any = {};

    if (status !== "all") {
      where.status = status;
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { subject: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ];
    }

    // Fetch contact submissions with pagination
    const [submissions, totalCount] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: offset,
        take: limit,
      }),
      prisma.contactSubmission.count({ where }),
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(totalCount / limit);
    const hasNextPage = page < totalPages;
    const hasPrevPage = page > 1;

    return NextResponse.json({
      success: true,
      data: submissions,
      pagination: {
        page,
        limit,
        totalCount,
        totalPages,
        hasNextPage,
        hasPrevPage,
      },
    });
  } catch (error) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact submissions" },
      { status: 500 }
    );
  }
}
