import React from 'react';

export const ScrollBadge: React.FC = () => {
  const handleClick = () => {
    const el = document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer group flex items-center justify-center select-none"
      title="Scroll to explore"
    >
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Rotating Circular Text */}
        <svg
          className="w-full h-full animate-spin-slow transition-transform duration-500 group-hover:scale-105"
          viewBox="0 0 100 100"
        >
          <path
            id="circlePath"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9.5px] font-mono uppercase fill-white/80 tracking-[2.5px] font-semibold">
            <textPath href="#circlePath" startOffset="0%">
              · SCROLL DOWN · SCROLL DOWN ·
            </textPath>
          </text>
        </svg>

        {/* Central Monopo Double Ring Interlock */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            width="28"
            height="20"
            viewBox="0 0 58 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:scale-115 transition-transform duration-300"
          >
            <circle
              cx="19"
              cy="19"
              r="17"
              stroke="#e8c949"
              strokeWidth="2.5"
              className="opacity-90"
            />
            <circle
              cx="38"
              cy="19"
              r="17"
              stroke="#ffffff"
              strokeWidth="2.5"
              className="opacity-80"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
