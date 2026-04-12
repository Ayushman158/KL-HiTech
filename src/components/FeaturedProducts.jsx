import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const products = [
  {
    title: 'Banking Cards',
    desc: 'Contact, contactless, dual-interface, metal and biometric variants. Manufactured in our Visa, Mastercard, and RuPay certified facility with EMV compliance.',
    specs: ['Dual Interface', 'ISO 7816/14443', 'Visa/MC/RuPay Certified'],
    icon: <><rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.5"/><path d="M7 10h3 M7 14h6" strokeWidth="1.5"/></>
  },
  {
    title: 'RFID Solutions',
    desc: 'Tags, readers, antennas and industry-specific use cases at scale. Engineered for flawless tracking in high-interference environments.',
    specs: ['UHF/HF/LF', 'Custom Frequencies', 'ISO 18000'],
    icon: <><path d="M4 10h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" strokeWidth="1.5"/><path d="M8 2h8l2 8H6z" strokeWidth="1.5"/></>
  },
  {
    title: 'Biometric Cards',
    desc: 'Fingerprint-enabled payment and access control cards with on-card matching. Zero compromise on security, maximum convenience.',
    specs: ['FAR < 0.001%', 'On-Card Match', 'EMV Compliant'],
    icon: <><path d="M12 2v20M2 12h20 M6 6l12 12 M18 6L6 18" strokeWidth="1.5" opacity="0.5"/><circle cx="12" cy="12" r="5" strokeWidth="1.5"/></>
  },
  {
    title: 'Wearable Payment Devices',
    desc: 'Keyfobs, smart rings and mobile stickers for tap-to-pay anywhere. Expanding the contactless ecosystem beyond traditional form factors.',
    specs: ['NFC Enabled', 'Waterproof', 'All Major Networks'],
    icon: <><circle cx="12" cy="12" r="6" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" strokeWidth="1.5"/></>
  }
];

const FeaturedProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.product-block');
      
      blocks.forEach((block, i) => {
        const img = block.querySelector('.prod-img');
        const text = block.querySelector('.prod-text');
        const isEven = i % 2 === 0;
        
        gsap.from(img, {
          scrollTrigger: { trigger: block, start: 'top 80%', once: true },
          x: isEven ? -40 : 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
        
        gsap.from(text, {
          scrollTrigger: { trigger: block, start: 'top 80%', once: true },
          x: isEven ? 40 : -40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[8rem] bg-navy-lift w-full relative border-b border-border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center md:text-left">
          <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight mb-4">
            Technology at the Core
          </h2>
          <p className="font-sans text-text-muted text-[18px] max-w-[600px] leading-[1.7]">
            Five product categories. One manufacturing partner.
          </p>
        </div>

        <div className="flex flex-col">
          {products.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <React.Fragment key={idx}>
                <div className={`product-block flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 py-12 overflow-hidden`}>
                  
                  {/* Image Side */}
                  <div className="prod-img w-full md:w-1/2">
                    <div className="w-full bg-navy border border-electric/20 rounded-[1.5rem] min-h-[340px] flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-tr from-electric/5 to-transparent mix-blend-overlay"></div>
                      <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[120px] h-[120px] bg-electric/10 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                      <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-electric relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-500">
                        {prod.icon}
                      </svg>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="prod-text w-full md:w-1/2 flex flex-col pt-6 md:pt-0">
                    <h3 className="font-sans font-[700] text-white text-[28px] mb-4">
                      {prod.title}
                    </h3>
                    <p className="font-sans text-text-muted text-[15px] leading-[1.7] mb-8">
                      {prod.desc}
                    </p>
                    
                    <ul className="flex flex-col gap-3 mb-10">
                      {prod.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center font-mono text-[13px] text-white/80 tracking-wide">
                          <span className="w-1 h-1 rounded-full bg-electric mr-3"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <a href="#" className="inline-flex items-center text-electric hover:text-white transition-colors duration-300 font-mono text-[13px] font-medium tracking-[0.05em] uppercase">
                        Request specifications <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>

                </div>
                {/* Separator block */}
                {idx < products.length - 1 && (
                  <div className="w-full h-px bg-electric/20 my-4"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
