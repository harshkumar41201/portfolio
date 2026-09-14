import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';
import { Copy, Check, Send, ArrowUpRight, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#e8c949', '#e09442', '#789e71'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSent(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#e8c949', '#e09442', '#ffffff'],
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
        <div>
          <div className="text-xs font-mono tracking-[3px] uppercase text-[#e8c949] mb-2">
            04 / KEEP IN TOUCH
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-display">
            Start A Conversation
          </h2>
        </div>
        <p className="text-sm font-mono text-white/50 max-w-sm">
          Available for full-time software engineering roles, technical consultations, and contracting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Inquiries */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-3">
              Direct Contact
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-2xl sm:text-3xl font-mono text-white hover:text-[#e8c949] transition-colors break-all"
              >
                {CONTACT_INFO.email}
              </a>

              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#e8c949] text-xs font-mono text-white hover:text-[#e8c949] transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#789e71]" />
                    <span className="text-[#789e71]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
              Connect Across Platforms
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl monopo-card hover:border-[#e8c949] transition-all group"
              >
                <span className="text-sm font-mono text-white group-hover:text-[#e8c949] transition-colors">
                  LinkedIn Profile [ /in/harsh-kumar04 ]
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#e8c949] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl monopo-card hover:border-[#e8c949] transition-all group"
              >
                <span className="text-sm font-mono text-white group-hover:text-[#e8c949] transition-colors">
                  GitHub Profile [ /harshkumar001 ]
                </span>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#e8c949] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-6">
          <div className="monopo-card p-8 sm:p-10 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6 font-display">
              Send an Inquiry
            </h3>

            {sent ? (
              <div className="p-8 text-center border border-[#789e71]/40 bg-[#789e71]/10 rounded-xl space-y-3">
                <Check className="w-8 h-8 text-[#789e71] mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">
                  Message Dispatched
                </h4>
                <p className="text-xs font-mono text-white/70">
                  Thank you for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono text-white hover:text-[#e8c949] transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#e8c949] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#e8c949] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your role or project requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#e8c949] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#e8c949] hover:bg-[#e09442] text-black font-bold text-xs font-mono tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#e8c949]/20 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
