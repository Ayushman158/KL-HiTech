import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Careers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.animate-on-load', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="pt-[140px] pb-24 bg-offwhite min-h-screen relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(0,163,224,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="w-full max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center animate-on-load">
        <div className="inline-flex items-center space-x-2 bg-electric/10 border border-electric/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
          <span className="font-mono text-[11px] text-electric uppercase tracking-widest font-semibold">We Are Hiring</span>
        </div>
        
        <h1 className="text-navy font-sans font-[800] text-[clamp(44px,5vw,72px)] leading-[1.1] tracking-tight mb-8">
          Build the <span className="text-electric italic font-serif">infrastructure</span> of trust.
        </h1>
        
        <p className="text-steel font-medium text-[18px] leading-[1.8] mb-12 max-w-3xl mx-auto text-pretty">
          KL HI-TECH is eagerly providing opportunities for solution-driven individuals possessing a passion for printing and creating a large-scale impact. With the secure printing industry set to rapidly grow, we offer an incredibly challenging and rewarding work environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <div className="bg-white border border-navy/10 shadow-[0_15px_40px_rgba(1,33,105,0.04)] hover:shadow-lg transition-shadow rounded-2xl p-8">
            <div className="text-electric font-mono text-2xl mb-2 font-bold">01.</div>
            <h3 className="text-navy font-[700] tracking-tight text-lg mb-2">Meritocratic Culture</h3>
            <p className="text-steel font-medium text-[15px] leading-relaxed">Operate in an inclusive ecosystem where your skills and solutions directly determine your upward momentum.</p>
          </div>
          <div className="bg-white border border-navy/10 shadow-[0_15px_40px_rgba(1,33,105,0.04)] hover:shadow-lg transition-shadow rounded-2xl p-8">
            <div className="text-electric font-mono text-2xl mb-2 font-bold">02.</div>
            <h3 className="text-navy font-[700] tracking-tight text-lg mb-2">Competitive Core</h3>
            <p className="text-steel font-medium text-[15px] leading-relaxed">We provide highly attractive compensation, comprehensive benefits, and leading incentives across the board.</p>
          </div>
          <div className="bg-white border border-navy/10 shadow-[0_15px_40px_rgba(1,33,105,0.04)] hover:shadow-lg transition-shadow rounded-2xl p-8">
            <div className="text-electric font-mono text-2xl mb-2 font-bold">03.</div>
            <h3 className="text-navy font-[700] tracking-tight text-lg mb-2">Scale & Impact</h3>
            <p className="text-steel font-medium text-[15px] leading-relaxed">Directly engineer systems and products that touch 80M+ individuals across 52 nations daily.</p>
          </div>
        </div>

        <div className="p-8 border border-navy/10 rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(1,33,105,0.06)] max-w-2xl mx-auto text-center flex flex-col items-center">
          <h4 className="text-navy font-sans font-[700] text-xl mb-3 tracking-tight">Ready to deploy?</h4>
          <p className="text-steel font-medium mb-8 text-[15px]">Submit your updated curriculum vitae to our recruitment center.</p>
          <a href="mailto:info@klhitech.com" className="bg-electric text-white px-10 py-4 rounded-[0.75rem] font-sans font-[600] text-[16px] hover:bg-navy hover:text-white transition-colors duration-300 shadow-[0_10px_20px_rgba(0,163,224,0.3)]">
            info@klhitech.com
          </a>
        </div>
      </div>
    </main>
  );
};

export default Careers;
