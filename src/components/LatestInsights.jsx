import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
    <section ref={containerRef} className="py-16 md:py-[6rem] bg-offwhite w-full relative border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col">
        <h2 className="font-sans font-[700] text-navy text-[clamp(28px,4vw,40px)] tracking-tight mb-12 text-center md:text-left">
          From the Knowledge Hub
        </h2>
        
        <div className="insight-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {insights.map((item, idx) => (
            <div key={idx} className="insight-card-wrapper h-full">
              <div className="group bg-white rounded-[1.5rem] border border-navy/10 p-8 hover:-translate-y-2 hover:border-electric transition-all duration-[0.4s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col cursor-pointer h-full shadow-[0_2px_10px_rgba(1,33,105,0.02)] hover:shadow-[0_15px_40px_rgba(1,33,105,0.08)]">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-electric/10 text-electric border border-electric/20 rounded-full font-mono text-[11px] font-semibold tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-sans font-[600] text-navy text-[20px] leading-[1.4] mb-4 group-hover:text-electric transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-steel text-[14px] leading-[1.6] mb-8 line-clamp-2 flex-grow text-pretty">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto border-t border-navy/5 pt-6">
                  <span className="font-mono text-[11px] text-steel font-semibold uppercase tracking-widest">{item.date}</span>
                  <Link to="/knowledge-hub" className="font-sans text-[14px] font-[600] text-electric opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center outline-none">
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center text-center">
          <Link to="/knowledge-hub" className="inline-flex items-center text-electric hover:text-navy font-sans font-[600] text-[16px] transition-colors duration-300 group outline-none">
            View all insights <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
