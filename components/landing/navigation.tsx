"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="flex items-center justify-center bg-black/20 backdrop-blur-md border-b border-white/10 px-6 lg:px-8 py-4 shadow-xl w-full relative">
        {/* Logo - Positioned absolutely on the left */}
        <Link
          href="/"
          className="absolute left-6 lg:left-8 hover:opacity-80 transition-all duration-300"
        >
          <div className="relative overflow-hidden p-1 shadow-lg">
            <div className="w-[120px] h-[32px] relative">
              <Image
                src="/aumbitlogo/aumbit-high-resolution-logo-transparent.png"
                alt="Aumbit Logo"
                fill
                className="object-contain hover:opacity-80 transition-all duration-300"
              />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-transparent border-none outline-none hover:bg-white/5 px-3 py-2 rounded-lg">
              Products
              <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 bg-slate-900 backdrop-blur-xl border border-slate-700/50 text-white shadow-2xl rounded-xl p-3 min-w-[280px] mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="grid grid-cols-1 gap-1">
                <Link
                  href="https://beta.aumpas.aumbit.io/"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group/item"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover/item:text-blue-300 transition-colors duration-200">
                      Cards
                    </div>
                    <div className="text-xs text-white/60 mt-0.5">
                      Digital payment solutions
                    </div>
                  </div>
                </Link>

                <Link
                  href="https://bellx.aumbit.io/"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group/item"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                    <img
                      src="https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg"
                      alt="Bellx"
                      className="w-4 h-4 brightness-0 invert"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover/item:text-green-300 transition-colors duration-200">
                      Bellx
                    </div>
                    <div className="text-xs text-white/60 mt-0.5">
                      Communication platform
                    </div>
                  </div>
                </Link>

                <Link
                  href="/realm9"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group/item"
                >
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                    <Globe className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white group-hover/item:text-purple-300 transition-colors duration-200">
                      Realm9
                    </div>
                    <div className="text-xs text-white/60 mt-0.5">
                      IT infrastructure management
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/hardware"
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Hardware
          </Link>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Industries
          </button>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - Positioned absolutely on the right */}
        <button
          className="md:hidden text-white absolute right-6 lg:right-8"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <span className="text-xl">×</span>
          ) : (
            <span className="text-lg">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 p-6 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="flex flex-col space-y-6">
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3 border-b border-slate-700/50 pb-2">
              Products
            </div>
            <div className="space-y-3 ml-2">
              <Link
                  href="https://beta.aumpas.aumbit.io/"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group/item"
                >
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover/item:text-blue-300 transition-colors duration-200">
                    Cards
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    Digital payment solutions
                  </div>
                </div>
              </Link>

              <Link
                  href="https://bellx.aumbit.io/"
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-200 group/item"
                >
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover/item:text-green-300 transition-colors duration-200">
                    Bellx
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    Communication platform
                  </div>
                </div>
              </Link>

              <Link
                href="/realm9"
                className="w-full flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-200 group/item"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white group-hover/item:text-purple-300 transition-colors duration-200">
                    Realm9
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    IT infrastructure management
                  </div>
                </div>
              </Link>
            </div>
            <Link
              href="/hardware"
              className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              Hardware
            </Link>
            <button
              onClick={() => scrollToSection("industries")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              Industries
            </button>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              Contact
            </Link>
            <hr className="border-white/20" />
            <Link
              href="#"
              className="text-white/90 hover:text-white text-sm font-medium"
            >
              Login
            </Link>
            <Button
              className="bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600/50 text-white backdrop-blur-sm w-full justify-center"
              size="sm"
            >
              Get Started
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
