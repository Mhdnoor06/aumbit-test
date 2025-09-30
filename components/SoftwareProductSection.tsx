"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Cpu, Zap, Globe } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link"; 

// Check icon component
const CheckIcon = () => <Check className="h-4 w-4 text-green-400" />;

// Feature item component
const FeatureItem = ({ text }: { text: string }) => (
  <li className="flex items-center gap-4 font-normal text-white/70">
    <span className="flex size-6 items-center justify-center rounded-full bg-white/10">
      <CheckIcon />
    </span>
    {text}
  </li>
);

// Main component
export default function SoftwareProductsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  const features = [
    {
      title: "Cards",
      description:
        "Smart cards for organizing and accessing information across devices with intelligent categorization. Streamline your workflow with our innovative card-based system that adapts to your needs and enhances productivity.",
      features: [
        "Cross-device synchronization",
        "Intelligent categorization system",
        "Smart search and filtering",
        "Customizable card layouts",
      ],
      icon: "cards",
      color: "blue",
    },
    {
      title: "Bellx",
      description:
        "Intelligent assistant for boosting productivity and simplifying tasks across platforms. Experience the power of AI-driven automation that understands your workflow and helps you accomplish more with less effort.",
      features: [
        "AI-powered task automation",
        "Multi-platform integration",
        "Smart scheduling and reminders",
        "Voice and text command support",
      ],
      icon: "bellx",
      color: "green",
    },
    {
      title: "Realm9",
      description:
        "Next-gen platform for building immersive digital experiences with speed and security. Create stunning, interactive applications that engage users while maintaining enterprise-grade security and performance.",
      features: [
        "Immersive 3D experiences",
        "Real-time collaboration tools",
        "Advanced security protocols",
        "Scalable cloud infrastructure",
      ],
      icon: "realm9",
      color: "purple",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full py-14 md:py-[72px] flex flex-col items-center gap-10"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`flex flex-col gap-3 items-center self-center ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-white/10 px-3.5 pb-px text-sm font-medium text-white/70 md:text-base">
            Software Products
          </div>
          <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-center">
            <h4 className="text-white">Innovative Software Solutions</h4>
          </div>
          <p className="max-w-screen-md text-pretty text-lg font-light text-white/70 md:text-xl text-center">
            Discover our suite of cutting-edge software products designed to
            enhance productivity, streamline workflows, and create immersive
            digital experiences.
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-6 mt-12">
          {features.map((feature, index) => (
            <article
              key={index}
              className={`flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-sm p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16 transition-all duration-300 hover:bg-slate-700/30 hover:border-white/20 hover:shadow-2xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
              }`}
              style={{
                animationDelay: isVisible ? `${index * 0.1}s` : "0s",
              }}
            >
              {/* Modern Design Element */}
              <figure className="relative p-4 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
                <div className="relative aspect-video h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-white/10 shadow-2xl group">
                  {/* Animated Background Grid */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10" />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                  </div>

                  {/* Animated Background Orbs */}
                  <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse" />
                  <div
                    className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                  <div
                    className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-lg animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />

                  {/* Main Product Icon Container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer Glow Ring */}
                      <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-full blur-lg animate-pulse" />

                      {/* Icon Container */}
                      <div className="relative w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        {feature.icon === "cards" && (
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <Cpu className="w-8 h-8 text-white" />
                          </div>
                        )}
                        {feature.icon === "bellx" && (
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <Zap className="w-8 h-8 text-white" />
                          </div>
                        )}
                        {feature.icon === "realm9" && (
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <Globe className="w-8 h-8 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </figure>

              {/* Content */}
              <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
                <div className="flex flex-col items-start gap-2">
                  <h5 className="text-2xl font-medium text-white md:text-3xl">
                    {feature.title}
                  </h5>
                  <p className="font-normal text-white/70 md:text-lg">
                    {feature.description}
                  </p>
                </div>

                {/* Feature list */}
                {feature.features.length > 0 && (
                  <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                    {feature.features.map((featureText, featureIndex) => (
                      <FeatureItem key={featureIndex} text={featureText} />
                    ))}
                  </ul>
                )}

                {/* Learn More Button */}
                <div className="mt-4">
                  {feature.title === "Realm9" ? (
                    <Link href="/realm9" className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
                      Learn more
                      <svg
                        className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
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
                    </Link>
                  ) : (
                    <button className="text-blue-300 hover:text-blue-200 font-medium flex items-center gap-2 group-hover:translate-x-2 transition-all duration-300">
                      Learn more
                      <svg
                        className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
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
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
