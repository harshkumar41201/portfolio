import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'TECH STACK', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Monopo-style Lowercase / Bold Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#e8c949] transition-colors font-display">
            harsh<span className="text-[#e09442]">.</span>kumar
          </span>
          <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-white/40 uppercase pl-2 border-l border-white/15">
            {PERSONAL_INFO.location}
          </span>
        </a>

        {/* Center: Monopo-style Language / Role Badge */}
        <div className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono backdrop-blur-md">
          <span className="text-[#e8c949] font-bold">●</span>
          <span className="text-white/80 tracking-wider uppercase text-[11px]">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Right: Minimalist Editorial Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-[2px] text-white/70 hover:text-[#e8c949] transition-all relative group py-1"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e8c949] group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full border border-[#e8c949]/60 text-[#e8c949] hover:bg-[#e8c949] hover:text-black transition-all text-xs font-mono tracking-wider"
          >
            LET'S TALK
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-4 pb-8 bg-black/95 backdrop-blur-2xl border-b border-white/10">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono tracking-widest text-white/80 hover:text-[#e8c949] py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#e8c949]">
                {PERSONAL_INFO.status}
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-1.5 rounded-full bg-[#e8c949] text-black font-mono text-xs font-bold"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
