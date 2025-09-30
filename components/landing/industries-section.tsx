"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Sparkles, Shield, Zap, Globe } from "lucide-react";

export function IndustriesSection() {
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const industriesRef = useRef<HTMLElement>(null);

  // Memoized animation classes for better performance
  const getAnimationClass = useCallback((isVisible: boolean) => {
    return isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8";
  }, []);

  // Memoized animation delays
  const getAnimationDelay = useCallback((isVisible: boolean, delay: string) => {
    return isVisible ? delay : "0s";
  }, []);

  // Optimized intersection observer with useCallback
  const handleIndustriesIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsIndustriesVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIndustriesIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    if (industriesRef.current) {
      observer.observe(industriesRef.current);
    }

    return () => observer.disconnect();
  }, [handleIndustriesIntersection]);

  return (
    <section
      ref={industriesRef}
      id="industries"
      className="relative z-10 w-full min-h-screen flex items-center bg-transparent"
    >
      <div className="w-full px-6 lg:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6 ${getAnimationClass(
              isIndustriesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isIndustriesVisible, "0.05s"),
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Industries We Serve
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 text-balance ${getAnimationClass(
              isIndustriesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isIndustriesVisible, "0.1s"),
            }}
          >
            Transforming{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p
            className={`text-white/70 text-xl max-w-4xl mx-auto leading-relaxed ${getAnimationClass(
              isIndustriesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isIndustriesVisible, "0.15s"),
            }}
          >
            Our AI-powered solutions adapt to your industry's unique challenges,
            driving innovation and measurable results across all sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Financial Services */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-yellow-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.2s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                Financial Services
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Risk assessment, fraud detection, automated trading, and
                personalized advisory services.
              </p>
            </div>

            {/* Healthcare */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-red-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.25s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-400/20 to-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                Healthcare
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Diagnostic assistance, patient monitoring, treatment
                optimization, and medical research acceleration.
              </p>
            </div>

            {/* Manufacturing */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-orange-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.3s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                Manufacturing
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Predictive maintenance, quality control automation, supply chain
                optimization, and smart factory solutions.
              </p>
            </div>

            {/* Retail & E-commerce */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-teal-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.35s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-6 h-6 text-teal-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                Retail & E-commerce
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Personalization engines, inventory management, customer
                analytics, and conversion optimization.
              </p>
            </div>
          </div>

          {/* Additional Industries Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {/* Insurance */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.4s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                Insurance
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Risk assessment automation, claims processing optimization, and
                predictive analytics for policy pricing.
              </p>
            </div>

            {/* Media & Entertainment */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-pink-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.45s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-pink-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                Media & Entertainment
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Content personalization, audience analytics, automated content
                creation, and immersive experiences.
              </p>
            </div>

            {/* Telecommunications */}
            <div
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-400/30 ${getAnimationClass(
                isIndustriesVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(isIndustriesVisible, "0.5s"),
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                Telecommunications
              </h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Network optimization, predictive maintenance, customer service
                automation, and intelligent connectivity solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
