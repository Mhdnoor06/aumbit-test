"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Database,
  Cpu,
  CalendarCheck,
  Workflow,
  CheckCircle,
  Clock,
  UserCheck,
} from "lucide-react";

const screenshots = [
  {
    title: "Environment Dashboard",
    description: "Real-time monitoring of all your environments",
    demo: (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">Production AWS</div>
              <div className="text-xs text-gray-400">us-east-1 • 64 vCPUs</div>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            AVAILABLE
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">Staging Azure</div>
              <div className="text-xs text-gray-400">
                West Europe • 32 vCPUs
              </div>
            </div>
          </div>
          <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
            OCCUPIED
          </Badge>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">Dev GCP</div>
              <div className="text-xs text-gray-400">
                us-central1 • 16 vCPUs
              </div>
            </div>
          </div>
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            PREPARING
          </Badge>
        </div>
      </div>
    ),
  },
  {
    title: "Booking System",
    description: "Schedule and manage environment bookings",
    demo: (
      <div className="space-y-3">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold flex items-center text-white">
              <CalendarCheck className="w-4 h-4 mr-2 text-blue-400" />
              New Booking Request
            </h4>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
              PENDING
            </Badge>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Environment:</span>
              <span className="font-medium text-white">Production AWS</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Duration:</span>
              <span className="font-medium text-white">2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Team:</span>
              <span className="font-medium text-white">DevOps Team</span>
            </div>
          </div>
          <div className="mt-3 flex space-x-2">
            <Button
              size="sm"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              Approve
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-gray-600 text-white hover:bg-gray-700/50 bg-transparent"
            >
              Decline
            </Button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Change Workflows",
    description: "Approval workflows with full audit trails",
    demo: (
      <div className="space-y-3">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
          <h4 className="font-semibold mb-3 flex items-center text-white">
            <Workflow className="w-4 h-4 mr-2 text-purple-400" />
            Change Request #CR-2024-042
          </h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  Technical Review
                </div>
                <div className="text-xs text-gray-400">
                  Approved by John Doe
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center animate-pulse">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-white">
                  CAB Approval
                </div>
                <div className="text-xs text-gray-400">
                  Waiting for approval
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-400">
                  Deployment
                </div>
                <div className="text-xs text-gray-500">Pending approval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const LiveDemoSection: React.FC = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Screenshot rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
            Live Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            See Realm9 in{" "}
            <span className="" style={{ color: "rgb(96 88 221)" }}>
              action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the power of unified environment management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Screenshot tabs */}
          <div className="space-y-4">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm border ${
                  activeScreenshot === index
                    ? "bg-gray-800/50 shadow-lg border-blue-500/50 shadow-blue-500/20"
                    : "bg-gray-900/30 hover:bg-gray-800/40 border-gray-700/50"
                }`}
                onClick={() => setActiveScreenshot(index)}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {screenshot.title}
                </h3>
                <p className="text-gray-400">{screenshot.description}</p>
              </div>
            ))}
          </div>

          {/* Animated demo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-700/50">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="transition-all duration-500 transform">
                {screenshots[activeScreenshot].demo}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
