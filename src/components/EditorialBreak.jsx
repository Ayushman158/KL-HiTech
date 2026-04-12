import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EditorialBreak = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.photo-mosaic > div > div', {
        scrollTrigger: {
          trigger: '.photo-mosaic',
          start: 'top 80%',
          once: true
        },
        clipPath: 'inset(100% 0 0 0)',
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out'
      });
      
      gsap.from('.ed-text > div, .ed-text h2, .ed-text > ul > li', {
        scrollTrigger: {
          trigger: '.ed-text',
          start: 'top 85%',
          once: true
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[10rem] bg-navy w-full relative border-b border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 relative z-10">
        
        {/* Left Side */}
        <div className="ed-text w-full lg:w-1/2 flex flex-col pr-0 lg:pr-12">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-6">
            // MANUFACTURING EXCELLENCE
          </div>
          <h2 className="leading-[1.1] mb-12">
            <div className="font-sans font-[700] text-white text-[clamp(40px,5vw,56px)] tracking-tight">
              One partner.
            </div>
            <div className="font-serif italic text-electric text-[clamp(44px,5vw,60px)] mt-1">
              Every secure print need.
            </div>
          </h2>
          
          <ul className="flex flex-col border-t border-white/10 w-full">
            {[
              "ISO-certified manufacturing",
              "Visa, Mastercard & RuPay approved",
              "End-to-end supply chain security"
            ].map((text, idx) => (
              <li key={idx} className="py-6 border-b border-white/10 text-white font-sans font-[600] text-[16px] md:text-[18px]">
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Custom Built CSS Tech Aesthetics */}
        <div className="photo-mosaic w-full lg:w-1/2 grid grid-cols-2 gap-4 h-full relative mt-16 lg:mt-0">
          {/* Left column */}
          <div className="flex flex-col gap-4 mt-12">
             <div className="w-full h-[320px] rounded-[1.5rem] border border-white/[0.06] bg-gradient-to-b from-navy-lift to-navy relative overflow-hidden flex items-end p-6" style={{ clipPath: 'inset(0 0 0 0)' }}>
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(45deg, #2563EB 25%, transparent 25%, transparent 75%, #2563EB 75%, #2563EB), linear-gradient(45deg, #2563EB 25%, transparent 25%, transparent 75%, #2563EB 75%, #2563EB)', backgroundSize: '16px 16px', backgroundPosition: '0 0, 8px 8px' }}></div>
              <div className="text-electric font-mono text-[10px] tracking-widest uppercase border border-electric/20 px-3 py-1.5 rounded-full backdrop-blur-md bg-navy/50 relative z-10 w-max">Secure Core Framework</div>
            </div>
            <div className="w-full h-[260px] rounded-[1.5rem] border border-white/[0.06] bg-gradient-to-tr from-[#060E1A] to-electric/10 relative overflow-hidden flex items-center justify-center p-6" style={{ clipPath: 'inset(0 0 0 0)' }}>
               {/* Animated rings */}
               <div className="w-full h-full border border-electric/20 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <div className="w-[70%] h-[70%] border-t border-r border-electric/40 rounded-full"></div>
                 <div className="absolute w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_#2563EB] top-4"></div>
               </div>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-4">
             <div className="w-full h-[260px] rounded-[1.5rem] border border-white/[0.06] bg-navy-lift relative overflow-hidden flex flex-col items-center justify-center" style={{ clipPath: 'inset(0 0 0 0)' }}>
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-electric/40 shadow-[0_0_10px_#2563EB]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-electric rounded-full shadow-[0_0_15px_#2563EB]"></div>
            </div>
            <div className="w-full h-[320px] rounded-[1.5rem] border border-white/[0.06] bg-gradient-to-b from-navy to-electric/5 relative overflow-hidden p-6 flex flex-col justify-end" style={{ clipPath: 'inset(0 0 0 0)' }}>
              {/* Analytics bars */}
              <div className="w-full h-[50%] border-l border-b border-electric/20 mb-6 flex items-end justify-between px-2 pt-4 relative">
                <div className="w-[15%] h-[40%] bg-electric/20 rounded-t-sm backdrop-blur-sm"></div>
                <div className="w-[15%] h-[60%] bg-electric/40 rounded-t-sm backdrop-blur-sm"></div>
                <div className="w-[15%] h-[90%] bg-electric rounded-t-sm shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                <div className="w-[15%] h-[70%] bg-electric/60 rounded-t-sm backdrop-blur-sm"></div>
              </div>
              <div className="text-white/50 font-mono text-[10px] tracking-widest uppercase">Global Output Velocity</div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EditorialBreak;
