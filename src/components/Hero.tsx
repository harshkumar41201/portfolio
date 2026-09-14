import React from 'react';
import { PERSONAL_INFO, METRICS_DATA, CONTACT_INFO } from '../data/portfolioData';
import { ScrollBadge } from './ScrollBadge';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-36 pb-12 px-6 sm:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Top Tagline */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-[1px] bg-[#e8c949]" />
        <span className="text-xs sm:text-sm font-mono tracking-[3px] uppercase text-[#e8c949]">
          Full Stack Engineering & Systems
        </span>
      </div>

      {/* Main Massive Editorial Title */}
      <div className="max-w-3xl my-auto">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.02] font-display">
          Turn Ideas.
          <br />
          <span className="text-gradient-monopo">Into Reality.</span>
        </h1>

        <p className="mt-8 text-base sm:text-xl text-white/70 max-w-xl leading-relaxed font-light">
          {PERSONAL_INFO.bio}
        </p>

        {/* CTA Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#experience"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#e8c949] text-black font-semibold text-xs font-mono tracking-wider hover:bg-[#e09442] transition-all shadow-xl shadow-[#e8c949]/20 active:scale-95"
          >
            <span>EXPLORE WORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full border border-white/20 hover:border-[#e8c949] text-white font-mono text-xs tracking-wider transition-all backdrop-blur-md hover:bg-white/5 active:scale-95"
          >
            CONTACT ME
          </a>

          <div className="flex items-center gap-3 ml-2 text-white/50 text-xs font-mono">
            <a
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              [GITHUB]
            </a>
            <span>/</span>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              [LINKEDIN]
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section: Rotating Scroll Badge & Telemetry Metrics */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
        {/* Left: Monopo Circular Scroll Badge */}
        <div className="flex items-center gap-6">
          <ScrollBadge />
          <div className="hidden sm:block text-xs font-mono text-white/40 tracking-wider">
            SCROLL TO EXPLORE
            <br />
            <span className="text-[#789e71]">ENGINEERING MILESTONES</span>
          </div>
        </div>

        {/* Right: Key Telemetry Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {METRICS_DATA.map((metric) => (
            <div key={metric.id} className="border-l border-white/15 pl-4 group">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono group-hover:text-[#e8c949] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs font-mono text-white/60 mt-1 uppercase tracking-wider">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
