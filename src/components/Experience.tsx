import React from 'react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { Check, GraduationCap } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-10">
      {/* Section Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="text-xs font-mono tracking-[3px] uppercase text-[#e8c949] mb-2">
            01 / TRACK RECORD
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-display">
            Experience & Impact
          </h2>
        </div>
        <p className="text-sm font-mono text-white/50 max-w-sm">
          Production applications, high-throughput APIs, technical education, and freelance delivery.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {EXPERIENCE_DATA.map((item, index) => (
          <div
            key={item.id}
            className="monopo-card p-8 sm:p-10 rounded-2xl transition-all duration-300 group"
          >
            {/* Header: Company & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#e8c949] tracking-widest uppercase">
                  [ 0{index + 1} ] {item.type}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1 group-hover:text-[#e8c949] transition-colors font-display">
                  {item.role}
                </h3>
                <div className="text-sm font-mono text-white/70 mt-1">
                  {item.company}
                </div>
              </div>

              <div className="text-xs font-mono text-white/50 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                {item.period}
              </div>
            </div>

            {/* Description & Quantifiable Outcomes */}
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6 font-light">
              {item.description}
            </p>

            <ul className="space-y-3 mb-8">
              {item.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/75 leading-relaxed">
                  <span className="p-1 rounded bg-[#e8c949]/10 text-[#e8c949] mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            {/* Stack Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono text-white/40 mr-2 uppercase tracking-wider">
                Technologies:
              </span>
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white/80 hover:border-[#e8c949]/50 hover:text-[#e8c949] transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Academic Foundation */}
      <div id="education" className="mt-20 pt-12 border-t border-white/10">
        <div className="text-xs font-mono tracking-[3px] uppercase text-[#789e71] mb-2">
          02 / FOUNDATION
        </div>
        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 font-display">
          Academic Degree
        </h3>

        <div className="monopo-card p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 text-[#e8c949] text-xs font-mono mb-2 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Accredited Bachelor of Technology</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              {EDUCATION_DATA.degree}
            </h4>
            <div className="text-sm font-mono text-white/70 mt-1">
              {EDUCATION_DATA.institution} · {EDUCATION_DATA.period}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {EDUCATION_DATA.highlights.map((h, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-white/5 text-xs font-mono text-white/60">
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
              Cumulative Merit
            </span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#e8c949] font-mono mt-1">
              {EDUCATION_DATA.grade}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
