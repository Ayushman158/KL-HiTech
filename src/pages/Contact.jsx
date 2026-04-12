import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
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
    <main ref={containerRef} className="pt-[140px] pb-24 bg-navy min-h-screen relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-[45%] flex flex-col animate-on-load">
            <h1 className="text-white font-sans font-[800] text-[clamp(44px,5vw,72px)] leading-[1.1] tracking-tight mb-8">
              Establish a <span className="text-electric italic font-serif">Secure link</span>.
            </h1>
            <p className="text-text-muted text-[17px] leading-[1.7] mb-12 text-pretty">
              We are available for commissions, collaborative RFPs, and complex architecture challenges. Connect with our primary HQ or regional hubs to initiate a secure dialogue.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col border-l-2 border-electric pl-6">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1">General Intelligence</span>
                <a href="mailto:info@klhitech.com" className="text-white font-[600] text-2xl hover:text-electric transition-colors">info@klhitech.com</a>
              </div>
              <div className="flex flex-col border-l-2 border-electric pl-6">
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest mb-1">Primary Telecom</span>
                <a href="tel:+919550556780" className="text-white font-[600] text-2xl hover:text-electric transition-colors">+91 9550556780</a>
                <a href="tel:+918458279570" className="text-steel font-[500] text-lg hover:text-white transition-colors mt-1">+91 8458279570</a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[55%] animate-on-load">
            <div className="bg-navy-lift border border-white/[0.08] rounded-[2rem] p-10 md:p-14 mb-8">
              <h3 className="text-white font-sans font-[600] text-2xl mb-8 border-b border-border-dark pb-6">Global Headquarters</h3>
              <div className="flex flex-col gap-2 font-mono text-steel text-sm leading-relaxed">
                <span className="text-white">KL HI-TECH SECURE PRINT LIMITED</span>
                <span>Plot No. 22-23</span>
                <span>Anrich Industrial Estate</span>
                <span>IDA Bollaram – 502325</span>
                <span>Sangareddy District</span>
                <span>Telangana, India</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
