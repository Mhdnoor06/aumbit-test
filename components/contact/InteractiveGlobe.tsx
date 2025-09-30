"use client";

import { useEffect, useRef } from "react";

interface Office {
  lat: number;
  lng: number;
  city: string;
  country: string;
}

const offices: Office[] = [
  { lat: 40.3855, lng: -74.20585, city: "New York / New Jersey", country: "USA" },
  { lat: 51.5074, lng: -0.1278, city: "London", country: "United Kingdom" },
  { lat: 12.9716, lng: 77.5946, city: "Bengaluru", country: "India" },
];



export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number | null>(null);
  const rotationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth || 400;
      canvas.height = canvas.offsetHeight || 400;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.4;

      // Enhanced glow effect background
      const bgGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 1.5);
      bgGradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
      bgGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.04)');
      bgGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw atmospheric glow
      const atmosGradient = ctx.createRadialGradient(centerX, centerY, radius * 0.95, centerX, centerY, radius * 1.1);
      atmosGradient.addColorStop(0, 'rgba(59, 130, 246, 0)');
      atmosGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.15)');
      atmosGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = atmosGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Draw globe base fill with gradient
      const baseGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      );
      baseGradient.addColorStop(0, 'rgba(30, 64, 175, 0.05)');
      baseGradient.addColorStop(1, 'rgba(30, 64, 175, 0.02)');
      ctx.fillStyle = baseGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw enhanced globe outline
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Draw latitude lines with better visibility
      ctx.strokeStyle = '#3b82f640';
      ctx.lineWidth = 1;
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        const y = centerY + (lat / 90) * radius;
        const latRadius = Math.cos((lat * Math.PI) / 180) * radius;
        ctx.ellipse(centerX, y, latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw longitude lines with better visibility
      ctx.strokeStyle = '#3b82f630';
      for (let lng = 0; lng < 360; lng += 30) {
        const angle = (lng + rotationRef.current) * Math.PI / 180;
        const xRadius = Math.abs(Math.cos(angle) * radius);

        // Only draw if radius is visible
        if (xRadius > 5) {
          ctx.lineWidth = Math.max(0.5, (1 - xRadius / radius) * 1.5);
          ctx.beginPath();
          ctx.ellipse(centerX, centerY, xRadius, radius, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Draw simple continent indicators (abstract shapes)
      ctx.fillStyle = '#3b82f615';
      ctx.strokeStyle = '#3b82f630';
      ctx.lineWidth = 0.5;

      // Draw abstract landmass shapes
      const drawLandmass = (centerLat: number, centerLng: number, size: number) => {
        const phi = (90 - centerLat) * Math.PI / 180;
        const theta = (centerLng + rotationRef.current) * Math.PI / 180;

        const x = centerX + radius * Math.sin(phi) * Math.cos(theta);
        const y = centerY + radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        if (z > 0) {
          ctx.beginPath();
          ctx.arc(x, y, size * (1 + z / radius) * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      };

      // Abstract continent representations
      drawLandmass(30, 0, radius * 0.15); // Africa/Europe
      drawLandmass(40, 100, radius * 0.2); // Asia
      drawLandmass(-20, 130, radius * 0.1); // Australia
      drawLandmass(45, -100, radius * 0.15); // North America
      drawLandmass(-20, -60, radius * 0.12); // South America

      // Draw office locations with enhanced visibility
      offices.forEach((office, index) => {
        const phi = (90 - office.lat) * Math.PI / 180;
        const theta = (office.lng + rotationRef.current) * Math.PI / 180;

        const x = centerX + radius * Math.sin(phi) * Math.cos(theta);
        const y = centerY + radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        // Only show if on visible side
        if (z > -radius * 0.3) {
          const visibility = Math.max(0, (z + radius * 0.3) / (radius * 1.3));
          ctx.globalAlpha = visibility;

          // Pulsing effect
          const pulse = Math.sin(Date.now() * 0.002 + index * Math.PI) * 0.3 + 1;

          // Connection to other office if both visible
          // ✅ safer single connection
          const otherOffice = offices[(index + 1) % offices.length];
          const phi2 = (90 - otherOffice.lat) * Math.PI / 180;
          const theta2 = (otherOffice.lng + rotationRef.current) * Math.PI / 180;

          const x2 = centerX + radius * Math.sin(phi2) * Math.cos(theta2);
          const y2 = centerY + radius * Math.cos(phi2);
          const z2 = radius * Math.sin(phi2) * Math.sin(theta2);

          if (z2 > -radius * 0.3) {
            // Draw connection arc
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 10]);
            ctx.beginPath();
            ctx.moveTo(x, y);

            // Create curved path
            const cx = (x + x2) / 2;
            const cy = (y + y2) / 2 - 50;
            ctx.quadraticCurveTo(cx, cy, x2, y2);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Enhanced outer glow
          const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, 20 * pulse);
          glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.9)');
          glowGradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.3)');
          glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(x, y, 20 * pulse, 0, Math.PI * 2);
          ctx.fill();

          // Office marker ring
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.stroke();

          // Inner dot
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fill();

          // Office label
          ctx.globalAlpha = visibility * 0.9;
          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 11px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(office.city, x, y - 15);

          ctx.globalAlpha = 1;
        }
      });

      // Rotation
      rotationRef.current += 0.3;
      frameRef.current = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ minHeight: '400px' }}
      />

      {/* Office markers */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-blue-300">Active Offices</span>
        </div>
      </div>
    </div>
  );
}