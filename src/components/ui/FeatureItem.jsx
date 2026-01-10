import React from 'react';

export default function FeatureItem({ icon = null, title, bullets = [], color }) {
  const circleStyle = color ? { backgroundColor: `${color}20`, color } : {};

  return (
    <div className="p-4 rounded-2xl border-[2px] border-[#1e3a5f] shadow-lg hover:shadow-lg transition-all duration-300 h-full bg-transparent">
      {/* header: icon and title stacked on mobile, inline on larger screens */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <div
          className="w-11 h-11 min-w-[2.75rem] rounded-full flex items-center justify-center shadow-sm"
          style={circleStyle}
          aria-hidden
        >
          <span className="text-lg">{icon || '⭐'}</span>
        </div>

        <h4 className="font-semibold text-[#1e3a5f] text-lg text-center sm:text-left">{title}</h4>
      </div>

      {/* spacing below header */}
      <div className="h-4" />

      <ul className="mt-2 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start">
            <span
              className="flex-none m-2 w-3 h-3 rounded-full shadow-sm mr-3 self-start"
              style={{ backgroundColor: color || '#94a3b8' }}
            />
            <p className="text-[#1e3a5f]">{b}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
