import React, { useEffect, useState } from 'react';

export const BackgroundGradients: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = window.innerWidth * 0.7;
    let targetY = window.innerHeight * 0.35;
    let currentX = targetX;
    let currentY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#06070a]">
      {/* 1. Precision Tech Grid Matrix (Masked to seamlessly blend into obsidian space) */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 85%)',
        }}
      />

      {/* 2. Top Horizon Beam & Radiant Ambient Light (Linear / Apple inspired) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[1.5px] bg-gradient-to-r from-transparent via-[#e8c949]/60 via-[#789e71]/40 to-transparent shadow-[0_0_20px_rgba(232,201,73,0.4)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-28 bg-gradient-to-b from-[#e8c949]/12 to-transparent blur-3xl" />

      {/* 3. Primary Hero Ambient Gradient Halo (Warm Champagne & Radiant Amber) */}
      <div
        className="absolute -top-[10%] right-[2%] w-[680px] sm:w-[920px] h-[680px] sm:h-[920px] rounded-full filter blur-[110px] opacity-60 animate-pulse"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(232, 201, 73, 0.42) 0%, rgba(224, 148, 66, 0.26) 38%, rgba(120, 158, 113, 0.12) 65%, transparent 80%)',
          animationDuration: '8s',
        }}
      />

      {/* 4. Secondary Middle Ambient Aurora (Sage Emerald & Deep Jade) */}
      <div
        className="absolute top-[32%] -left-[12%] w-[580px] sm:w-[820px] h-[580px] sm:h-[820px] rounded-full filter blur-[130px] opacity-45"
        style={{
          background: 'radial-gradient(circle at 45% 45%, rgba(120, 158, 113, 0.38) 0%, rgba(52, 140, 89, 0.20) 45%, rgba(6, 7, 10, 0) 78%)',
        }}
      />

      {/* 5. Tertiary Lower Section Bloom (Terracotta Bronze & Midnight Indigo) */}
      <div
        className="absolute bottom-[4%] right-[0%] w-[550px] sm:w-[780px] h-[550px] sm:h-[780px] rounded-full filter blur-[125px] opacity-50"
        style={{
          background: 'radial-gradient(circle at 55% 55%, rgba(224, 148, 66, 0.35) 0%, rgba(99, 102, 241, 0.16) 48%, rgba(6, 7, 10, 0) 80%)',
        }}
      />

      {/* 6. Dynamic Smooth Mouse Spotlight (Illuminates the grid and atmosphere) */}
      <div
        className="absolute w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-80 transition-opacity duration-300"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(232, 201, 73, 0.12) 0%, rgba(224, 148, 66, 0.05) 35%, transparent 70%)',
        }}
      />

      {/* 7. Typography Protection Vignette (Maintains crisp WCAG AAA legibility over left text) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 25% 45%, rgba(6, 7, 10, 0.72) 0%, rgba(6, 7, 10, 0.2) 60%, transparent 100%)',
        }}
      />

      {/* 8. Studio Perimeter Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 45%, rgba(6, 7, 10, 0.55) 85%, rgba(6, 7, 10, 0.95) 100%)',
        }}
      />
    </div>
  );
};
