"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  Cpu,
  BarChart3,
  Cloud,
  Sparkles,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export function SolutionsSection() {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  const solutionsRef = useRef<HTMLElement>(null);

  // Memoized animation classes for better performance
  const getAnimationClass = useCallback((isVisible: boolean) => {
    return isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8";
  }, []);

  // Memoized animation delays
  const getAnimationDelay = useCallback((isVisible: boolean, delay: string) => {
    return isVisible ? delay : "0s";
  }, []);

  // Optimized intersection observer with useCallback
  const handleSolutionsIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsSolutionsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleSolutionsIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    if (solutionsRef.current) {
      observer.observe(solutionsRef.current);
    }

    return () => observer.disconnect();
  }, [handleSolutionsIntersection]);

  return (
    <section
      ref={solutionsRef}
      id="solutions"
      className="relative z-10 w-full min-h-screen flex items-center bg-transparent"
    >
      <div className="w-full px-6 lg:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6 ${getAnimationClass(
              isSolutionsVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isSolutionsVisible, "0.05s"),
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              AI Solutions
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 text-balance ${getAnimationClass(
              isSolutionsVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isSolutionsVisible, "0.1s"),
            }}
          >
            Intelligent{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p
            className={`text-white/70 text-xl max-w-4xl mx-auto leading-relaxed ${getAnimationClass(
              isSolutionsVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isSolutionsVisible, "0.15s"),
            }}
          >
            Comprehensive AI-powered solutions designed to transform your business
            operations and drive innovation across all departments.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* AI Automation */}
              <div
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${getAnimationClass(
                  isSolutionsVisible
                )}`}
                style={{
                  animationDelay: getAnimationDelay(
                    isSolutionsVisible,
                    "0.25s"
                  ),
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-blue-300" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  AI Automation
                </h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  Streamline operations with intelligent automation that learns
                  and adapts to your workflow patterns.
                </p>
                <div className="flex items-center text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>

              {/* Data Intelligence */}
              <div
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${getAnimationClass(
                  isSolutionsVisible
                )}`}
                style={{
                  animationDelay: getAnimationDelay(isSolutionsVisible, "0.3s"),
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-purple-300" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  Data Intelligence
                </h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  Transform raw data into actionable insights with advanced
                  analytics and predictive modeling.
                </p>
                <div className="flex items-center text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>

              {/* Cloud Integration */}
              <div
                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${getAnimationClass(
                  isSolutionsVisible
                )}`}
                style={{
                  animationDelay: getAnimationDelay(
                    isSolutionsVisible,
                    "0.35s"
                  ),
                  background: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-8 h-8 text-green-300" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                  Cloud Integration
                </h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  Seamless cloud deployment with scalable infrastructure and
                  enterprise-grade security.
                </p>
                <div className="flex items-center text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
          </div>

          {/* Additional Solutions Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Smart Analytics */}
            <div
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${getAnimationClass(
                isSolutionsVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(
                  isSolutionsVisible,
                  "0.4s"
                ),
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-indigo-300" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                Smart Analytics
              </h4>
              <p className="text-white/70 leading-relaxed mb-6">
                Advanced business intelligence with real-time insights, predictive modeling, and automated reporting dashboards.
              </p>
              <div className="flex items-center text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Process Optimization */}
            <div
              className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${getAnimationClass(
                isSolutionsVisible
              )}`}
              style={{
                animationDelay: getAnimationDelay(
                  isSolutionsVisible,
                  "0.45s"
                ),
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }}
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-emerald-300" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                Process Optimization
              </h4>
              <p className="text-white/70 leading-relaxed mb-6">
                AI-driven workflow optimization, resource allocation, and performance enhancement across all business operations.
              </p>
              <div className="flex items-center text-blue-300 font-medium group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
