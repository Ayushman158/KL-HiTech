import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const sectors = [
  {
    name: 'Financial Institutions',
    desc: 'EMV cards, MICR cheques, personalisation & PIN mailers',
    icon: <><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10h3 M7 14h6"/><circle cx="17" cy="12" r="1"/></>
  },
  {
    name: 'Public Security & National Identity',
    desc: 'Aadhaar, voter ID, passports & ePassports',
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  },
  {
    name: 'Education',
    desc: 'Marksheets, certificates, OMR sheets & student IDs',
    icon: <><path d="M22 10L12 5 2 10l10 5 10-5zm-6 2.5v4c0 1.5-3 2.5-4 2.5s-4-1-4-2.5v-4"/></>
  },
  {
    name: 'Government Sector',
    desc: 'Security printing for compliance-critical departments',
    icon: <><path d="M2 10L12 2l10 8"/><path d="M6 10v12 M10 10v12 M14 10v12 M18 10v12 M2 22h20"/></>
  },
  {
    name: 'Telecom',
    desc: 'SIM cards, eSIM solutions & telecom card manufacturing',
    icon: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M14 2L18 6v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6z"/></>
  },
  {
    name: 'Transport',
    desc: 'FASTag, RFID tickets, SCOSTA cards & driving licences',
    icon: <><path d="M4 17h16M4 21h16M16 13h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2"/><path d="M8 5v8 M16 5v8 M12 5v8"/></>
  }
];

const SolutionsGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.solution-card-wrapper', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-[6rem] bg-navy-lift w-full relative z-10 border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-4">
            // OUR SOLUTIONS
          </div>
          <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight mb-4">
            Built for Critical Infrastructure
          </h2>
          <p className="font-sans text-text-muted text-base max-w-[600px] leading-[1.7]">
            Empowering the foundational systems of economies with end-to-end security printing and identity solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="solution-card-wrapper h-full">
              <div className="group bg-navy rounded-[1.5rem] p-8 border border-white/[0.08] cursor-pointer relative overflow-hidden transition-all duration-[0.3s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:border-electric/50 h-full flex flex-col">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-electric transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                
                <div className="w-12 h-12 rounded-xl bg-navy-lift border border-border-dark flex items-center justify-center mb-6 text-steel group-hover:text-electric transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {sector.icon}
                  </svg>
                </div>
                
                <h3 className="font-sans font-[600] text-white text-[18px] mb-3 group-hover:text-electric transition-colors pr-4">
                  {sector.name}
                </h3>
                <p className="font-sans text-text-muted text-[14px] leading-[1.6] mb-6 line-clamp-2">
                  {sector.desc}
                </p>
                
                <div className="mt-auto font-mono text-electric text-[13px] font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center">
                  Learn more <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsGrid;
