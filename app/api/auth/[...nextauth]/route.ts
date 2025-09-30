import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { sendMagicLinkEmail } from "@/lib/email";
import type { User, Account, Profile, Session } from "next-auth";
import type { AdapterUser } from "next-auth/adapters";

// Extend the default session type for admin portal
declare module "next-auth" {
  interface Session {
    user: {
      email?: string | null;
      name?: string | null;
      image?: string | null;
      isAdmin: boolean; // Always true for authenticated users
    };
  }
}

const ALLOWED_DOMAIN = process.env.ALLOWED_DOMAIN || "colate.io";

console.log("[Auth] Admin portal configured for domain:", ALLOWED_DOMAIN);

// Check if database is available
const isDatabaseAvailable = typeof prisma.$connect === "function" &&
                           !prisma.$connect.toString().includes("Database not connected");

export const authOptions: NextAuthOptions = {
  // Only use adapter if database is available
  ...(isDatabaseAvailable ? { adapter: PrismaAdapter(prisma) } : {}),

  providers: [
    EmailProvider({
      from: process.env.EMAIL_FROM || "noreply@colate.io",
      async sendVerificationRequest({ identifier: email, url }) {
        console.log("[Auth] Sending verification email to:", email);

        // Modify the URL to redirect to our callback page after authentication
        const modifiedUrl = url.replace(
          /callbackUrl=[^&]*/,
          "callbackUrl=%2Fadmin"
        );
        console.log("[Auth] Magic link URL:", modifiedUrl);

        // Send email using our custom SES email service
        await sendMagicLinkEmail(email, modifiedUrl);
      },
    }),
  ],

  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile;
      email?: { verificationRequest?: boolean };
    }) {
      const userEmail = user?.email;

      console.log("[Auth] Sign in attempt for:", userEmail);

      // Only allow colate.io domain - all users with this domain are admins
      if (userEmail) {
        const emailDomain = userEmail.split("@")[1];
        if (emailDomain !== ALLOWED_DOMAIN) {
          console.log(
            "[Auth] Rejected: Invalid domain. Only",
            ALLOWED_DOMAIN,
            "emails allowed"
          );
          return false;
        }

        console.log("[Auth] Admin login allowed for:", userEmail);
        return true;
      }

      console.log("[Auth] Login rejected: No email provided");
      return false;
    },

    async session({
      session,
      user,
    }: {
      session: Session;
      user: User | AdapterUser;
    }) {
      // All authenticated users are admins (only aumbit.io domain allowed)
      if (session?.user?.email) {
        console.log(
          "[Auth] Session established for admin:",
          session.user.email
        );

        // Set admin status - all authenticated users are admins
        session.user.isAdmin = true;

        console.log("[Auth] Admin session created:", {
          email: session.user.email,
          isAdmin: session.user.isAdmin,
        });
      }

      return session;
    },

    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      // Redirect to admin page after sign in
      if (url.includes("/api/auth/callback/email")) {
        return `${baseUrl}/admin`;
      }

      // Default behavior
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/admin/login",
    signOut: "/",
    verifyRequest: "/admin/login?verifyRequest=1",
    error: "/admin/login?error=1",
  },

  session: {
    // Use JWT strategy when database is not available
    strategy: isDatabaseAvailable ? ("database" as const) : ("jwt" as const),
    maxAge: 8 * 60 * 60, // 8 hours
    updateAge: 60 * 60, // 1 hour
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
