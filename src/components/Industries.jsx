import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const industries = [
  { name: 'Banking & Financial Services', desc: 'Identity fraud and payment security at scale' },
  { name: 'Government & Public Sector', desc: 'National identity, compliance and secure issuance' },
  { name: 'Education', desc: 'Document authenticity and credential integrity for millions' },
  { name: 'Telecom', desc: 'SIM lifecycle management and subscriber identity security' },
  { name: 'Transport & Logistics', desc: 'Ticketing, tolling and transit card infrastructure' },
  { name: 'Retail', desc: 'Loyalty, gift and prepaid card programmes' },
  { name: 'Healthcare', desc: 'Patient identity and access control card systems' }
];

const Industries = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.dot-marker', {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 75%',
          once: true
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.03,
        ease: 'back.out(1.7)'
      });
    }, mapRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 md:py-[6rem] bg-navy w-full relative border-b border-border-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col">
        <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight mb-12">
          Across Every Critical Sector
        </h2>
        
        {/* Horizontal Scroll Cards */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x custom-scrollbar">
          {industries.map((ind, idx) => (
            <div key={idx} className="flex-none w-[280px] lg:w-[260px] xl:w-[220px] 2xl:w-[240px] snap-start bg-navy-lift rounded-[1.5rem] p-[1.75rem] border border-white/[0.08] group hover:border-electric/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <h3 className="font-sans font-[600] text-white text-[18px] mb-3">{ind.name}</h3>
              <p className="font-sans text-text-muted text-[13px] leading-[1.6] mb-6">{ind.desc}</p>
              <div className="font-mono text-electric text-[12px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center absolute bottom-6">
                View sector <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* SVG World Map */}
        <div ref={mapRef} className="svg-map-container relative w-full overflow-x-auto overflow-y-hidden mt-24 mb-10 pb-6 custom-scrollbar">
          <div className="min-w-[800px] max-w-[1000px] mx-auto relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none"></div>
            <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-90 relative z-10" style={{ filter: 'drop-shadow(0 0 20px rgba(37,99,235,0.05))' }}>
              {/* Tech/Abstract Map Base */}
              <g fill="rgba(255,255,255,0.04)">
                {/* NA */}
                <path d="M150 150h120v80h-60v40h-80v-80h20zM100 100h150v40h-150z" />
                {/* SA */}
                <path d="M250 280h60v120h-40v40h-20z" />
                {/* EU */}
                <path d="M450 100h80v60h-80zM400 130h40v40h-40z" />
                {/* AF */}
                <path d="M420 200h100v100h-40v80h-60v-60h-20z" />
                {/* ASIA */}
                <path d="M550 100h200v120h-80v60h-60v40h-60zM760 150h50v50h-50z" />
                {/* AUS */}
                <path d="M750 350h80v60h-80z" />
                {/* India */}
                <path d="M635 220 h35 v55 l-15 25 l-20-25 z" fill="#2563EB" style={{ filter: 'drop-shadow(0 0 8px #2563EB)' }} />
              </g>

              {/* Connection Lines from India */}
              <g stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.3">
                <path d="M650 250 Q 550 150 480 140" fill="none" />
                <path d="M650 250 Q 500 280 470 250" fill="none" />
                <path d="M650 250 Q 750 200 800 280" fill="none" />
                <path d="M650 250 Q 400 100 250 160" fill="none" />
              </g>

              {/* Simulated Dots */}
              {Array.from({length: 52}).map((_, i) => {
                const cx = 150 + Math.random() * 700;
                const cy = 120 + Math.random() * 260;
                // Keep roughly within abstract boundaries
                if((cx>100 && cx<300 && cy>100 && cy<400) || (cx>400 && cx<850 && cy>100 && cy<400)) {
                  return <circle key={i} cx={cx} cy={cy} r="2.5" fill="#2563EB" className="dot-marker opacity-60" style={{ transformOrigin: `${cx}px ${cy}px` }} />;
                }
                return null;
              })}

              {/* Specific Office Labels around India */}
              <g className="dot-marker" opacity="1" style={{ transformOrigin: "650px 250px" }}>
                <circle cx="650" cy="235" r="3" fill="#ffffff" />
                <text x="665" y="238" fill="white" fontSize="10" fontFamily="JetBrains Mono" className="tracking-widest">DELHI</text>
                <line x1="650" y1="235" x2="660" y2="235" stroke="white" strokeWidth="0.5" opacity="0.5" />
                
                <text x="675" y="255" fill="white" fontSize="10" fontFamily="JetBrains Mono">NOIDA</text>
                <line x1="660" y1="250" x2="670" y2="252" stroke="white" strokeWidth="0.5" opacity="0.5" />
                
                <text x="675" y="275" fill="white" fontSize="10" fontFamily="JetBrains Mono">LUCKNOW</text>
                
                <circle cx="635" cy="265" r="3" fill="#ffffff" />
                <text x="560" y="268" fill="white" fontSize="10" fontFamily="JetBrains Mono">MUMBAI</text>
                <line x1="635" y1="265" x2="600" y2="265" stroke="white" strokeWidth="0.5" opacity="0.5" />
                
                <circle cx="645" cy="285" r="3" fill="#ffffff" />
                <text x="545" y="288" fill="white" fontSize="10" fontFamily="JetBrains Mono">BENGALURU</text>
                <line x1="645" y1="285" x2="605" y2="285" stroke="white" strokeWidth="0.5" opacity="0.5" />

                <circle cx="655" cy="275" r="3" fill="#ffffff" />
                <text x="675" y="295" fill="white" fontSize="10" fontFamily="JetBrains Mono">BOLLARAM HQ</text>
                <line x1="655" y1="275" x2="670" y2="290" stroke="white" strokeWidth="0.5" opacity="0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.02);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(37,99,235,0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(37,99,235,0.8);
        }
      `}</style>
    </section>
  );
};

export default Industries;
