import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const stats = [
  { val: 80, suffix: 'M+', l1: 'Annual card', l2: 'production capacity' },
  { val: 52, suffix: '+', l1: 'Countries', l2: 'served' },
  { val: 500, suffix: '+', l1: 'Enterprise', l2: 'clients' },
  { val: 30, suffix: '+', l1: 'Years of', l2: 'manufacturing' }
];

const StatsDeepDive = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const statEls = gsap.utils.toArray('.deep-stat-val');
      statEls.forEach((el, i) => {
        const obj = { val: 0 };
        const targetVal = stats[i].val;
        
        gsap.to(obj, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true
          },
          val: targetVal,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.ceil(obj.val) + stats[i].suffix;
          }
        });
      });
      
      gsap.from('.deep-stat-block', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          once: true
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[6rem] bg-offwhite w-full relative border-y border-navy/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 relative z-10 text-center md:text-left">
        <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-3 font-semibold">
          // GLOBAL METRICS
        </div>
        <h2 className="font-sans font-[700] text-navy text-[clamp(28px,4vw,36px)] tracking-tight">
          Unmatched Production Scale
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white rounded-[2rem] border border-navy/10 shadow-[0_20px_60px_rgba(1,33,105,0.05)] w-full relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(1,33,105,0.08)]">
          {/* Subtle grid overlay for the dashboard card */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.04),transparent_80%)] pointer-events-none"></div>
          {/* Dynamic Top Bar */}
          <div className="absolute left-0 top-0 w-full h-[3px] bg-gradient-to-r from-transparent via-electric to-transparent opacity-80"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className={`deep-stat-block group flex flex-col justify-center items-center text-center py-16 px-6 relative overflow-hidden
                ${idx !== 0 ? 'lg:border-l lg:border-navy/5' : ''} 
                ${idx % 2 !== 0 ? 'sm:border-l sm:border-navy/5' : ''}
                ${idx >= 2 ? 'border-t border-navy/5 lg:border-t-0' : 'border-b sm:border-b-0 border-navy/5 lg:border-b-0'}`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-electric/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="font-sans font-[800] text-transparent bg-clip-text bg-gradient-to-br from-navy to-[#1a3a6b] text-[clamp(64px,6.5vw,88px)] tracking-[-0.03em] leading-none mb-5 h-[80px] lg:h-[100px] flex items-center relative z-10 drop-shadow-sm transition-transform duration-500 group-hover:scale-105 group-hover:from-electric group-hover:to-navy">
                  <span className="deep-stat-val">0{stat.suffix}</span>
                </div>
                <div className="font-sans font-[600] text-electric text-[16px] mb-2 relative z-10 tracking-wide">
                  {stat.l1}
                </div>
                <div className="font-mono text-steel text-[11px] tracking-[0.2em] uppercase font-semibold relative z-10">
                  {stat.l2}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDeepDive;
