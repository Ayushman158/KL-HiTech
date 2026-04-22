import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Innovation = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.animate-on-load', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
      gsap.to('.hero-glow', {
        opacity: 0.15, duration: 2, yoyo: true, repeat: -1, ease: 'sine.inOut'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      title: 'Research & Development',
      desc: 'After setting up a robust manufacturing facility, we are venturing into RFID, IoT, and expanding our product portfolio in the areas of highly Secure Packaging and Identity Management.',
      icon: <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    },
    {
      title: 'Technology at the Core',
      desc: 'At the forefront of adopting new architecture. Whether it is design prowess or the mastery of different surfaces (paper, plastic, advanced polymer), we ensure the absolute best implementations.',
      icon: <path d="M12 2v20m10-10H2m15.536 7.536L6.464 6.464m11.072-11.072L6.464 17.536" />
    },
    {
      title: 'Information & Data Security',
      desc: 'Data is treated in the strictest confidence. Safeguarded using isolated encrypted firewalls. All customer data is heavily encrypted during transmission, storage, processing, and dynamically destroyed after processing.',
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    },
    {
      title: 'Secure Innovation',
      desc: 'Vulnerabilities in secure printing are aggressively neutralized by dedicated focus on reliability. As threats evolve, we constantly reinvent our security parameters to maintain uncompromised infrastructure.',
      icon: <path d="M12 2a5 5 0 0 1 5 5v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h2V7a5 5 0 0 1 5-5z M9 9h6V7a3 3 0 0 0-6 0v2z" />
    }
  ];

  return (
    <main ref={containerRef} className="pt-[140px] pb-24 bg-offwhite min-h-screen relative overflow-hidden">
      <div className="hero-glow absolute top-[-20%] right-[-20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full pointer-events-none mix-blend-multiply opacity-[0.1] z-0" style={{ background: 'radial-gradient(circle, rgba(0,163,224,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 max-w-3xl animate-on-load text-center mx-auto">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-4 font-semibold">
            // OUR ARCHITECTURE
          </div>
          <h1 className="text-navy font-sans font-[800] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8">
            Securing the world through <span className="text-electric italic font-serif">Innovation</span>.
          </h1>
          <p className="text-steel font-medium text-[18px] leading-[1.6]">
            Every system is designed to be impenetrable. Every print is designed to be flawless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="animate-on-load bg-white border border-navy/10 shadow-[0_15px_40px_rgba(1,33,105,0.03)] rounded-[2rem] p-10 md:p-12 hover:border-electric transition-all duration-500 hover:shadow-[0_20px_60px_rgba(1,33,105,0.08)] group relative">
              <div className="w-14 h-14 rounded-full bg-offwhite border border-navy/10 flex items-center justify-center mb-8 text-steel group-hover:text-electric transition-colors shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {pillar.icon}
                </svg>
              </div>
              <h3 className="text-navy font-sans font-[800] text-2xl mb-4 group-hover:text-electric transition-colors tracking-tight">{pillar.title}</h3>
              <p className="text-steel font-medium text-[16px] leading-[1.8] text-pretty">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Innovation;
