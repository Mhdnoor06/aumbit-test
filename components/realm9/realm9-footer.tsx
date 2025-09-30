"use client";

import Link from "next/link";
import Image from "next/image";

export function Realm9Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-slate-950 border-t border-slate-800"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="relative z-10 w-full px-6 lg:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <Link href="/" aria-label="Go to homepage" className="group">
              <div className="relative overflow-hidden p-1 shadow-lg">
                <div className="w-[120px] h-[32px] relative">
                  <Image
                    src="/realm9logo.png"
                    alt="Realm9 Logo"
                    fill
                    className="object-cover hover:opacity-80 transition-all duration-300 rounded-md"
                  />
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav
              className="flex flex-wrap items-center gap-8 text-sm"
              aria-label="Footer navigation"
            >
              <Link
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy
              </Link>
              <Link
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="#blog"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </nav>

            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center lg:text-right flex items-baseline justify-center lg:justify-end gap-2">
              <span>© 2024</span>
              <span className="relative overflow-hidden shadow-lg inline-block top-0">
                <span className="w-[80px] h-[20px] relative inline-block">
                  <Image
                    src="/realm9logo.png"
                    alt="Realm9 Logo"
                    fill
                    className="object-cover hover:opacity-80 transition-all duration-300 rounded-md"
                  />
                </span>
              </span>
              <span>All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
