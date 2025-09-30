"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Cpu, Zap, Globe } from "lucide-react";

export function ProductsSection() {
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const productsRef = useRef<HTMLElement>(null);

  // Optimized intersection observer with useCallback
  const handleProductsIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsProductsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleProductsIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => observer.disconnect();
  }, [handleProductsIntersection]);

  return (
    <section
      ref={productsRef}
      id="products"
      className="relative z-10 w-full min-h-screen flex items-center bg-transparent"
    >
      <div className="w-full px-6 lg:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Software Products
          </h2>
          <p className="text-white/70 text-xl max-w-3xl mx-auto">
            Ready-to-use solutions that transform how industries operate
          </p>
        </div>

        {/* Products Grid - Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
          {/* Cards Product */}
          <div
            className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
              isProductsVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              animationDelay: isProductsVisible ? "0.05s" : "0s",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Cpu className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300">
                Cards
              </h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-base group-hover:text-white/80 transition-colors duration-300">
              Smart cards for organizing and accessing information across
              devices with intelligent categorization.
            </p>
            <button className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Bellx Product */}
          <div
            className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
              isProductsVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              animationDelay: isProductsVisible ? "0.1s" : "0s",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Zap className="w-6 h-6 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-green-300 transition-colors duration-300">
                Bellx
              </h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-base group-hover:text-white/80 transition-colors duration-300">
              Intelligent assistant for boosting productivity and simplifying
              tasks across platforms.
            </p>
            <button className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Realm9 Product */}
          <div
            className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 md:col-span-2 lg:col-span-1 ${
              isProductsVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              animationDelay: isProductsVisible ? "0.15s" : "0s",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Globe className="w-6 h-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300">
                Realm9
              </h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-base group-hover:text-white/80 transition-colors duration-300">
              Next-gen platform for building immersive digital experiences with
              speed and security.
            </p>
            <button className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
              Learn more
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 group relative overflow-hidden"
            style={{
              background:
                "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
              boxShadow:
                "0 20px 25px -5px rgba(14, 165, 233, 0.05), 0 8px 10px -6px rgba(14, 165, 233, 0.05)",
            }}
          >
            <span className="relative z-10 flex items-center">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
