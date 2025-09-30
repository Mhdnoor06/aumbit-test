"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

interface Card {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  glowColor: string;
  href?: string;
  bgImage: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Cards",
    description: "Smart organization & intelligent categorization",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    color: "blue",
    gradientFrom: "#0EA5E9",
    gradientTo: "#0284C7",
    glowColor: "rgba(14, 165, 233, 0.5)",
    href: "https://beta.aumpas.aumbit.io/",
    bgImage: "/Nova2004.jpeg",
  },
  {
    id: 2,
    title: "Bellx",
    description: "AI-powered productivity enhancement",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    color: "green",
    gradientFrom: "#10B981",
    gradientTo: "#059669",
    glowColor: "rgba(16, 185, 129, 0.5)",
    href: "https://bellx.aumbit.io/",
    bgImage: "/Gradient-Burst2030.jpeg",
  },
  {
    id: 3,
    title: "Realm9",
    description: "Next-gen immersive digital experiences",
    icon: <Globe className="w-7 h-7" strokeWidth={1.5} />,
    color: "blue",
    gradientFrom: "#3B82F6",
    gradientTo: "#1E40AF",
    glowColor: "rgba(59, 130, 246, 0.5)",
    href: "/realm9",
    bgImage: "/Phantom2008.jpeg",
  },
  {
    id: 4,
    title: "Hardware",
    description: "Cutting-edge integrated solutions",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    color: "orange",
    gradientFrom: "#F97316",
    gradientTo: "#EA580C",
    glowColor: "rgba(249, 115, 22, 0.4)",
    href: "/hardware",
    bgImage: "/Shockwave2015.jpeg",
  },
];

export default function SimpleCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % cards.length);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 50);
      }, 3000); // Faster cycle - 3 seconds instead of 4
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const getCardStyle = (index: number) => {
    const diff = (index - activeIndex + cards.length) % cards.length;
    const card = cards[index];

    // Horizontal stacking with fade effect
    const baseStyles = {
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smoother easing
      transformStyle: 'preserve-3d' as const,
      willChange: 'transform, opacity, filter' as const,
    };

    if (diff === 0) {
      // Active card - front with fade in
      return {
        ...baseStyles,
        transform: 'translateX(0) translateY(0) translateZ(40px) rotateY(0deg) scale(1)',
        opacity: isTransitioning ? 0.95 : 1,
        zIndex: 4,
        filter: `drop-shadow(0 20px 35px ${card.glowColor})`,
      };
    } else if (diff === 1) {
      // Second card - fade transition
      return {
        ...baseStyles,
        transform: 'translateX(45px) translateY(10px) translateZ(0px) rotateY(-6deg) scale(0.94)',
        opacity: isTransitioning ? 0.7 : 0.85,
        zIndex: 3,
        filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.3))",
      };
    } else if (diff === 2) {
      // Third card - subtle fade
      return {
        ...baseStyles,
        transform: 'translateX(90px) translateY(20px) translateZ(-40px) rotateY(-12deg) scale(0.88)',
        opacity: isTransitioning ? 0.5 : 0.65,
        zIndex: 2,
        filter: 'drop-shadow(0 5px 12px rgba(0,0,0,0.1))',
      };
    } else {
      // Back card - fading out
      return {
        ...baseStyles,
        transform: 'translateX(135px) translateY(30px) translateZ(-80px) rotateY(-18deg) scale(0.82)',
        opacity: isTransitioning ? 0.3 : 0.45,
        zIndex: 1,
        filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))',
      };
    }
  };

  return (
    <div
      className="relative w-[420px] h-[320px] perspective-[1200px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {cards.map((card, index) => {
  const style = getCardStyle(index);
  const isActive = index === activeIndex;

  const cardContent = (
    <div
      className={`w-full h-full rounded-2xl overflow-hidden relative group ${
        isActive ? 'ring-1 ring-white/10 animate-fadeIn' : ''
      }`}
      style={{
        backgroundImage: `url(${card.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backfaceVisibility: 'hidden',
      }}
    >
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/70" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(135deg, ${card.gradientFrom}15 0%, transparent 50%, ${card.gradientTo}15 100%)`,
        }}
      />
      {/* Subtle glass morphism */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-br from-white/[0.01] to-white/[0.03]" />
      {/* Content container */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
        {/* Icon and text */}
        <div className="relative">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md transition-transform duration-500 group-hover:scale-110"
            style={{
              background: `linear-gradient(135deg, ${card.gradientFrom}25, ${card.gradientTo}25)`,
              boxShadow: isActive ? `0 4px 20px ${card.glowColor}` : 'none',
            }}
          >
            <div className="text-white/90 group-hover:text-white transition-colors">
              {card.icon}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-3xl font-bold tracking-tight group-hover:scale-102 transition-transform duration-200 origin-left">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(to right, white 0%, ${card.gradientFrom} 50%, white 100%)`,
              }}
            >
              {card.title}
            </span>
          </h3>
          <p className="text-base text-white/80 group-hover:text-white/90 transition-colors leading-relaxed">
            {card.description}
          </p>
          {/* Call to action */}
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-all duration-300">
            <span>Explore</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Shimmer effect */}
      {isActive && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
          style={{
            background:
              'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.07) 50%, transparent 60%)',
            transform: 'translateX(-100%)',
            animation: 'shimmerSlide 3s infinite',
          }}
        />
      )}
    </div>
  );

  // ✅ Conditional wrapper
  return card.href ? (
    <Link
      key={card.id}
      href={card.href}
      className={`absolute inset-0 cursor-pointer ${isTransitioning ? 'transition-opacity duration-300' : ''}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      {cardContent}
    </Link>
  ) : (
    <div
      key={card.id}
      className={`absolute inset-0 cursor-pointer ${isTransitioning ? 'transition-opacity duration-300' : ''}`}
      style={{
        ...style,
        transformStyle: 'preserve-3d',
      }}
    >
      {cardContent}
    </div>
  );
})}


      {/* Interactive navigation dots */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
        {cards.map((card, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-500 rounded-full ${
              index === activeIndex
                ? 'w-8 h-2 bg-white/80'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            style={{
              boxShadow: index === activeIndex ? `0 0 12px ${card.glowColor}` : 'none',
            }}
            aria-label={`View ${card.title}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmerSlide {
          to {
            transform: translateX(100%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0.8;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
