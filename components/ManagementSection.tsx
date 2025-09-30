"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Kanban,
  Target,
  Users,
  List,
  TrendingDown,
} from "lucide-react";

const managementFeatures = [
  {
    icon: Calendar,
    title: "Sprint Planning",
    description:
      "Plan and execute project tasks efficiently within iterative sprint cycles.",
  },
  {
    icon: Kanban,
    title: "Kanban Boards",
    description:
      "Visualize project workflow and track task progress with customizable Kanban boards.",
  },
  {
    icon: Target,
    title: "Task Prioritization",
    description:
      "Prioritize tasks based on urgency and importance to ensure efficient use of resources.",
  },
  {
    icon: Users,
    title: "Collaborative Task Boards",
    description:
      "Collaboratively manage tasks and assignments in real-time, fostering teamwork and accountability.",
  },
  {
    icon: List,
    title: "Backlog Management",
    description:
      "Maintain a backlog of tasks and user stories, ensuring a steady flow of work for your team.",
  },
  {
    icon: TrendingDown,
    title: "Burndown Charts",
    description:
      "Monitor project progress and identify potential bottlenecks with easy-to-read burndown charts.",
  },
];

export function ManagementSection() {
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
          <h3 className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-white/10 px-3.5 pb-px text-sm font-medium text-white/70 md:text-base">
            Management
          </h3>
          <div className="flex max-w-[800px] flex-col justify-center gap-1 items-center self-center [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-center">
            <h4 className="text-white" title="Agile Project Planning">
              Agile Project Planning
            </h4>
          </div>
          <p className="max-w-screen-md text-pretty text-lg font-light text-white/70 md:text-xl text-center">
            Drive project success with agile project management capabilities
            tailored for small teams focused on rapid product development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5 mt-12">
          {managementFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <article
                key={index}
                className={`flex flex-col gap-4 rounded-lg border border-white/10 p-4 bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : "0s",
                }}
              >
                <figure className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/10 p-2">
                  <IconComponent className="h-4 w-4 text-white/80" />
                </figure>
                <div className="flex flex-col items-start gap-1">
                  <h5 className="text-lg font-medium text-white">
                    {feature.title}
                  </h5>
                  <p className="text-pretty text-white/70">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex items-center justify-center gap-3 md:order-3 mt-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
          style={{ animationDelay: isVisible ? "0.6s" : "0s" }}
        >
          <Button asChild className="h-9 px-5 text-sm md:text-base md:h-10">
            <a href="/sign-up">Get started</a>
          </Button>
          <Button
            variant="secondary"
            asChild
            className="h-9 px-5 text-sm md:text-base md:h-10 border border-white/20"
          >
            <a href="/features/collaborative-task-boards">See more</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
