"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cloud,
  Shield,
  Zap,
  BarChart3,
  GitBranch,
  Users,
  Workflow,
  Brain,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { GlowCard } from "@/components/spotlight-card";
import { AnimatedContainer } from "@/components/realm9/hero-animated";

const features = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Multi-Cloud Management",
    description:
      "Seamlessly manage AWS, Azure, GCP, and on-premise environments with unified control",
    color: "from-blue-500 to-cyan-500",
    badge: "Core",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "Role-based access control with SOC2 and ISO27001 compliance standards",
    color: "from-green-500 to-emerald-500",
    badge: "Security",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Intelligent Automation",
    description:
      "AI-powered resource optimization and predictive analytics for better performance",
    color: "from-yellow-500 to-orange-500",
    badge: "AI",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Real-time Analytics",
    description:
      "Monitor costs, performance, and utilization with comprehensive dashboards",
    color: "from-purple-500 to-pink-500",
    badge: "Analytics",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    title: "Release Management",
    description:
      "Coordinate deployments across multiple environments with automated pipelines",
    color: "from-red-500 to-rose-500",
    badge: "DevOps",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description:
      "Streamline booking and resource sharing across distributed teams",
    color: "from-indigo-500 to-blue-500",
    badge: "Teams",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Change Management",
    description:
      "Track and approve changes with full audit trails and compliance reporting",
    color: "from-teal-500 to-cyan-500",
    badge: "Workflow",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Assistant",
    description:
      "Get intelligent recommendations and automate complex workflows effortlessly",
    color: "from-pink-500 to-purple-500",
    badge: "Smart",
  },
];

export const PlatformFeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 8);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* <BgGradient gradientColors="blue" gradientSize="lg" /> */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2 text-sm font-medium">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Everything you need to{" "}
            <span className="" style={{ color: "rgb(96 88 221)" }}>
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and features designed for modern IT operations
            and cloud infrastructure management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative overflow-hidden border border-gray-700/30 bg-gray-900/20 backdrop-blur-md hover:bg-gray-800/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 ${
                activeFeature === index
                  ? "ring-1 ring-blue-500/30 shadow-lg shadow-blue-500/10"
                  : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}
              />

              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-800/50 text-gray-300 border-gray-600/30 text-xs px-2 py-1"
                  >
                    {feature.badge}
                  </Badge>
                </div>

                <CardTitle className="text-xl font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-6">
                  {feature.description}
                </CardDescription>

                <Button
                  variant="ghost"
                  size="sm"
                  className="group/btn w-full justify-between text-gray-400 hover:text-white hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all duration-300 p-3 h-auto"
                >
                  <span className="font-medium">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
