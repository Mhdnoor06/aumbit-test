"use client";

import { useState, useEffect, useRef } from "react";
import { signIn, getSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MailIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEmailSent?: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onEmailSent,
}: LoginModalProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const pollingInterval = useRef<NodeJS.Timeout | null>(null);

  // Admin portal - get allowed domain from environment
  const allowedDomain = process.env.NEXT_PUBLIC_ALLOWED_DOMAIN || "colate.io";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Email validation
    if (!email) {
      toast.error("Please enter your email address");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      setLoading(false);
      return;
    }

    // TEMPORARY: Skip domain validation for testing
    // const emailDomain = email.split("@")[1];
    // if (emailDomain !== allowedDomain) {
    //   toast.error(`Only ${allowedDomain} email addresses are allowed`);
    //   setLoading(false);
    //   return;
    // }

    try {
      toast.loading("Sending magic link...", { id: "login" });

      // Send magic link email
      const result = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/admin",
      });

      if (result?.error) {
        toast.error("Failed to send magic link. Please try again.", {
          id: "login",
        });
        setError("Failed to send magic link. Please try again.");
        // Stop any polling on error
        if (pollingInterval.current) {
          clearInterval(pollingInterval.current);
          pollingInterval.current = null;
        }
      } else {
        toast.success("Magic link sent! Check your email.", { id: "login" });
        setEmailSent(true);
        startPolling();
        // Notify parent component
        if (onEmailSent) {
          onEmailSent();
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("An error occurred. Please try again.", { id: "login" });
      setError("An error occurred. Please try again.");
      // Stop any polling on error
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
        pollingInterval.current = null;
      }
    } finally {
      setLoading(false);
    }
  };

  const startPolling = () => {
    // Clear any existing interval first
    if (pollingInterval.current) {
      clearInterval(pollingInterval.current);
    }

    // Poll every 2 seconds to check if user authenticated
    pollingInterval.current = setInterval(async () => {
      const session = await getSession();
      if (session) {
        // User authenticated! Stop polling and redirect
        if (pollingInterval.current) {
          clearInterval(pollingInterval.current);
          pollingInterval.current = null;
        }
        router.push("/admin");
      }
    }, 2000);

    // Stop polling after 5 minutes
    setTimeout(() => {
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
        pollingInterval.current = null;
      }
    }, 300000);
  };

  // Clean up polling on unmount
  useEffect(() => {
    return () => {
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
        pollingInterval.current = null;
      }
    };
  }, []);

  // Stop polling when modal is closed, but continue if email was sent
  useEffect(() => {
    if (!isOpen) {
      // If email was sent, continue polling in background
      if (emailSent && !pollingInterval.current) {
        startPolling();
      }
      // If email was not sent, stop any existing polling
      else if (!emailSent && pollingInterval.current) {
        clearInterval(pollingInterval.current);
        pollingInterval.current = null;
      }
    }
  }, [isOpen, emailSent]);

  const handleResend = async () => {
    setLoading(true);
    setError("");

    try {
      toast.loading("Resending magic link...", { id: "resend" });

      const result = await signIn("email", {
        email: email,
        redirect: false,
        callbackUrl: "/admin",
      });

      if (result?.error) {
        toast.error("Failed to resend magic link. Please try again.", {
          id: "resend",
        });
        setError("Failed to resend magic link. Please try again.");
        // Stop any polling on error
        if (pollingInterval.current) {
          clearInterval(pollingInterval.current);
          pollingInterval.current = null;
        }
      } else {
        toast.success("Magic link resent! Check your email.", { id: "resend" });
      }
    } catch (err) {
      toast.error("An error occurred. Please try again.", { id: "resend" });
      setError("An error occurred. Please try again.");
      // Stop any polling on error
      if (pollingInterval.current) {
        clearInterval(pollingInterval.current);
        pollingInterval.current = null;
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] rounded-2xl"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {!emailSent ? (
          <>
            {/* Email Input Screen */}
            <div className="p-8 text-center border-b border-blue-400/20">
              <div className="text-white text-3xl font-bold mb-2">
                <span className="gradient-text bg-clip-text text-transparent">
                  Aumbit
                </span>
              </div>
              <div className="text-white/80 text-sm">Admin Portal</div>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Welcome back
                </h2>
                <p className="text-slate-300">Sign in to your account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div
                      className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                      style={{ filter: "none" }}
                    >
                      <MailIcon
                        className="h-5 w-5 text-blue-400"
                        style={{ filter: "none" }}
                      />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="your-email@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-blue-400/20 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 outline-none transition-all duration-200 text-white placeholder-white/40"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                      disabled={loading}
                      autoFocus
                    />
                  </div>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-400 text-sm backdrop-blur-sm">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background:
                      "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
                    boxShadow:
                      "0 20px 25px -5px rgba(14, 165, 233, 0.05), 0 8px 10px -6px rgba(14, 165, 233, 0.05)",
                  }}
                  className="w-full  text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transform"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      <span>Sending magic link...</span>
                    </>
                  ) : (
                    <span>Continue</span>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-blue-400/20">
                <div className="flex items-center justify-center text-sm text-white/60">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>
                    Your data is protected with enterprise-grade security
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Email Sent Screen */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 text-center border-b border-blue-400/20">
              <div className="text-white">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Check your email!
                </h2>
                <p className="text-white/70 mb-2">We've sent a magic link to</p>
                <p className="text-blue-400 font-medium">{email}</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mb-6 backdrop-blur-sm">
                <p className="text-blue-300 text-sm">
                  Click the link in your email to sign in to your admin account.
                </p>
                <p className="text-blue-400 text-xs mt-1">
                  The magic link will expire in 10 minutes for security.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700 text-sm">
                  <svg
                    className="w-4 h-4 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  {error}
                </div>
              )}

              <div className="text-center">
                <p className="text-white/70 text-sm mb-3">
                  Didn't receive the email?
                </p>
                <button
                  onClick={handleResend}
                  disabled={loading}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium disabled:opacity-50 transition-colors duration-200 flex items-center justify-center mx-auto"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-3 w-3 animate-spin mr-1" />
                      Sending...
                    </>
                  ) : (
                    "Resend magic link"
                  )}
                </button>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={async () => {
                    // Stop any existing polling
                    if (pollingInterval.current) {
                      clearInterval(pollingInterval.current);
                      pollingInterval.current = null;
                    }
                    // Clear any existing session to prevent confusion
                    await signOut({ redirect: false });
                    // Reset all states
                    setEmailSent(false);
                    setEmail("");
                    setError("");
                    setLoading(false);
                  }}
                  className="text-white/50 hover:text-white/70 text-sm transition-colors duration-200"
                >
                  ← Use a different email
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
