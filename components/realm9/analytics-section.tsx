"use client";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import {
  DollarSign,
  Users,
  Activity,
  Brain,
  Globe,
  Shield,
} from "lucide-react";
import { BgGradient } from "./hero-animated";

const analyticsItems: BentoItem[] = [
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Monitor system performance, user engagement, and resource utilization with live data visualization and AI-powered insights",
    icon: <Activity className="w-5 h-5 text-blue-400" />,
    status: "Live",
    tags: ["Analytics", "Real-time", "AI"],
    colSpan: 2,
    content: (
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-300 text-sm">Environment Usage</span>
          <span className="text-white font-semibold">85%</span>
        </div>
        <div className="w-full bg-gray-700/50 rounded-full h-2">
          <div
            className="bg-blue-400 h-2 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>
        <div className="text-green-400 text-xs">+12% vs last month</div>
      </div>
    ),
  },
  {
    title: "Cost Optimization Engine",
    description:
      "AI-driven cost analysis and recommendations for maximum efficiency",
    icon: <DollarSign className="w-5 h-5 text-green-400" />,
    status: "Active",
    tags: ["Cost", "Optimization"],
    colSpan: 1,
    content: (
      <div className="mt-4">
        <div className="text-2xl font-bold text-white">$2.4M</div>
        <div className="text-gray-300 text-sm">Total Savings</div>
        <div className="text-green-400 text-xs mt-1">+24% this quarter</div>
      </div>
    ),
  },
  {
    title: "Team Performance Insights",
    description:
      "Track productivity metrics and collaboration patterns across your development teams",
    icon: <Users className="w-5 h-5 text-purple-400" />,
    status: "Updated",
    tags: ["Teams", "Productivity"],
    colSpan: 1,
    content: (
      <div className="mt-4">
        <div className="text-2xl font-bold text-white">92%</div>
        <div className="text-gray-300 text-sm">Team Utilization</div>
        <div className="text-green-400 text-xs mt-1">+8% improvement</div>
      </div>
    ),
  },
  {
    title: "Predictive Analytics Suite",
    description:
      "Machine learning models predict usage patterns, capacity needs, and potential bottlenecks before they occur",
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    status: "Beta",
    tags: ["ML", "Prediction", "Forecasting"],
    colSpan: 2,
    content: (
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <div className="text-lg font-semibold text-white">3.2x</div>
          <div className="text-gray-300 text-xs">Deployment Speed</div>
        </div>
        <div>
          <div className="text-lg font-semibold text-white">99.9%</div>
          <div className="text-gray-300 text-xs">Uptime Prediction</div>
        </div>
      </div>
    ),
  },
  {
    title: "Global Infrastructure Monitor",
    description:
      "Multi-region deployment tracking with edge computing performance metrics",
    icon: <Globe className="w-5 h-5 text-indigo-400" />,
    status: "Live",
    tags: ["Global", "Infrastructure"],
    colSpan: 1,
    content: (
      <div className="mt-4">
        <div className="text-lg font-semibold text-white">6 Regions</div>
        <div className="text-gray-300 text-sm">Active Deployments</div>
        <div className="text-blue-400 text-xs mt-1">Edge optimized</div>
      </div>
    ),
  },
  {
    title: "Security & Compliance Hub",
    description:
      "Automated security scanning and compliance monitoring with real-time threat detection",
    icon: <Shield className="w-5 h-5 text-red-400" />,
    status: "Protected",
    tags: ["Security", "Compliance"],
    colSpan: 1,
    content: (
      <div className="mt-4">
        <div className="text-lg font-semibold text-white">100%</div>
        <div className="text-gray-300 text-sm">Security Score</div>
        <div className="text-green-400 text-xs mt-1">All checks passed</div>
      </div>
    ),
  },
];

export default function AnalyticsSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Analytics & Reporting
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Data-driven insights for smarter decisions. Monitor usage patterns,
            optimize costs, and track team performance with comprehensive
            analytics
          </p>
        </div>

        <BentoGrid items={analyticsItems} />
      </div>
    </section>
  );
}
