"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck,
  ClipboardCheck,
  UserCheck,
  ArrowRight,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

export const WorkflowAutomationSection: React.FC = () => {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
      <div className="bg-slate-950 rounded-3xl p-12 text-white relative overflow-hidden border border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Workflow Automation
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Streamline your operations with intelligent workflows
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CalendarCheck className="w-6 h-6 text-blue-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Smart Booking System</h4>
                  <p className="text-gray-300 text-sm">
                    Schedule resources with conflict detection and automatic
                    approvals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ClipboardCheck className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Environment Requests</h4>
                  <p className="text-gray-300 text-sm">
                    Request new environments with automated provisioning
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <UserCheck className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Approval Workflows</h4>
                  <p className="text-gray-300 text-sm">
                    Multi-stage approvals with role-based access control
                  </p>
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              style={{ backgroundColor: "rgb(40 35 128)" }}
            >
              Explore Workflows
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className="relative">
            {/* Animated workflow visualization */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slideLeft">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">Team Request</div>
                    <div className="text-xs text-gray-300">
                      New environment needed
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slideLeft animation-delay-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">
                      Manager Approval
                    </div>
                    <div className="text-xs text-gray-300">
                      Reviewing request
                    </div>
                  </div>
                  <Clock className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 animate-slideLeft animation-delay-400">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold">
                      Environment Ready
                    </div>
                    <div className="text-xs text-gray-300">
                      Available for booking
                    </div>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
