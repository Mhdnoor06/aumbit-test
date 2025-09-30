"use client";

import { useState } from "react";
import {
  Target,
  Eye,
  Sparkles,
  ChevronRight,
  Network,
  Film,
  Wallet,
  Shield,
  Brain,
  Globe2,
  Palette,
  Rocket
} from "lucide-react";

export function MissionVisionSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const missionPoints = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Transform Connectivity",
      description: "Creating smarter networks that anticipate and address issues before they affect users"
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Enrich Media Experiences",
      description: "Developing personalized and immersive platforms that adapt to individual preferences"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Secure Financial Transactions",
      description: "Harnessing AI for transparency, efficiency, and personalized financial advice"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Innovate Insurance",
      description: "Using predictive analytics to anticipate risks and offer dynamic, adaptive policies"
    }
  ];

  const visionPoints = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI as Blueprint",
      description: "AI transcends enhancement to become the blueprint of a new civilization"
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Living Connectivity",
      description: "A breathing organism connecting every soul to information and opportunities"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Infinite Media Canvas",
      description: "Reality intertwines with imagination, creating lived experiences unique as fingerprints"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Economic Birthright",
      description: "Financial empowerment as a birthright in a borderless economy"
    }
  ];

  return (
    <section id="mission-vision" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/98 to-slate-900"></div>

      {/* Subtle Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300/80">Our Purpose</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Shaping Tomorrow's World
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            At Aumbit, we're not just building technology – we're architecting the future where AI and humanity converge
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 border border-blue-400/30 shadow-lg shadow-blue-500/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Mission</span>
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Vision</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Mission Content */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "mission"
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Main Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Our Mission</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Transforming Industries Through
                  <span className="block bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
                    Intelligent Innovation
                  </span>
                </h3>

                <p className="text-lg text-white/80 leading-relaxed">
                  Aumbit's mission is to revolutionize connectivity, media, fintech, and insurance by leveraging AI
                  to create smarter, safer, and more personalized experiences while maintaining the highest ethical
                  standards and promoting sustainability.
                </p>

                <button className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="font-medium">Learn more about our impact</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Right: Mission Points Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.04] border border-white/5 hover:border-blue-400/20 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {point.icon}
                        </div>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{point.title}</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Content */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "vision"
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform -translate-y-4 pointer-events-none absolute inset-0"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Vision Points Grid */}
              <div className="grid sm:grid-cols-2 gap-4 order-2 lg:order-1">
                {visionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.02] to-white/[0.05] border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                          {point.icon}
                        </div>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{point.title}</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Main Text */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Our Vision</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Pioneering an Epoch Where
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    AI Shapes Civilization
                  </span>
                </h3>

                <p className="text-lg text-white/80 leading-relaxed">
                  We envision a future where AI becomes the co-creator with humanity, converging technology
                  and ethics, innovation and sustainability, to lift life into realms of possibility previously
                  only dreamt of in our collective imagination.
                </p>

                <button className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                  <span className="font-medium">Explore our vision for tomorrow</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <p className="text-white/50 text-sm">
            Committed to delivering products that adhere to the highest ethical standards
          </p>
          <div className="flex justify-center items-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="text-xs text-white/60">Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs text-white/60">Ethical</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs text-white/60">Inclusive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}