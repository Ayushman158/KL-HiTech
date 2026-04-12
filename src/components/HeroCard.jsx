import React, { forwardRef } from 'react';

const HeroCard = forwardRef(({ className = '' }, ref) => {
  return (
    <div ref={ref} className={`relative w-full max-w-[360px] aspect-[1.58] rounded-[1.5rem] overflow-hidden shadow-2xl ${className}`} style={{ background: 'linear-gradient(135deg, #0F2040 0%, #1a3a6b 50%, #0A1628 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)' }}>
      {/* Chip */}
      <div className="absolute top-6 left-6 w-7 h-[22px] rounded border border-black/20 overflow-hidden" style={{ background: '#C9A84C' }}>
        <svg fill="none" viewBox="0 0 28 22" className="w-full h-full opacity-40">
          <path stroke="#000" strokeWidth="0.5" d="M0 7h8m12 0h8m-20 8h8m4 0h8M8 0v22m12-22v22" />
        </svg>
      </div>

      {/* Contactless */}
      <div className="absolute top-6 right-6 opacity-80">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
          <path d="M5.5 15.5c1.5-3 1.5-6 0-9M9.5 17.5c2.5-4 2.5-8.5 0-13M13.5 19.5c3.5-5 3.5-10.5 0-15M17.5 21.5c4.5-6 4.5-13.5 0-19" />
        </svg>
      </div>

      {/* Network Logo */}
      <div className="absolute bottom-6 right-6 flex items-center">
        <div className="w-7 h-7 rounded-full border border-white opacity-80 z-10 relative"></div>
        <div className="w-7 h-7 rounded-full bg-electric opacity-90 mix-blend-screen relative left-[-12px]"></div>
      </div>

      {/* Number */}
      <div className="absolute bottom-12 left-6 text-white font-mono text-[16px] tracking-[0.2em] font-medium drop-shadow-md">
        •••• •••• •••• 4291
      </div>

      {/* Name */}
      <div className="absolute bottom-6 left-6 text-white/70 font-mono text-[9px] tracking-widest drop-shadow-sm uppercase">
        KL HI-TECH SECURE
      </div>

      {/* Shimmer */}
      <div className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay opacity-80" 
           style={{
             background: 'linear-gradient(45deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.3) 30%, rgba(255,255,255,0.15) 50%, rgba(37,99,235,0) 70%)',
             backgroundSize: '200% 200%',
             animation: 'shimmer 3s infinite linear'
           }}>
      </div>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
});

export default HeroCard;
