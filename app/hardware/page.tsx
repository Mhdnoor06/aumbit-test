"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Navigation } from "@/components/landing/navigation";
import SplitText from "@/components/SplitText";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Zap,
  Shield,
  Wifi,
  Smartphone,
  Factory,
  Brain,
  CircuitBoard,
  Layers,
  Code,
  Radio,
  Usb,
  Eye,
  Home,
  Building,
  Car,
  Heart,
  Leaf,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function HardwarePage() {
  const [mounted, setMounted] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isPlatformVisible, setIsPlatformVisible] = useState(false);
  const [isCapabilitiesVisible, setIsCapabilitiesVisible] = useState(false);
  const [isPCBVisible, setIsPCBVisible] = useState(false);
  const [isSoftwareVisible, setIsSoftwareVisible] = useState(false);
  const [isAIVisible, setIsAIVisible] = useState(false);
  const [isInterfaceVisible, setIsInterfaceVisible] = useState(false);
  const [isMarketVisible, setIsMarketVisible] = useState(false);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const [isWhyChooseVisible, setIsWhyChooseVisible] = useState(false);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const platformRef = useRef<HTMLElement>(null);
  const capabilitiesRef = useRef<HTMLElement>(null);
  const pcbRef = useRef<HTMLElement>(null);
  const softwareRef = useRef<HTMLElement>(null);
  const aiRef = useRef<HTMLElement>(null);
  const interfaceRef = useRef<HTMLElement>(null);
  const marketRef = useRef<HTMLElement>(null);
  const industriesRef = useRef<HTMLElement>(null);
  const whyChooseRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  const createIntersectionObserver = useCallback(
    (setter: (value: boolean) => void) => {
      return ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          setter(true);
        }
      };
    },
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observers = [
      { ref: heroRef, setter: setIsHeroVisible },
      { ref: platformRef, setter: setIsPlatformVisible },
      { ref: capabilitiesRef, setter: setIsCapabilitiesVisible },
      { ref: pcbRef, setter: setIsPCBVisible },
      { ref: softwareRef, setter: setIsSoftwareVisible },
      { ref: aiRef, setter: setIsAIVisible },
      { ref: interfaceRef, setter: setIsInterfaceVisible },
      { ref: marketRef, setter: setIsMarketVisible },
      { ref: industriesRef, setter: setIsIndustriesVisible },
      { ref: whyChooseRef, setter: setIsWhyChooseVisible },
      { ref: statsRef, setter: setIsStatsVisible },
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        createIntersectionObserver(setter),
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observerInstances.forEach((observer) => observer.disconnect());
    };
  }, [createIntersectionObserver, mounted]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden"
      >
        {/* Background Atmosphere - Only for Hero */}
        <div className="absolute inset-0 -z-10">
          {/* Main radial gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
            }}
          />

          {/* Subtle noise texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Enhanced Space Animation Video Background - Only for Hero */}
        <div className="absolute inset-0 -z-5">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            style={{
              filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
            }}
          >
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Space-BjlPAfapX976c44BSkWOSKcQOf4YJZ.mp4"
              type="video/mp4"
            />
          </video>

          {/* Dynamic overlay that pulses with the animation */}
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(45, 70, 99, 0.2) 0%, rgba(26, 43, 66, 0.4) 50%, rgba(10, 22, 40, 0.6) 100%)",
              animationDuration: "4s",
            }}
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen w-full px-5 sm:px-20">
          <div
            className={`relative z-10 flex flex-col items-start gap-8 text-left ${
              mounted && isHeroVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <SplitText
              text="Building Tomorrow's Hardware Solutions Today"
              tag="h1"
              className="text-5xl font-bold leading-tight tracking-tight md:text-7xl text-balance gradient-text"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="left"
            />

            <p
              className="text-xl text-white/90 max-w-3xl text-pretty drop-shadow-lg animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              From concept to production, Aumbit delivers end-to-end hardware
              product development for consumer and enterprise markets.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
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
                  Get Started With Your Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
              <button
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 group"
                style={{
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="relative z-10 flex items-center">
                  View Our Capabilities
                  <svg
                    className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div
            className={`relative z-10 ${
              mounted && isHeroVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <div className="p-4 rounded-xl bg-accent/20">
              <CpuArchitecture />
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Innovation Platform */}
      <section
        id="platform"
        ref={platformRef}
        className="relative z-10 w-full py-12 md:py-16 bg-slate-900"
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <div
            className={`flex flex-col items-center mb-8 md:mb-12 ${
              mounted && isPlatformVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Logo/Icon Container */}
            <div
              className={`mb-4 max-w-20 transition-opacity duration-500 ease-in-out ${
                isPlatformVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative">
                <svg
                  width="67"
                  height="82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <g
                    filter="url(#hardware_logo__filter0_i)"
                    className="transition-transform duration-1000 ease-in-out transform translate-x-0 translate-y-0"
                  >
                    <path
                      d="M5.193 35.164C18.2 33.011 28.4 22.73 30.534 9.617l1.048-6.38a1.926 1.926 0 00-2.044-2.232c-9.901.77-19.233 4.084-24.396 6.211A6.723 6.723 0 001 13.44v20.159a1.902 1.902 0 002.213 1.892l1.98-.327z"
                      fill="#0ea5e9"
                      fillOpacity="0.8"
                    />
                  </g>
                  <path
                    d="M29.523.806a2.127 2.127 0 012.257 2.462h0L30.73 9.65C28.582 22.846 18.318 33.194 5.226 35.361l-1.98.327A2.102 2.102 0 01.8 33.597V13.44A6.923 6.923 0 015.065 7.03C10.237 4.901 19.59 1.578 29.521.806h.002z"
                    stroke="url(#hardware_logo__paint0_linear)"
                    strokeWidth="0.4"
                    className="transition-transform duration-1000 ease-in-out transform translate-x-0 translate-y-0"
                  />
                  <g
                    filter="url(#hardware_logo__filter1_i)"
                    className="transition-transform duration-1000 ease-in-out transform translate-x-0 translate-y-0"
                  >
                    <path
                      d="M36.802 9.617c2.135 13.113 12.334 23.394 25.34 25.547l1.98.326a1.902 1.902 0 002.214-1.892V13.44a6.75 6.75 0 00-4.142-6.224c-5.15-2.14-14.495-5.44-24.396-6.21a1.92 1.92 0 00-2.044 2.23l1.048 6.38z"
                      fill="#0284c7"
                      fillOpacity="0.8"
                    />
                  </g>
                  <path
                    d="M37.813.806h.002c9.31.724 18.124 3.679 23.44 5.811l1.017.414a6.95 6.95 0 014.264 6.409v20.159a2.102 2.102 0 01-2.446 2.089v-.002l-1.98-.325C49.018 33.194 38.754 22.846 36.605 9.65l-1.048-6.38-.018-.127A2.121 2.121 0 0137.813.806z"
                    stroke="url(#hardware_logo__paint1_linear)"
                    strokeWidth="0.4"
                    className="transition-transform duration-1000 ease-in-out transform translate-x-0 translate-y-0"
                  />
                  <defs>
                    <linearGradient
                      id="hardware_logo__paint0_linear"
                      x1="31.855"
                      y1="-2.635"
                      x2="-5.102"
                      y2="48.339"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.285" stopColor="#0ea5e9" />
                      <stop offset="0.501" stopColor="#0284c7" />
                      <stop offset="0.721" stopColor="#075985" />
                    </linearGradient>
                    <linearGradient
                      id="hardware_logo__paint1_linear"
                      x1="66.584"
                      y1="-2.635"
                      x2="29.628"
                      y2="48.342"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.285" stopColor="#0ea5e9" />
                      <stop offset="0.501" stopColor="#0284c7" />
                      <stop offset="0.721" stopColor="#075985" />
                    </linearGradient>
                    <filter
                      id="hardware_logo__filter0_i"
                      x="0.6"
                      y="0.6"
                      width="31.407"
                      height="35.318"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix values="0 0 0 0 0.055 0 0 0 0 0.647 0 0 0 0 0.914 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow" />
                    </filter>
                    <filter
                      id="hardware_logo__filter1_i"
                      x="35.326"
                      y="0.6"
                      width="31.41"
                      height="35.318"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix values="0 0 0 0 0.011 0 0 0 0 0.518 0 0 0 0 0.78 0 0 0 1 0" />
                      <feBlend in2="shape" result="effect1_innerShadow" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2
              className={`text-center font-medium text-2xl leading-tight tracking-tight
                md:text-3xl md:leading-tight
                lg:text-4xl lg:leading-tight
                max-w-3xl transition-opacity duration-700 ease-in-out text-white ${
                  isPlatformVisible ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: isPlatformVisible ? "1000ms" : "0ms" }}
            >
              <span className="block">
                Aumbit is a comprehensive, adaptable
              </span>
              <span className="block">hardware development platform</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${
              mounted && isPlatformVisible
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: isPlatformVisible ? "1250ms" : "0s" }}
          >
            {/* Stat Card 1 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-blue-400 font-mono font-medium text-xs tracking-wider uppercase">
                END-TO-END DEVELOPMENT
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Concept to Production
              </div>
              <p className="text-base md:text-lg text-white/90 mb-1">
                complete hardware lifecycle
              </p>
              <p className="text-xs text-white/60">
                from idea to market-ready product
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-cyan-400 font-mono font-medium text-xs tracking-wider uppercase">
                MULTI-DISCIPLINARY EXPERTISE
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                8+ Specializations
              </div>
              <p className="text-base md:text-lg text-white/90">
                integrated approach
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-emerald-400 font-mono font-medium text-xs tracking-wider uppercase">
                SCALABLE SOLUTIONS
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-300
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Prototype to Mass Production
              </div>
              <p className="text-base md:text-lg text-white/90">
                from single units to millions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 w-full bg-transparent px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Complete Hardware Product Lifecycle Management
          </h2>
          <p className="text-white/70 text-xl max-w-4xl mx-auto leading-relaxed">
            Transform your hardware ideas into market-ready products with our
            comprehensive development expertise spanning PCB design, firmware,
            software, and IoT solutions.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section
        id="capabilities"
        ref={capabilitiesRef}
        className="relative z-10 w-full bg-transparent px-6 lg:px-12 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Core Capabilities
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Product Lifecycle */}
            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isCapabilitiesVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isCapabilitiesVisible ? "0.05s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Layers className="h-6 w-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300 mb-4">
                Product Conceptualization & Design
              </h3>
              <ul className="space-y-3 text-white/70 group-hover:text-white/80 transition-colors duration-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Market research and feasibility analysis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Product specification development
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Industrial design and user experience planning
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Prototyping and proof-of-concept development
                </li>
              </ul>
            </div>

            {/* Engineering */}
            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isCapabilitiesVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isCapabilitiesVisible ? "0.1s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <CircuitBoard className="h-6 w-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300 mb-4">
                Engineering & Development
              </h3>
              <ul className="space-y-3 text-white/70 group-hover:text-white/80 transition-colors duration-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Circuit design and component selection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Mechanical engineering and enclosure design
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Compliance and certification planning
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Design for manufacturing (DFM) optimization
                </li>
              </ul>
            </div>

            {/* Production */}
            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isCapabilitiesVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isCapabilitiesVisible ? "0.15s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Factory className="h-6 w-6 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-green-300 transition-colors duration-300 mb-4">
                Production & Launch
              </h3>
              <ul className="space-y-3 text-white/70 group-hover:text-white/80 transition-colors duration-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Manufacturing partner selection
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Quality assurance and testing protocols
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Supply chain management
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  Product launch support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PCB Design Excellence */}
      <section
        id="pcb-design"
        className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500/10 text-orange-400 border-orange-500/20">
                PCB Design Excellence
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Advanced PCB Design Services
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                From simple single-layer boards to complex 32+ layer designs, we
                deliver optimized PCB solutions for any application.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    Design Services
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Multi-layer PCB design (up to 32+ layers)</li>
                    <li>• High-speed digital design</li>
                    <li>• RF and microwave circuit design</li>
                    <li>• Mixed-signal PCB layouts</li>
                    <li>• Flexible and rigid-flex PCB solutions</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">
                    Optimization
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Signal integrity analysis</li>
                    <li>• Power integrity optimization</li>
                    <li>• EMC design</li>
                    <li>• Thermal management solutions</li>
                    <li>• Design rule checking (DRC)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <Card className="relative bg-gray-900/80 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cpu className="h-8 w-8 text-blue-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        32+
                      </div>
                      <div className="text-gray-400">Layer Designs</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="h-8 w-8 text-purple-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        GHz
                      </div>
                      <div className="text-gray-400">High-Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        EMC
                      </div>
                      <div className="text-gray-400">Compliant</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Radio className="h-8 w-8 text-orange-400" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        RF
                      </div>
                      <div className="text-gray-400">Microwave</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Software & Firmware */}
      <section
        id="software"
        ref={softwareRef}
        className="relative z-10 w-full bg-transparent px-6 lg:px-12 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/20">
              Software & Firmware Development
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Complete Software Stack
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              From bare-metal firmware to cloud applications, we develop the
              entire software ecosystem for your hardware products.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isSoftwareVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isSoftwareVisible ? "0.05s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Code className="h-6 w-6 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300 mb-4">
                Embedded Software
              </h3>
              <ul className="space-y-2 text-white/70 group-hover:text-white/80 transition-colors duration-300 text-base leading-relaxed">
                <li>• Real-time operating systems (RTOS)</li>
                <li>• Bare-metal firmware development</li>
                <li>• Device drivers and HAL</li>
                <li>• Boot loaders and system init</li>
                <li>• Over-the-air (OTA) updates</li>
              </ul>
            </div>

            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isSoftwareVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isSoftwareVisible ? "0.1s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Smartphone className="h-6 w-6 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-purple-300 transition-colors duration-300 mb-4">
                Application Software
              </h3>
              <ul className="space-y-2 text-white/70 group-hover:text-white/80 transition-colors duration-300 text-base leading-relaxed">
                <li>• Mobile apps (iOS/Android)</li>
                <li>• Desktop applications</li>
                <li>• Web-based control interfaces</li>
                <li>• Cloud integration and APIs</li>
                <li>• Data analytics platforms</li>
              </ul>
            </div>

            <div
              className={`group rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                mounted && isSoftwareVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                animationDelay: isSoftwareVisible ? "0.15s" : "0s",
              }}
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Brain className="h-6 w-6 text-green-300 group-hover:text-green-200 transition-colors duration-300" />
              </div>
              <h3 className="text-white text-xl font-semibold group-hover:text-green-300 transition-colors duration-300 mb-4">
                Programming Expertise
              </h3>
              <ul className="space-y-2 text-white/70 group-hover:text-white/80 transition-colors duration-300 text-base leading-relaxed">
                <li>• C/C++ for embedded systems</li>
                <li>• Python for automation</li>
                <li>• JavaScript/TypeScript for web</li>
                <li>• Swift/Kotlin for mobile</li>
                <li>• Assembly optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Compute Solutions */}
      <section
        id="ai-solutions"
        className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
              AI & Compute Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Next-Generation AI Hardware
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI chips and compute platforms to build
              intelligent hardware solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  AI Capabilities
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    AI chip integration (NVIDIA Jetson, Google Coral, Intel
                    Movidius)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    AI model optimization and deployment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Edge AI inference acceleration
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Computer vision and voice AI
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Compute Solutions
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    High-performance compute platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    GPU-accelerated computing systems
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Edge computing architectures
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Thermal and power management
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900/80 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-500/10 rounded-lg">
                    <Brain className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      Neural Processing
                    </div>
                    <div className="text-sm text-gray-400">
                      Custom FPGA accelerators
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                    <Eye className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      Computer Vision
                    </div>
                    <div className="text-sm text-gray-400">
                      Real-time processing
                    </div>
                  </div>
                  <div className="text-center p-4 bg-green-500/10 rounded-lg">
                    <Cpu className="h-8 w-8 text-green-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      Edge Computing
                    </div>
                    <div className="text-sm text-gray-400">
                      Low-latency inference
                    </div>
                  </div>
                  <div className="text-center p-4 bg-orange-500/10 rounded-lg">
                    <Zap className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">
                      Performance
                    </div>
                    <div className="text-sm text-gray-400">
                      Optimized workloads
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Innovation Showcase - Sticky Slider */}
      <section
        ref={interfaceRef}
        className="py-14 md:py-[72px] flex flex-col items-center gap-10 relative lg:container lg:mx-auto lg:!flex-row lg:gap-0 lg:p-28"
      >
        <div className="container relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
          <div className="sticky bottom-0 top-[calc(var(--header-height,80px)+40px)] flex flex-col gap-10">
            <div
              className={`flex flex-col gap-3 items-start self-start ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* Badge */}
              <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-white/10 px-3.5 pb-px text-sm font-medium text-white/70 md:text-base">
                Hardware Innovation
              </h3>

              {/* Main heading */}
              <div className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-left">
                <h4
                  className="text-white"
                  title="Cutting-Edge Hardware Solutions"
                >
                  Cutting-Edge Hardware Solutions
                </h4>
              </div>

              {/* Description */}
              <p className="max-w-screen-md text-pretty text-lg font-light text-white/70 md:text-xl text-left">
                Discover our innovative hardware technologies that power the
                next generation of connected devices and smart systems.
              </p>
            </div>

            {/* Action buttons */}
            <div
              className={`flex items-center gap-3 md:order-3 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.2s" : "0s" }}
            >
              <button
                className="gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0 bg-blue-600 hover:bg-blue-700 text-white border-blue-700 inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10"
                style={{
                  background:
                    "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
                }}
              >
                Start Your Project
              </button>
              <button className="gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0 bg-white/10 hover:bg-white/20 text-white border border-white/20 inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
          <div className="no-scrollbar flex gap-10 overflow-auto px-6 lg:flex-col lg:px-0">
            {/* AI-Powered Processing */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.3s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 p-3">
                <Brain className="h-6 w-6 text-blue-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  AI-Powered Processing
                </h5>
                <p className="text-pretty text-white/70">
                  Advanced neural processing units and edge AI chips for
                  real-time intelligent decision making in hardware devices.
                </p>
              </div>
            </article>

            {/* Wireless Connectivity */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.4s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-green-500/20 p-3">
                <Wifi className="h-6 w-6 text-green-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  Wireless Connectivity
                </h5>
                <p className="text-pretty text-white/70">
                  Multi-protocol wireless solutions including WiFi 6E, Bluetooth
                  5.3, and 5G connectivity for seamless device communication.
                </p>
              </div>
            </article>

            {/* Power Management */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.5s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 p-3">
                <Zap className="h-6 w-6 text-yellow-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  Power Management
                </h5>
                <p className="text-pretty text-white/70">
                  Intelligent power management systems with ultra-low power
                  consumption and wireless charging capabilities.
                </p>
              </div>
            </article>

            {/* Sensor Integration */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.6s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20 p-3">
                <Eye className="h-6 w-6 text-purple-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  Sensor Integration
                </h5>
                <p className="text-pretty text-white/70">
                  Advanced sensor fusion technology combining vision, motion,
                  and environmental sensors for comprehensive data collection.
                </p>
              </div>
            </article>

            {/* Security & Encryption */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.7s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/20 p-3">
                <Shield className="h-6 w-6 text-red-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  Security & Encryption
                </h5>
                <p className="text-pretty text-white/70">
                  Hardware-level security with secure boot, encrypted storage,
                  and tamper-resistant design for enterprise-grade protection.
                </p>
              </div>
            </article>

            {/* Edge Computing */}
            <article
              className={`flex w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-white/10 bg-white/5 p-4 lg:w-full lg:flex-row lg:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                mounted && isInterfaceVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: isInterfaceVisible ? "0.8s" : "0s" }}
            >
              <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 p-3">
                <Cpu className="h-6 w-6 text-cyan-400" />
              </figure>
              <div className="flex flex-col items-start gap-1">
                <h5 className="text-lg font-medium text-white">
                  Edge Computing
                </h5>
                <p className="text-pretty text-white/70">
                  High-performance edge computing platforms with real-time
                  processing capabilities for latency-critical applications.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Market Focus */}
      <section
        id="market-focus"
        className="py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Market Focus
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving diverse industries with specialized hardware solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Consumer Solutions */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Consumer Solutions
              </h3>
              <div className="space-y-6">
                <Card className="bg-gray-900/30 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Home className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Smart Home Products
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Connected appliances, security systems, entertainment
                          devices, health trackers, and smart lighting.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/30 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Smartphone className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Wearable Technology
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Fitness trackers, smartwatches, medical monitoring,
                          fashion-tech, and AR/VR accessories.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enterprise Solutions */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">
                Enterprise Solutions
              </h3>
              <div className="space-y-6">
                <Card className="bg-gray-900/30 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Factory className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Industrial IoT Systems
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Manufacturing automation, process monitoring,
                          predictive maintenance, and asset tracking.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/30 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Commercial Applications
                        </h4>
                        <p className="text-gray-400 text-sm">
                          POS systems, digital signage, access control, fleet
                          management, and professional AV equipment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section id="industries" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industries Served
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              {
                icon: Heart,
                label: "Healthcare",
                color: "text-red-400 bg-red-500/10",
              },
              {
                icon: Car,
                label: "Automotive",
                color: "text-blue-400 bg-blue-500/10",
              },
              {
                icon: Factory,
                label: "Industrial",
                color: "text-gray-400 bg-gray-500/10",
              },
              {
                icon: Smartphone,
                label: "Consumer",
                color: "text-purple-400 bg-purple-500/10",
              },
              {
                icon: Home,
                label: "Smart Home",
                color: "text-green-400 bg-green-500/10",
              },
              {
                icon: Zap,
                label: "Energy",
                color: "text-yellow-400 bg-yellow-500/10",
              },
              {
                icon: Leaf,
                label: "Agriculture",
                color: "text-green-400 bg-green-500/10",
              },
              {
                icon: ShoppingCart,
                label: "Retail",
                color: "text-orange-400 bg-orange-500/10",
              },
            ].map((industry, index) => (
              <Card
                key={index}
                className="bg-gray-900/30 border-gray-800 hover:border-gray-600 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 ${industry.color}`}
                  >
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-medium text-white">
                    {industry.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Aumbit */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-b from-black to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose Aumbit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for complete hardware product development
              from concept to production.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Technical Excellence
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Experienced team of hardware and software engineers
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    State-of-the-art design tools and testing equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Proven track record of successful product launches
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  End-to-End Service
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Single point of contact for complete projects
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Integrated approach reduces complexity and timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Full project management and accountability
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Market Understanding
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Deep knowledge of consumer and enterprise markets
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Regulatory compliance expertise
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Manufacturing and supply chain partnerships
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Innovation Focus
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Research and development in AI and edge computing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Early adoption of new AI chips and platforms
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    Intellectual property development and protection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Stats Section */}
      <section
        ref={statsRef}
        className="relative z-10 w-full py-12 md:py-16 bg-slate-900"
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <div
            className={`flex flex-col items-center mb-8 md:mb-12 ${
              mounted && isStatsVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Title */}
            <h2
              className={`text-center font-medium text-2xl leading-tight tracking-tight
                md:text-3xl md:leading-tight
                lg:text-4xl lg:leading-tight
                max-w-3xl transition-opacity duration-700 ease-in-out text-white ${
                  isStatsVisible ? "opacity-100" : "opacity-0"
                }`}
              style={{ transitionDelay: isStatsVisible ? "1000ms" : "0ms" }}
            >
              <span className="block">Trusted by industry leaders</span>
              <span className="block">for hardware innovation</span>
            </h2>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${
              mounted && isStatsVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: isStatsVisible ? "1250ms" : "0s" }}
          >
            {/* Stat Card 1 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-blue-400 font-mono font-medium text-xs tracking-wider uppercase">
                PRODUCTS SHIPPED
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                500+
              </div>
              <p className="text-base md:text-lg text-white/90 mb-1">
                hardware products delivered
              </p>
              <p className="text-xs text-white/60">across 15+ industries</p>
            </div>

            {/* Stat Card 2 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-cyan-400 font-mono font-medium text-xs tracking-wider uppercase">
                DESIGN EXCELLENCE
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-cyan-400 to-blue-500
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                99.8%
              </div>
              <p className="text-base md:text-lg text-white/90">success rate</p>
            </div>

            {/* Stat Card 3 */}
            <div className="text-center transition-opacity duration-700 ease-in-out opacity-100">
              <p className="mb-2 text-emerald-400 font-mono font-medium text-xs tracking-wider uppercase">
                INNOVATION SPEED
              </p>
              <div
                className="
                  text-3xl md:text-4xl lg:text-5xl font-bold
                  bg-gradient-to-r from-blue-500 via-emerald-400 to-cyan-300
                  bg-clip-text text-transparent mb-2
                "
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                6 months
              </div>
              <p className="text-base md:text-lg text-white/90">
                average time to market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 w-full bg-transparent px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Your Hardware Vision?
          </h2>
          <p className="text-white/70 text-xl mb-8 leading-relaxed">
            Contact Aumbit today to discuss your project requirements and
            discover how our comprehensive hardware development capabilities can
            accelerate your time-to-market.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 text-left">
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              Free initial consultation
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              Project feasibility assessment
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              Technology recommendation
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              Timeline and budget planning
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
              Prototype development proposal
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
              Schedule Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
