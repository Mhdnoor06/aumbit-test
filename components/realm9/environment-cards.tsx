"use client";

import type React from "react";

import { GlowCard } from "@/components/spotlight-card";
import { AnimatedContainer } from "@/components/realm9/hero-animated";
import { Cloud, Database, Settings } from "lucide-react";

interface EnvironmentCardProps {
  title: string;
  status: "available" | "occupied" | "preparing";
  provider: string;
  specs: {
    vcpus: number;
    ram: string;
  };
  icon: React.ReactNode;
}

const statusConfig = {
  available: {
    color: "green" as const,
    label: "AVAILABLE",
    dotColor: "bg-green-500",
    textColor: "text-green-400",
  },
  occupied: {
    color: "orange" as const,
    label: "OCCUPIED",
    dotColor: "bg-yellow-500",
    textColor: "text-yellow-400",
  },
  preparing: {
    color: "blue" as const,
    label: "PREPARING",
    dotColor: "bg-blue-500",
    textColor: "text-blue-400",
  },
};

function EnvironmentCard({
  title,
  status,
  provider,
  specs,
  icon,
}: EnvironmentCardProps) {
  const config = statusConfig[status];

  return (
    <GlowCard
      glowColor={config.color}
      customSize={true}
      className="w-full h-auto aspect-auto p-6 bg-slate-900/50 border-slate-700/50"
    >
      <div className="flex flex-col h-full">
        {/* Header with icon and status */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-slate-300">{icon}</div>
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${config.textColor} bg-slate-800/50 border border-slate-700/50`}
          >
            {config.label}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-4">
          <div className={`w-2 h-2 rounded-full ${config.dotColor}`}></div>
          <span className="text-sm text-slate-300">Active</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mt-auto">
          <span>{specs.vcpus} vCPUs</span>
          <span>{specs.ram}</span>
        </div>
      </div>
    </GlowCard>
  );
}

export function EnvironmentOverview() {
  const environments = [
    {
      title: "Production AWS",
      status: "available" as const,
      provider: "AWS",
      specs: { vcpus: 4, ram: "16GB RAM" },
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "Staging Azure",
      status: "occupied" as const,
      provider: "Azure",
      specs: { vcpus: 4, ram: "16GB RAM" },
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Dev GCP",
      status: "preparing" as const,
      provider: "GCP",
      specs: { vcpus: 4, ram: "16GB RAM" },
      icon: <Settings className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedContainer className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Environment Overview
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Monitor and manage your cloud environments with real-time status
            updates
          </p>
        </AnimatedContainer>

        {/* Cards Grid */}
        <AnimatedContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          transition={{ delay: 0.3 }}
        >
          {environments.map((env, index) => (
            <EnvironmentCard
              key={index}
              title={env.title}
              status={env.status}
              provider={env.provider}
              specs={env.specs}
              icon={env.icon}
            />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
