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
    <section ref={containerRef} className="py-[5rem] bg-offwhite w-full relative border-y border-navy/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,163,224,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 border-t border-b sm:border-b-0 lg:border-t-0 border-navy/10">
        {stats.map((stat, idx) => (
          <div key={idx} className={`deep-stat-block flex flex-col justify-center items-center text-center py-12 lg:py-10 px-4
            ${idx !== 0 ? 'lg:border-l lg:border-navy/10' : ''} 
            ${idx % 2 !== 0 ? 'sm:border-l sm:border-navy/10' : ''}
            ${idx >= 2 ? 'border-t border-navy/10 lg:border-t-0' : 'border-b sm:border-b-0 border-navy/10 lg:border-b-0'}`}
          >
            <div className="font-sans font-[800] text-navy text-[clamp(64px,7vw,96px)] tracking-[-0.03em] leading-none mb-4 h-[80px] lg:h-[100px] flex items-center shadow-none">
              <span className="deep-stat-val">0{stat.suffix}</span>
            </div>
            <div className="font-sans font-[600] text-electric text-[16px] mb-1">
              {stat.l1}
            </div>
            <div className="font-mono text-steel text-[12px] tracking-wide uppercase font-medium">
              {stat.l2}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsDeepDive;
