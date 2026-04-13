import React, { useEffect, useRef, useState, useMemo } from 'react';
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

const IndustryCard = ({ ind }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex-none w-[280px] lg:w-[260px] xl:w-[220px] 2xl:w-[240px] snap-start bg-navy-lift rounded-[1.5rem] p-[1.75rem] border border-white/[0.08] group hover:border-electric/40 transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer"
      style={{ transform: isHovered ? 'translateY(-6px)' : 'translateY(0)', boxShadow: isHovered ? '0 10px 30px rgba(0,0,0,0.5)' : 'none' }}
    >
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37,99,235,0.15), transparent 100%)`
        }}
      />
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <h3 className="font-sans font-[600] text-white text-[18px] mb-3 group-hover:text-electric transition-colors duration-300">{ind.name}</h3>
        <p className="font-sans text-text-muted text-[13px] leading-[1.6] mb-6 flex-grow">{ind.desc}</p>
        <div className="mt-auto font-mono text-electric text-[12px] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center pt-4">
          View sector <span className="ml-2">→</span>
        </div>
      </div>
    </div>
  );
};

const Industries = () => {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  const backgroundDots = useMemo(() => {
    return Array.from({length: 52}).map((_, i) => {
      const cx = 150 + ((i * 137) % 700);
      const cy = 120 + ((i * 93) % 260);
      if((cx>100 && cx<300 && cy>100 && cy<400) || (cx>400 && cx<850 && cy>100 && cy<400)) {
        return <circle key={i} cx={cx} cy={cy} r="2.5" fill="#2563EB" className="dot-marker opacity-60 mix-blend-screen" style={{ transformOrigin: `${cx}px ${cy}px` }} />;
      }
      return null;
    });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.dot-marker, .ind-marker', {
        scrollTrigger: {
          trigger: mapRef.current,
          start: 'top 80%',
          once: true
        },
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'back.out(1.7)'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMapMouseMove = (e) => {
    if (!mapRef.current) return;
    const { left, top, width, height } = mapRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; 
    const y = (e.clientY - top) / height - 0.5;

    gsap.to('.parallax-map-base', {
      x: x * -20, y: y * -20, rotationY: x * 8, rotationX: -y * 8, ease: 'power2.out', duration: 1.5
    });
    gsap.to('.parallax-dots', {
      x: x * -45, y: y * -45, rotationY: x * 10, rotationX: -y * 10, ease: 'power2.out', duration: 2
    });
    gsap.to('.parallax-markers', {
      x: x * -30, y: y * -30, ease: 'power2.out', duration: 1.8
    });
  };

  const handleMapMouseLeave = () => {
    gsap.to(['.parallax-map-base', '.parallax-dots', '.parallax-markers'], {
      x: 0, y: 0, rotationY: 0, rotationX: 0, ease: 'power3.out', duration: 2
    });
  };

  const MapSVG = ({ viewBox }) => (
    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-50"></div>
      <svg viewBox={viewBox} className="w-full h-auto opacity-90 relative z-10" style={{ transformStyle: 'preserve-3d', overflow: 'visible' }}>
        
        {/* Core Abstract Map */}
        <g className="parallax-map-base" fill="rgba(255,255,255,0.04)" style={{ transformOrigin: '500px 250px' }}>
          <path d="M150 150h120v80h-60v40h-80v-80h20zM100 100h150v40h-150z" />
          <path d="M250 280h60v120h-40v40h-20z" />
          <path d="M450 100h80v60h-80zM400 130h40v40h-40z" />
          <path d="M420 200h100v100h-40v80h-60v-60h-20z" />
          <path d="M550 100h200v120h-80v60h-60v40h-60zM760 150h50v50h-50z" />
          <path d="M750 350h80v60h-80z" />
          <path d="M635 220 h35 v55 l-15 25 l-20-25 z" fill="#2563EB" style={{ filter: 'drop-shadow(0 0 10px rgba(37,99,235,0.5))' }} />
          
          {/* Connection Lines from India */}
          <g stroke="#2563EB" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
            <path d="M650 250 Q 550 150 480 140" fill="none" />
            <path d="M650 250 Q 500 280 470 250" fill="none" />
            <path d="M650 250 Q 750 200 800 280" fill="none" />
            <path d="M650 250 Q 400 100 250 160" fill="none" />
          </g>
        </g>

        {/* Floating Global Dots */}
        <g className="parallax-dots" style={{ transformOrigin: '500px 250px' }}>
          {backgroundDots}
        </g>

        {/* Floating Data Markers */}
        <g className="parallax-markers ind-marker" opacity="1">
          {/* Pulsing Core */}
          <circle cx="650" cy="250" r="4" fill="#2563EB" className="animate-ping opacity-50" />
          
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
          <text x="675" y="295" fill="white" fontSize="10" fontFamily="JetBrains Mono" className="font-semibold text-electric">BOLLARAM HQ</text>
          <line x1="655" y1="275" x2="670" y2="290" stroke="white" strokeWidth="0.5" opacity="0.5" />
        </g>
      </svg>
    </div>
  );

  return (
    <section ref={containerRef} className="py-16 md:py-[6rem] bg-navy w-full relative border-b border-border-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col">
        <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight mb-12 relative z-20">
          Across Every Critical Sector
        </h2>
        
        {/* Horizontal Scroll Cards */}
        <div className="flex overflow-x-auto pb-8 gap-6 snap-x custom-scrollbar relative z-20">
          {industries.map((ind, idx) => (
            <IndustryCard key={idx} ind={ind} />
          ))}
        </div>

        {/* Responsive Map Container with Interactive Parallax */}
        <div 
          ref={mapRef} 
          onMouseMove={handleMapMouseMove}
          onMouseLeave={handleMapMouseLeave}
          className="w-full relative mt-20 mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#060E1A] shadow-2xl cursor-crosshair group transition-all duration-300 hover:border-electric/30"
        >
          {/* Dynamic Grid Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="hidden lg:block w-full max-w-[1000px] mx-auto py-12 relative z-10">
            <MapSVG viewBox="0 0 1000 500" />
          </div>
          <div className="hidden md:block lg:hidden w-full max-w-[800px] mx-auto py-8 relative z-10">
            <MapSVG viewBox="200 100 700 350" />
          </div>
          <div className="block md:hidden w-full py-8 aspect-square flex items-center relative z-10">
            <MapSVG viewBox="500 180 260 160" />
          </div>
        </div>

      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(37,99,235,0.5); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(37,99,235,0.8); }
      `}</style>
    </section>
  );
};

export default Industries;
