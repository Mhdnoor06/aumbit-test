"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, Globe, CpuIcon } from "lucide-react";

interface Product {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
  backgroundImage: string;
  gradient: string;
  href?: string;
}

interface ProductCardsProps {
  products?: Product[];
  autoRotate?: boolean;
  rotationDelay?: number;
  className?: string;
}

const defaultProducts: Product[] = [
  {
    id: "cards",
    title: "Cards",
    description:
      "Smart cards for organizing and accessing information across devices with intelligent categorization.",
    features: [
      "Cross-device synchronization",
      "Intelligent categorization",
      "Smart search and filtering",
      "Customizable layouts",
    ],
    icon: <Cpu className="w-8 h-8" />,
    color: "blue",
    backgroundImage: "/Nova2004.jpeg",
    gradient: "from-blue-900/40 via-blue-800/30 to-blue-900/50",
  },
  {
    id: "bellx",
    title: "Bellx",
    description:
      "Intelligent assistant for boosting productivity and simplifying tasks across platforms.",
    features: [
      "AI-powered automation",
      "Multi-platform integration",
      "Smart scheduling",
      "Voice commands",
    ],
    icon: <Zap className="w-8 h-8" />,
    color: "green",
    backgroundImage: "/Gradient-Burst2030.jpeg",
    gradient: "from-green-900/40 via-green-800/30 to-green-900/50",
  },
  {
    id: "realm9",
    title: "Realm9",
    description:
      "Next-gen platform for building immersive digital experiences with speed and security.",
    features: [
      "Immersive 3D experiences",
      "Real-time collaboration",
      "Advanced security",
      "Scalable infrastructure",
    ],
    icon: <Globe className="w-8 h-8" />,
    color: "purple",
    backgroundImage: "/Phantom2008.jpeg",
    gradient: "from-purple-900/40 via-purple-800/30 to-purple-900/50",
  },
  {
    id: "hardware",
    title: "Hardware",
    description:
      "Cutting-edge hardware solutions that integrate seamlessly with software for optimal performance.",
    features: [
      "Advanced processing units",
      "Interface technologies",
      "Seamless integration",
      "Optimal performance",
    ],
    icon: <CpuIcon className="w-8 h-8" />,
    color: "orange",
    backgroundImage: "/Shockwave2015.jpeg",
    gradient: "from-orange-900/40 via-orange-800/30 to-orange-900/50",
  },
];

const colorClasses = {
  blue: {
    icon: "text-blue-300",
    iconBg: "bg-blue-500/20",
    text: "text-blue-200",
    accent: "text-blue-300",
    hover: "group-hover:text-blue-200",
    gradient: "from-blue-900/40 via-blue-800/30 to-blue-900/50",
    hoverGradient:
      "group-hover:from-blue-800/50 group-hover:via-blue-700/40 group-hover:to-blue-800/60",
  },
  green: {
    icon: "text-green-300",
    iconBg: "bg-green-500/20",
    text: "text-green-200",
    accent: "text-green-300",
    hover: "group-hover:text-green-200",
    gradient: "from-green-900/40 via-green-800/30 to-green-900/50",
    hoverGradient:
      "group-hover:from-green-800/50 group-hover:via-green-700/40 group-hover:to-green-800/60",
  },
  purple: {
    icon: "text-purple-300",
    iconBg: "bg-purple-500/20",
    text: "text-purple-200",
    accent: "text-purple-300",
    hover: "group-hover:text-purple-200",
    gradient: "from-purple-900/40 via-purple-800/30 to-purple-900/50",
    hoverGradient:
      "group-hover:from-purple-800/50 group-hover:via-purple-700/40 group-hover:to-purple-800/60",
  },
  orange: {
    icon: "text-orange-300",
    iconBg: "bg-orange-500/20",
    text: "text-orange-200",
    accent: "text-orange-300",
    hover: "group-hover:text-orange-200",
    gradient: "from-orange-900/40 via-orange-800/30 to-orange-900/50",
    hoverGradient:
      "group-hover:from-orange-800/50 group-hover:via-orange-700/40 group-hover:to-orange-800/60",
  },
};

export default function ProductCards({
  products = defaultProducts,
  autoRotate = true,
  rotationDelay = 5000,
  className = "",
}: ProductCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoRotate && !isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
      }, rotationDelay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, isHovered, products.length, rotationDelay]);

  const currentProduct = products[currentIndex];
  const colorClass =
    colorClasses[currentProduct.color as keyof typeof colorClasses];

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -15,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
      z: -100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const handleCardClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Card Display */}
      <div
        className="relative w-full h-[500px] perspective-1000"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 group cursor-pointer"
            style={{
              backgroundImage: `url("${currentProduct.backgroundImage}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Simple Overlay */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* Card Content */}
            <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center items-center text-center">
              <div>
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${colorClass.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <div className={colorClass.icon}>{currentProduct.icon}</div>
                </div>

                {/* Title */}
                <h3
                  className={`text-3xl font-bold mb-4 ${colorClass.hover} transition-colors duration-300`}
                >
                  {currentProduct.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed`}
                >
                  {currentProduct.description}
                </p>
              </div>

              {/* Learn More Button */}
              <div
                className={`mt-6 flex items-center ${colorClass.accent} ${colorClass.hover} transition-colors duration-300`}
              >
                <span className="text-lg font-medium">Learn more</span>
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Product Indicators */}
      <div className="flex justify-center space-x-3 mt-8">
        {products.map((product, index) => (
          <button
            key={product.id}
            onClick={() => handleCardClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? `${colorClass.iconBg} scale-125`
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`View ${product.title}`}
          />
        ))}
      </div>

      {/* Product Thumbnails */}
      <div className="flex justify-center space-x-4 mt-6">
        {products.map((product, index) => {
          const thumbColorClass =
            colorClasses[product.color as keyof typeof colorClasses];
          return (
            <button
              key={product.id}
              onClick={() => handleCardClick(index)}
              className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-2 ring-white/50 scale-110"
                  : "hover:scale-105 opacity-70 hover:opacity-100"
              }`}
              style={{
                backgroundImage: `url("${product.backgroundImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-60" : "opacity-40"
                }`}
              />
              <div className="relative z-10 flex items-center justify-center h-full">
                <div
                  className={`${thumbColorClass.icon} ${
                    index === currentIndex ? "scale-110" : ""
                  } transition-transform duration-300`}
                >
                  {product.icon}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
