"use client";

import React, { useEffect, useState } from "react";

const Auth0StatsSection: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation immediately when component mounts
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 w-full py-12 md:py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          {/* Title */}
          <h2
            className={`
              text-center font-medium text-2xl leading-tight tracking-tight
              md:text-3xl md:leading-tight
              lg:text-4xl lg:leading-tight
              max-w-3xl transition-opacity duration-700 ease-in-out text-white
              ${isAnimated ? "opacity-100" : "opacity-0"}
            `}
            style={{ transitionDelay: isAnimated ? "1000ms" : "0ms" }}
          >
            <span className="block">
              Aumbit delivers cutting-edge software and hardware
            </span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Stat Card 1 */}
          <div
            className={`text-center transition-opacity duration-700 ease-in-out ${
              isAnimated ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isAnimated ? "1250ms" : "0ms" }}
          >
            <p className="mb-2 text-blue-400 font-mono font-medium text-xs tracking-wider uppercase">
              SOFTWARE PRODUCTS
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
              3
            </div>
            <p className="text-base md:text-lg text-white/90 mb-1">
              innovative software solutions
            </p>
            <p className="text-xs text-white/60">
              Cards, Bellx, and Realm9 platforms
            </p>
          </div>

          {/* Stat Card 2 */}
          <div
            className={`text-center transition-opacity duration-700 ease-in-out ${
              isAnimated ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isAnimated ? "1500ms" : "0ms" }}
          >
            <p className="mb-2 text-cyan-400 font-mono font-medium text-xs tracking-wider uppercase">
              HARDWARE PERFORMANCE
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
              99.9%
            </div>
            <p className="text-base md:text-lg text-white/90">
              reliability rate
            </p>
          </div>

          {/* Stat Card 3 */}
          <div
            className={`text-center transition-opacity duration-700 ease-in-out ${
              isAnimated ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: isAnimated ? "1750ms" : "0ms" }}
          >
            <p className="mb-2 text-emerald-400 font-mono font-medium text-xs tracking-wider uppercase">
              GLOBAL REACH
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
              50+
            </div>
            <p className="text-base md:text-lg text-white/90">
              countries served worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth0StatsSection;
