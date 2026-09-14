import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 py-12 px-6 sm:px-12 max-w-7xl mx-auto z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-white/50">
        <div>
          <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>
          <span className="mx-2">/</span>
          <span>{PERSONAL_INFO.role}</span>
          <span className="mx-2">·</span>
          <span>© 2026 All Rights Reserved</span>
        </div>

        <div className="text-white/40 text-center tracking-wider">
          Monopo-Inspired Shaders · Three.js Refraction · Lenis Smooth Scroll
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#e8c949] transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
