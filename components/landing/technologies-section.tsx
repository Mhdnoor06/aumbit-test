"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  ArrowRight,
  Cpu,
  Network,
  Globe,
  Zap,
  Sparkles,
  Shield,
} from "lucide-react";

export function TechnologiesSection() {
  const [isTechnologiesVisible, setIsTechnologiesVisible] = useState(false);
  const technologiesRef = useRef<HTMLElement>(null);

  // Memoized animation classes for better performance
  const getAnimationClass = useCallback((isVisible: boolean) => {
    return isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8";
  }, []);

  // Memoized animation delays
  const getAnimationDelay = useCallback((isVisible: boolean, delay: string) => {
    return isVisible ? delay : "0s";
  }, []);

  // Memoized style objects to prevent recreation on every render
  const buttonGradientStyle = useMemo(
    () => ({
      background: "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
      boxShadow:
        "0 20px 25px -5px rgba(14, 165, 233, 0.05), 0 8px 10px -6px rgba(14, 165, 233, 0.05)",
    }),
    []
  );

  // Optimized intersection observer with useCallback
  const handleTechnologiesIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsTechnologiesVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleTechnologiesIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    if (technologiesRef.current) {
      observer.observe(technologiesRef.current);
    }

    return () => observer.disconnect();
  }, [handleTechnologiesIntersection]);

  return (
    <section
      ref={technologiesRef}
      id="technologies"
      className="relative z-10 w-full min-h-screen flex items-center bg-transparent"
    >
      <div className="w-full px-6 lg:px-12 py-20">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6 ${getAnimationClass(
              isTechnologiesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isTechnologiesVisible, "0.05s"),
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">
              Cutting-Edge Technologies
            </span>
          </div>
          <h2
            className={`text-4xl md:text-6xl font-bold text-white mb-6 text-balance ${getAnimationClass(
              isTechnologiesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isTechnologiesVisible, "0.1s"),
            }}
          >
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p
            className={`text-white/70 text-xl max-w-4xl mx-auto leading-relaxed ${getAnimationClass(
              isTechnologiesVisible
            )}`}
            style={{
              animationDelay: getAnimationDelay(isTechnologiesVisible, "0.15s"),
            }}
          >
            Harnessing the power of artificial intelligence to transform
            industries and create revolutionary solutions that shape the future
            of technology.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Machine Learning - Large Card */}
            <div
              className={`group rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] md:col-span-2 md:row-span-2 flex flex-col ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.2s"
                ),
              }}
            >
              <div className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-500/40 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>

                  <div className="bg-white/10 rounded-full px-3 py-1">
                    <span className="text-white/80 text-xs font-medium">
                      CORE TECH
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                  Machine Learning
                </h3>
                <p className="text-white/70 text-lg leading-relaxed mb-6 flex-grow">
                  Advanced algorithms that learn and adapt, powering intelligent
                  decision-making across all our products and services with
                  unprecedented accuracy.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium">
                  <span>Explore ML Solutions</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Neural Networks - Medium Card */}
            <div
              className={`group rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full md:h-[calc(50%_-_12px)] min-h-[320px] ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.25s"
                ),
              }}
            >
              <div className="flex flex-col flex-grow">
                <div className="w-10 h-10 bg-green-500/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Network className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  Neural Networks
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                  Deep learning architectures that mimic human cognition.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm mt-auto">
                  <span>Discover Neural AI</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Computer Vision - Small Card */}
            <div
              className={`group rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full md:h-[calc(50%_-_12px)] min-h-[320px] ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.3s"
                ),
              }}
            >
              <div className="flex flex-col flex-grow">
                <div className="w-10 h-10 bg-purple-500/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  Computer Vision
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                  Advanced image and video processing capabilities.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm mt-auto">
                  <span>View Vision Tech</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* NLP - Medium Card */}
            <div
              className={`group rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.35s"
                ),
              }}
            >
              <div>
                <div className="w-10 h-10 bg-orange-500/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  NLP & Language AI
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Sophisticated language understanding and generation.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm">
                  <span>Explore NLP</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Predictive Analytics - Medium Card */}
            <div
              className={`group rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.4s"
                ),
              }}
            >
              <div>
                <div className="w-10 h-10 bg-cyan-500/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  Predictive Analytics
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Data-driven insights that forecast trends and behaviors.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm">
                  <span>Learn Analytics</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Edge Computing - Medium Card */}
            <div
              className={`group rounded-3xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${getAnimationClass(
                isTechnologiesVisible
              )}`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: getAnimationDelay(
                  isTechnologiesVisible,
                  "0.45s"
                ),
              }}
            >
              <div>
                <div className="w-10 h-10 bg-pink-500/40 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                  Edge Computing
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Distributed AI processing for real-time performance.
                </p>
                <div className="flex items-center text-white/80 group-hover:text-white font-medium text-sm">
                  <span>Discover Edge AI</span>
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div
          className={`text-center mt-20 ${getAnimationClass(
            isTechnologiesVisible
          )}`}
          style={{
            animationDelay: getAnimationDelay(isTechnologiesVisible, "0.5s"),
          }}
        >
          <button
            className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 group relative overflow-hidden"
            style={buttonGradientStyle}
          >
            <span className="relative z-10 flex items-center">
              Explore All Technologies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
}
