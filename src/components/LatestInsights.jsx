import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const insights = [
  {
    tag: 'INDUSTRY INSIGHT',
    title: 'The Future of Biometric Payment Cards in India\'s Banking Sector',
    excerpt: 'Exploring the shift towards on-card fingerprint matching and the implications for payment networks and issuers globally.',
    date: '12 OCT 2026'
  },
  {
    tag: 'CASE STUDY',
    title: 'How a Major PSU Bank Migrated 40M Cards to Dual-Interface EMV',
    excerpt: 'A comprehensive look at the logistical and technical challenges overcome during one of the world\'s largest card migration projects.',
    date: '28 SEP 2026'
  },
  {
    tag: 'PRODUCT UPDATE',
    title: 'KL Hi-Tech Receives RuPay Certification for New Card Variant',
    excerpt: 'The latest addition to our secure payment product line has achieved full EMV compliance and network certification.',
    date: '15 SEP 2026'
  }
];

const LatestInsights = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.insight-card-wrapper', {
        scrollTrigger: {
          trigger: '.insight-grid',
          start: 'top 85%',
          once: true
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-[6rem] bg-navy w-full relative border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
        <h2 className="font-sans font-[700] text-white text-[clamp(28px,4vw,40px)] tracking-tight mb-12 text-center md:text-left">
          From the Knowledge Hub
        </h2>
        
        <div className="insight-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {insights.map((item, idx) => (
            <div key={idx} className="insight-card-wrapper h-full">
              <div className="group bg-navy-lift rounded-[1.5rem] border border-white/[0.08] p-8 hover:-translate-y-2 hover:border-electric/40 transition-all duration-[0.4s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col cursor-pointer h-full">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-electric/10 text-electric border border-electric/20 rounded-full font-mono text-[11px] font-semibold tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-sans font-[600] text-white text-[20px] leading-[1.4] mb-4 group-hover:text-electric transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-text-muted text-[14px] leading-[1.6] mb-8 line-clamp-2 flex-grow text-pretty">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                  <span className="font-mono text-[11px] text-text-muted uppercase tracking-widest">{item.date}</span>
                  <span className="font-sans text-[14px] font-[500] text-electric opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center">
                    Read More <span className="ml-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center text-center">
          <a href="#" className="inline-flex items-center text-electric hover:text-white font-sans font-[500] text-[16px] transition-colors duration-300 group">
            View all insights <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
