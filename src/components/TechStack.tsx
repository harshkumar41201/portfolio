import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code2, Sparkles, Check } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', name: 'ALL TECHNOLOGIES' },
    ...SKILL_CATEGORIES.map((cat) => ({
      id: cat.id,
      name: cat.name.toUpperCase(),
    })),
  ];

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="text-xs font-mono tracking-[3px] uppercase text-[#e8c949] mb-2">
            03 / ARCHITECTURE & STACK
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-display">
            Skills & Capabilities
          </h2>
        </div>
        <p className="text-sm font-mono text-white/50 max-w-sm">
          Modern engineering stack built around reactivity, scalable API design, relational/document storage, and continuous delivery.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map((tab) => {
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#e8c949] text-black font-bold shadow-lg shadow-[#e8c949]/20'
                  : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat) => {
          const isAI = cat.id === 'learning';
          return (
            <div
              key={cat.id}
              className={`monopo-card p-8 rounded-2xl transition-all duration-300 ${
                isAI ? 'border-[#e09442]/40 bg-[#e09442]/5' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`p-2 rounded-lg ${
                      isAI ? 'bg-[#e09442]/20 text-[#e09442]' : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {isAI ? <Sparkles className="w-4 h-4" /> : <Code2 className="w-4 h-4" />}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">
                    {cat.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/40">
                  {cat.skills.length} competencies
                </span>
              </div>

              <p className="text-xs text-white/60 font-light mb-6">
                {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      isAI
                        ? 'bg-[#e09442]/15 border border-[#e09442]/30 text-[#e8c949]'
                        : 'bg-white/5 border border-white/10 text-white/80 hover:border-[#e8c949]/50 hover:text-[#e8c949]'
                    }`}
                  >
                    <Check className="w-3 h-3 text-[#789e71]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
