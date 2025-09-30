"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function HardwareNavigation() {
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
          className="absolute left-6 lg:left-8 text-white font-semibold text-xl hover:text-blue-300 transition-colors duration-300"
        >
          Aumbit
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-2 bg-transparent border-none outline-none hover:bg-white/5 px-3 py-2 rounded-lg">
              Products
              <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 text-white shadow-2xl rounded-xl p-2 min-w-[180px] mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-all duration-200 hover:translate-x-1 text-white hover:text-white"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Cards
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-all duration-200 hover:translate-x-1 text-white hover:text-white"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Bellx
              </button>
              <Link
                href="/realm9"
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800/80 transition-all duration-200 hover:translate-x-1 text-white hover:text-white"
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Realm9
              </Link>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("platform")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Platform
          </button>
          <button
            onClick={() => scrollToSection("capabilities")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection("pcb-design")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            PCB Design
          </button>
          <button
            onClick={() => scrollToSection("software")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Software
          </button>
          <button
            onClick={() => scrollToSection("ai-solutions")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            AI Solutions
          </button>
          <button
            onClick={() => scrollToSection("market-focus")}
            className="text-white/90 hover:text-white text-sm font-medium transition-all duration-300 hover:bg-white/5 px-3 py-2 rounded-lg"
          >
            Markets
          </button>
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
            <div className="space-y-2 ml-2">
              <button
                onClick={() => scrollToSection("products")}
                className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Cards
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Bellx
              </button>
              <Link
                href="/realm9"
                className="text-white/90 hover:text-white text-sm font-medium flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Realm9
              </Link>
            </div>
            <button
              onClick={() => scrollToSection("platform")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              Platform
            </button>
            <button
              onClick={() => scrollToSection("capabilities")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection("pcb-design")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              PCB Design
            </button>
            <button
              onClick={() => scrollToSection("software")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              Software
            </button>
            <button
              onClick={() => scrollToSection("ai-solutions")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              AI Solutions
            </button>
            <button
              onClick={() => scrollToSection("market-focus")}
              className="text-white/90 hover:text-white text-sm font-medium text-left flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-all duration-200 hover:translate-x-1"
            >
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              Markets
            </button>
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
