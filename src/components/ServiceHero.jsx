import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

const ServiceHero = ({ tags, title, titleHighlight, description, ctaText, ctaLink }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-navy text-white pt-32 pb-12 px-6 lg:px-12 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]">
      {/* Abstract Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen opacity-[0.15] pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #00A3E0, transparent)' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {tags && tags.length > 0 && (
          <div className="hero-anim font-mono text-[11px] lg:text-[13px] text-electric uppercase tracking-[0.2em] font-semibold mb-8 flex flex-wrap gap-4 opacity-90">
            {tags.map((tag, idx) => (
              <React.Fragment key={idx}>
                <span>{tag}</span>
                {idx < tags.length - 1 && <span className="text-white/30">•</span>}
              </React.Fragment>
            ))}
          </div>
        )}
        
        <h1 className="hero-anim font-sans font-[800] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8 max-w-4xl">
          {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-white italic font-serif">{titleHighlight}</span>
        </h1>
        
        {description && (
          <p className="hero-anim text-text-muted font-medium text-[18px] lg:text-[22px] leading-[1.6] max-w-3xl mb-12">
            {description}
          </p>
        )}
        
        <div className="hero-anim flex flex-wrap gap-6 mt-8">
          <Link to={ctaLink || "/contact"} className="group flex items-center justify-center bg-electric text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-300">
            {ctaText}
            <ChevronRight size={18} className="translate-x-2 group-hover:translate-x-4 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
