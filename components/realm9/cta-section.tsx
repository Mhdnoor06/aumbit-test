"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import { BgGradient } from "./hero-animated";
import Image from "next/image";

export const CTASection: React.FC = () => {
  return (
    <section className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 py-20 text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl"></div>
        <div className="relative bg-slate-950 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-slate-800">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-600 animate-bounce-slow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to transform your IT operations?
          </h2>
          <div className="text-xl text-gray-300 mb-8 flex items-baseline justify-center gap-2">
            <span>Join thousands of teams already using</span>
            <span className="relative overflow-hidden shadow-lg inline-block top-1">
              <span className="w-[120px] h-[28px] relative inline-block">
                <Image
                  src="/realm9logo.png"
                  alt="Realm9 Logo"
                  fill
                  className="object-cover hover:opacity-80 transition-all duration-300 rounded-md"
                />
              </span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ backgroundColor: "rgb(40 35 128)" }}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-slate-800 text-white hover:bg-slate-700"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
