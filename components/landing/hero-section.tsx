"use client";

import SplitText from "../SplitText";
import SimpleCardStack from "../AnimatedComponent/SimpleCardStack";

export function HeroSection() {
  return (
    <main className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 flex flex-col items-start gap-8 text-left">
            <SplitText
              text="Transforming industries with AI innovation"
              tag="h1"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-balance gradient-text"
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
              className="text-lg sm:text-xl text-white/90 max-w-2xl text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Aumbit pioneers AI-driven solutions across connectivity, media,
              fintech, and insurance. Revolutionary software and innovative
              hardware that transforms how industries operate.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={() => {
                  document.getElementById('mission-vision')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-700 group relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(to right, #0ea5e9, #0284c7, #075985)",
                  boxShadow:
                    "0 20px 25px -5px rgba(14, 165, 233, 0.05), 0 8px 10px -6px rgba(14, 165, 233, 0.05)",
                }}
              >
                <span className="relative z-10 flex items-center">
                  Learn More
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Animation */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <SimpleCardStack />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </main>
  );
}