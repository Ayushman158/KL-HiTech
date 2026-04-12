import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const EditorialBreak = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.photo-mosaic img', {
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
    <section ref={containerRef} className="py-[10rem] bg-navy w-full relative border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-8 overflow-hidden">
        
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
              <li key={idx} className="py-6 border-b border-white/10 text-white font-sans font-[600] text-[18px]">
                {text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Photo Mosaic */}
        <div className="photo-mosaic w-full lg:w-1/2 grid grid-cols-2 gap-4 h-full relative">
          {/* Left column - 2 tall images */}
          <div className="flex flex-col gap-4 mt-12">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600" 
              alt="Circuit board close-up"
              className="w-full h-[320px] object-cover rounded-[1.5rem] border border-white/[0.06]"
              style={{ filter: 'brightness(0.7) contrast(1.1)', clipPath: 'inset(0 0 0 0)' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1565715101973-f2d88a0671e0?w=600" 
              alt="Smart card"
              className="w-full h-[260px] object-cover rounded-[1.5rem] border border-white/[0.06]"
              style={{ filter: 'brightness(0.7) contrast(1.1)', clipPath: 'inset(0 0 0 0)' }}
            />
          </div>
          {/* Right column - 2 square images */}
          <div className="flex flex-col gap-4">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" 
              alt="Industrial manufacturing"
              className="w-full h-[260px] object-cover rounded-[1.5rem] border border-white/[0.06]"
              style={{ filter: 'brightness(0.7) contrast(1.1)', clipPath: 'inset(0 0 0 0)' }}
            />
            <img 
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400" 
              alt="Biometric scanner"
              className="w-full h-[320px] object-cover rounded-[1.5rem] border border-white/[0.06]"
              style={{ filter: 'brightness(0.7) contrast(1.1)', clipPath: 'inset(0 0 0 0)' }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default EditorialBreak;
