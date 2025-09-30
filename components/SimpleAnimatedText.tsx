"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SimpleAnimatedTextProps {
  text: string;
  className?: string;
}

export function SimpleAnimatedText({
  text,
  className = "",
}: SimpleAnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Simple fade in animation
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className={`text-2xl font-semibold text-center text-white ${className}`}
      style={{ opacity: 0 }}
    >
      {text}
    </div>
  );
}
