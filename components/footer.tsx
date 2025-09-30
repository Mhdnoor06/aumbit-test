"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-gradient-to-b from-slate-900/80 to-black"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle background pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 w-full px-6 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          {/* Top Section */}
          <div className="flex w-full flex-col items-center gap-12 text-center">
            {/* Logo Section */}
            <Link href="/" aria-label="Go to homepage" className="group">
              <div className="relative overflow-hidden p-1 shadow-lg">
                <div className="w-[160px] h-[40px] relative">
                  <Image
                    src="/aumbitlogo/aumbit-high-resolution-logo-transparent.png"
                    alt="Aumbit Logo"
                    fill
                    className="object-contain hover:opacity-80 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="text-white/60 text-sm mt-2 group-hover:text-white/80 transition-colors duration-300">
                AI Innovation Platform
              </div>
            </Link>

            {/* Main Navigation */}
            <nav
              className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
              aria-label="Footer navigation"
            >
              <Link
                href="#products"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                Products
              </Link>
              <Link
                href="#technologies"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                Technology
              </Link>
              <Link
                href="#solutions"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                Solutions
              </Link>
              <Link
                href="#industries"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                Industries
              </Link>
              <Link
                href="#contact"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                Contact
              </Link>
              <Link
                href="#about"
                className="text-white/70 hover:text-white transition-colors duration-300 hover:-translate-y-0.5"
              >
                About
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@aumbit.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <Separator className="bg-white/10" role="presentation" />

          {/* Bottom Section */}
          <div className="flex w-full flex-col-reverse items-center gap-8 text-sm lg:flex-row lg:justify-between lg:gap-6">
            {/* Copyright Text */}
            <div className="text-white/60 text-center lg:text-left flex items-baseline justify-center lg:justify-start gap-2">
              © 2024{" "}
              <div className="relative overflow-hidden shadow-lg inline-block top-1">
                <div className="w-[80px] h-[20px] relative">
                  <Image
                    src="/aumbitlogo/aumbit-high-resolution-logo-transparent.png"
                    alt="Aumbit Logo"
                    fill
                    className="object-contain hover:opacity-80 transition-all duration-300"
                  />
                </div>
              </div>
              . All rights reserved. Built with AI innovation.
            </div>

            {/* Legal Navigation */}
            <nav
              className="flex flex-col items-center gap-6 text-sm md:flex-row md:gap-8"
              aria-label="Legal links"
            >
              <Link
                href="#privacy"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#cookies"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Cookie Settings
              </Link>
            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-white/70 text-sm max-w-md">
                Get the latest AI innovations and industry insights delivered to
                your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
              />
              <button
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 group relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
                  boxShadow:
                    "0 10px 25px -5px rgba(14, 165, 233, 0.1), 0 4px 6px -2px rgba(14, 165, 233, 0.05)",
                }}
              >
                <span className="relative z-10 flex items-center">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
