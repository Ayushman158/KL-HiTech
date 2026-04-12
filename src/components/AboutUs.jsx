import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AboutUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-text > *', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });
      
      gsap.to('.pulse-ring', {
        scale: 1.5,
        opacity: 0,
        duration: 3,
        repeat: -1,
        ease: 'linear',
        stagger: 1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[6rem] bg-navy w-full relative z-10 border-b border-border-dark overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        maskImage: 'linear-gradient(to right, transparent, black)'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left Side - Text */}
        <div className="about-text w-full lg:w-[60%] flex flex-col pt-8">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-6">
            // ABOUT US
          </div>
          <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight leading-[1.1] mb-8">
            The Trust Anchor for India's Digital & Physical Security.
          </h2>
          <p className="font-sans text-text-muted text-[17px] leading-[1.7] mb-6 text-pretty">
            Since commencing operations in 1988, <strong className="text-white font-[600]">KL HI-TECH</strong> has played a pioneering role in enabling secure payment transactions, facilitating communications, and forging digital identities. We are one of India's largest banking card manufacturers with an annual production capacity exceeding <strong className="text-electric font-[600]">80 million cards</strong>.
          </p>
          <p className="font-sans text-text-muted text-[17px] leading-[1.7] mb-8 text-pretty">
            As a trusted partner to Central and State Governments, Nationalised Banks, Telecom Companies, and Election Commissions, we provide absolute, fool-proof smartcard and security printing infrastructure built on three decades of relentless innovation.
          </p>
          <div className="flex items-center gap-6">
            <button className="bg-electric text-white px-8 py-3.5 rounded-[0.5rem] font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-colors duration-300">
              Discover Our Legacy
            </button>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end relative h-[400px]">
          <div className="relative flex items-center justify-center w-[300px] h-[300px] mt-8 lg:mt-0">
            {/* Core Orb */}
            <div className="absolute w-[80px] h-[80px] rounded-full bg-electric shadow-[0_0_40px_rgba(37,99,235,0.6)] z-20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute w-[200px] h-[200px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite] z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            </div>
            <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse] z-10">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_rgba(37,99,235,1)]"></div>
            </div>

            {/* GSAP Pulse Rings */}
            <div className="pulse-ring absolute w-[100px] h-[100px] rounded-full border border-electric/40 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="pulse-ring absolute w-[100px] h-[100px] rounded-full border border-electric/40 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '1s' }}></div>
            <div className="pulse-ring absolute w-[100px] h-[100px] rounded-full border border-electric/40 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
