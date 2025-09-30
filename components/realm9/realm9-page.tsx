import { Button } from "@/components/ui/button";
import {
  AnimatedContainer,
  BgGradient,
  Hero,
  TextStagger,
} from "@/components/realm9/hero-animated";
import { GlassmorphismNavbar } from "@/components/realm9/glassmorphism-navbar";
import { EnvironmentOverview } from "@/components/realm9/environment-cards";
import AnalyticsSection from "@/components/realm9/analytics-section";
import { LiveDemoSection } from "@/components/realm9/live-demo-section";
import { PlatformFeaturesSection } from "@/components/realm9/platform-features-section";
import { CTASection } from "./cta-section";
import { WorkflowAutomationSection } from "./workflow-automation-section";
import { Realm9Footer } from "./realm9-footer";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";

export default function Realm9Page() {
  return (
    <main className="relative">
      {/* Home Button - Far left position */}
      <div className="fixed z-30 top-6 left-2">
        <Link href="/" className="group" aria-label="Back to Aumbit Landing">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Back to</span>
            <span className="relative overflow-hidden shadow-lg inline-block">
              <span className="w-[60px] h-[16px] relative inline-block">
                <Image
                  src="/aumbitlogo/aumbit-high-resolution-logo-transparent.png"
                  alt="Aumbit Logo"
                  fill
                  className="object-contain hover:opacity-80 transition-all duration-300"
                />
              </span>
            </span>
          </Button>
        </Link>
      </div>

      <GlassmorphismNavbar />
      <Hero className="space-y-4 px-6 py-12 text-zinc-100 md:px-10 lg:px-12 pt-24">
        <BgGradient gradientColors={"blue"} gradientSize="lg" />
        <TextStagger
          className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl"
          text="Transform Your IT Infrastructure"
          as="h1"
        />
        <AnimatedContainer className="mx-auto w-4/5 text-muted/80 md:w-1/2">
          <div>
            Unified platform for managing, monitoring, and optimizing your
            entire IT environment with AI-powered insights
          </div>
        </AnimatedContainer>

        <AnimatedContainer
          className="flex items-center justify-center gap-4"
          transition={{ delay: 0.6 }}
        >
          <Button size={"lg"} variant={"secondary"} className="rounded-full">
            Start Free Trial
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            className="rounded-full bg-transparent"
          >
            Watch Demo
          </Button>
        </AnimatedContainer>
      </Hero>

      <div className="bg-slate-950 relative">
        <EnvironmentOverview />
      </div>

      <div className="bg-slate-950 relative">
        <LiveDemoSection />
      </div>

      <div className="bg-slate-950 relative">
        <PlatformFeaturesSection />
      </div>

      <div className="bg-slate-950 relative">
        <AnalyticsSection />
      </div>

      <div className="bg-slate-950 relative">
        <WorkflowAutomationSection />
      </div>

      <div className="bg-slate-950 relative">
        <BgGradient
          gradientColors="blue"
          gradientSize="lg"
          gradientPosition="bottom"
        />

        <CTASection />
      </div>

      <Realm9Footer />
    </main>
  );
}
