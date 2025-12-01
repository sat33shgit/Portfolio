import React from 'react';

export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 cursor-pointer ${className}`}>
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:scale-105"
      >
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a5f" />
            <stop offset="50%" stopColor="#2d5a87" />
            <stop offset="100%" stopColor="#20c997" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="22" stroke="url(#logoGradient)" strokeWidth="2" fill="white"/>
        
        {/* B letter */}
        <path 
          d="M12 14h6c2.5 0 4 1.5 4 3.5 0 1.5-1 2.5-2 3 1.5 0.5 2.5 1.8 2.5 3.5 0 2.5-2 4-4.5 4H12V14z M15 17v4h3c1.2 0 2-0.8 2-2s-0.8-2-2-2h-3z M15 23v4h3.5c1.4 0 2.5-0.8 2.5-2s-1.1-2-2.5-2H15z" 
          fill="#1e3a5f"
        />
        
        {/* S letter */}
        <path 
          d="M24 25c0-1.5 1.2-2.5 3-2.5h3c0.8 0 1.5-0.5 1.5-1.2 0-0.8-0.7-1.3-1.5-1.3h-5v-3h5c2.5 0 4.5 1.8 4.5 4.3 0 2.2-1.8 4.2-4.5 4.2h-3c-0.6 0-1 0.4-1 1 0 0.6 0.4 1 1 1h5.5v3H27c-2 0-3-1.5-3-3z" 
          fill="#ff6b6b"
        />
        
        {/* K letter */}
        <path 
          d="M26 28h3l4-6-4-6h-3l4 6-4 6z" 
          fill="#20c997"
        />
      </svg>
      <span className="text-2xl font-bold tracking-tight">
        <span className="text-[#1e3a5f]">B</span>
        <span className="text-[#ff6b6b]">S</span>
        <span className="text-[#20c997]">K</span>
      </span>
    </div>
  );
}