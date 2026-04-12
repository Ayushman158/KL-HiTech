import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroCard from './HeroCard';

// 3D Visual for Banking Cards
const CardsVisual = () => (
  <div className="relative w-[160px] h-[160px] preserve-3d" style={{ perspective: '800px' }}>
    <div className="absolute inset-0 animate-[spin-slow_15s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
      <div className="absolute top-[20px] left-[30px] w-[100px] h-[158px] shadow-[0_10px_30px_rgba(37,99,235,0.5)] border border-electric rounded-xl bg-gradient-to-b from-navy-lift to-navy overflow-hidden" style={{ transform: 'rotateY(-20deg) rotateX(20deg) translateZ(30px)' }}>
        <div className="absolute top-4 left-3 w-5 h-4 bg-yellow-600 rounded-[2px] opacity-80 border border-black/30"></div>
        <div className="absolute top-4 right-3 bg-white/20 w-4 h-4 rounded-full"></div>
        <div className="absolute bottom-4 left-3 text-white/50 font-mono text-[8px] tracking-[0.2em]">•••• 4291</div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
      </div>
      <div className="absolute top-[30px] left-[10px] w-[100px] h-[158px] shadow-lg border border-white/20 rounded-xl bg-gradient-to-b from-navy to-[#060E1A] overflow-hidden" style={{ transform: 'rotateY(-20deg) rotateX(20deg) translateZ(-30px)' }}>
        <div className="absolute top-4 left-3 w-5 h-4 bg-yellow-600/50 rounded-[2px] opacity-80 border border-black/30"></div>
        <div className="absolute bottom-4 left-3 text-white/30 font-mono text-[8px] tracking-[0.2em]">•••• 8832</div>
      </div>
    </div>
  </div>
);

// 3D Visual for RFID 
const RFIDVisual = () => (
  <div className="relative w-[140px] h-[140px] preserve-3d" style={{ perspective: '600px' }}>
    <div className="absolute inset-0" style={{ transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
      <div className="absolute inset-0 border-[2px] border-electric/40 rounded-xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      <div className="absolute inset-4 border-[2px] border-electric/60 rounded-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"></div>
      <div className="absolute inset-8 border-[2px] border-electric rounded-md bg-electric/20 backdrop-blur-sm flex items-center justify-center transform translateZ(30px) shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-tr from-electric/10 to-transparent transform -translateZ(20px) rounded-xl blur-[10px]"></div>
    </div>
  </div>
);

// 3D Visual for Biometrics
const BiometricVisual = () => (
  <div className="relative w-[140px] h-[140px] border border-electric/30 rounded-[1.5rem] bg-navy-lift mt-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] flex justify-center overflow-hidden preserve-3d">
    {/* Fingerprint Icon Container */}
    <div className="absolute top-[20%] w-[80px] h-[80px] opacity-60">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-electric w-full h-full drop-shadow-[0_0_8px_rgba(37,99,235,0.8)]" strokeWidth="1">
        <path d="M12 2v20M2 12h20 M4 4l16 16 M20 4L4 20" opacity="0.3"/>
        <path d="M14 6c0-1.5-1-2.5-2-2.5S10 4.5 10 6M17 9c0-3-2-5-5-5S7 6 7 9M20 12c0-5-3.5-8-8-8s-8 3-8 8" />
        <path d="M18 16c-1-2.5-3-4-6-4s-5 1.5-6 4" />
        <circle cx="12" cy="14" r="2" fill="CurrentColor" />
      </svg>
    </div>
    {/* Scanning Laser */}
    <div className="absolute left-0 w-full h-[2px] bg-electric shadow-[0_0_15px_rgba(37,99,235,1)] animate-[scan_3s_ease-in-out_infinite]"></div>
    <div className="absolute left-0 w-full h-[40px] bg-gradient-to-b from-electric/30 to-transparent animate-[scan-beam_3s_ease-in-out_infinite]"></div>
    <style>{`
      @keyframes scan { 0%, 100% { top: 10%; } 50% { top: 90%; } }
      @keyframes scan-beam { 0%, 100% { top: 10%; opacity: 1; } 50% { top: 90%; opacity: 0; } }
      .preserve-3d { transform-style: preserve-3d; }
    `}</style>
  </div>
);

// 3D Visual for Wearables (NFC Tag / Sticker)
const WearableVisual = () => (
  <div className="relative w-[150px] h-[150px] preserve-3d" style={{ perspective: '800px' }}>
    <div className="absolute inset-0 animate-[spin-slow_15s_linear_infinite] flex items-center justify-center" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(55deg) rotateZ(35deg)' }}>
      {/* NFC Base Substrate */}
      <div className="absolute inset-2 bg-gradient-to-tr from-[#060E1A] to-navy border border-electric/20 rounded-[2rem] shadow-[0_25px_30px_rgba(0,0,0,0.6)]" style={{ transform: 'translateZ(-10px)' }}></div>
      {/* NFC Top Layer with Antenna Array */}
      <div className="absolute inset-2 bg-navy border border-white/10 rounded-[2rem] flex items-center justify-center" style={{ transform: 'translateZ(0px)' }}>
         <div className="w-[85%] h-[85%] border-[3px] border-electric/30 rounded-[1.5rem]"></div>
         <div className="absolute w-[65%] h-[65%] border-[3px] border-electric/50 rounded-[1rem]"></div>
         <div className="absolute w-[45%] h-[45%] border-[3px] border-electric/70 rounded-[0.5rem]"></div>
         {/* Core NFC Authenticator Chip */}
         <div className="absolute w-[20%] h-[20%] bg-electric rounded-[3px] shadow-[0_0_20px_#2563EB] flex items-center justify-center">
           <div className="w-[50%] h-[50%] border border-white/50 rounded-[1px]"></div>
         </div>
      </div>
      {/* Emitting Radio Waves */}
      <div className="absolute inset-2 border-[2px] border-electric rounded-[2rem] animate-ping opacity-30" style={{ transform: 'translateZ(10px)', animationDuration: '2s' }}></div>
      <div className="absolute inset-0 bg-electric/10 rounded-[2rem] blur-[15px]" style={{ transform: 'translateZ(-20px)' }}></div>
    </div>
  </div>
);

const products = [
  {
    title: 'Banking Cards',
    desc: 'Contact, contactless, dual-interface, metal and biometric variants. Manufactured in our Visa, Mastercard, and RuPay certified facility with EMV compliance.',
    specs: ['Dual Interface', 'ISO 7816/14443', 'Visa/MC/RuPay Certified'],
    visual: <CardsVisual />
  },
  {
    title: 'RFID Solutions',
    desc: 'Tags, readers, antennas and industry-specific use cases at scale. Engineered for flawless tracking in high-interference environments.',
    specs: ['UHF/HF/LF', 'Custom Frequencies', 'ISO 18000'],
    visual: <RFIDVisual />
  },
  {
    title: 'Biometric Cards',
    desc: 'Fingerprint-enabled payment and access control cards with on-card matching. Zero compromise on security, maximum convenience.',
    specs: ['FAR < 0.001%', 'On-Card Match', 'EMV Compliant'],
    visual: <BiometricVisual />
  },
  {
    title: 'Wearable Payment Devices',
    desc: 'Keyfobs, smart rings and mobile stickers for tap-to-pay anywhere. Expanding the contactless ecosystem beyond traditional form factors.',
    specs: ['NFC Enabled', 'Waterproof', 'All Major Networks'],
    visual: <WearableVisual />
  }
];

const FeaturedProducts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray('.product-block');
      
      blocks.forEach((block, i) => {
        const img = block.querySelector('.prod-visual');
        const text = block.querySelector('.prod-text');
        const isEven = i % 2 === 0;
        
        gsap.from(img, {
          scrollTrigger: { trigger: block, start: 'top 80%', once: true },
          x: isEven ? -40 : 40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });
        
        gsap.from(text, {
          scrollTrigger: { trigger: block, start: 'top 80%', once: true },
          x: isEven ? 40 : -40,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-[8rem] bg-navy-lift w-full relative border-b border-border-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 text-center md:text-left relative z-10">
          <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,48px)] tracking-tight mb-4">
            Technology at the Core
          </h2>
          <p className="font-sans text-text-muted text-[18px] max-w-[600px] leading-[1.7]">
            Four product pipelines defining modern secure interaction methodologies. 
          </p>
        </div>

        <div className="flex flex-col relative z-10">
          {products.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <React.Fragment key={idx}>
                <div className={`product-block flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 lg:gap-24 py-16 overflow-visible`}>
                  
                  {/* 3D Visual Side */}
                  <div className="prod-visual w-full md:w-[45%] flex justify-center items-center">
                    <div className="w-full bg-navy border border-electric/10 rounded-[2rem] min-h-[380px] flex items-center justify-center relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                      {/* Interactive Mesh Background Light */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-electric/10 to-transparent mix-blend-overlay"></div>
                      <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[180px] h-[180px] bg-electric/15 blur-[50px] rounded-full group-hover:bg-electric/25 group-hover:scale-[1.2] transition-all duration-700"></div>
                      
                      {/* The 3D Element */}
                      <div className="relative z-10 transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out">
                        {prod.visual}
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="prod-text w-full md:w-[50%] flex flex-col pt-6 md:pt-0">
                    <h3 className="font-sans font-[700] text-white text-[32px] mb-4">
                      {prod.title}
                    </h3>
                    <p className="font-sans text-text-muted text-[16px] md:text-[17px] leading-[1.8] mb-10 max-w-[500px]">
                      {prod.desc}
                    </p>
                    
                    <ul className="flex flex-col gap-4 mb-12">
                      {prod.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center font-mono text-[13px] text-white/90 tracking-wide">
                          <span className="w-1.5 h-1.5 rounded-full bg-electric mr-4 shadow-[0_0_5px_#2563EB]"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <Link to={`/products/${prod.title.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center text-electric hover:text-white transition-colors duration-300 font-mono text-[13px] font-semibold tracking-[0.05em] uppercase border border-electric/20 rounded-full px-6 py-2.5 bg-electric/5 hover:bg-electric/20">
                        Request specifications <span className="ml-2 mt-[-2px]">→</span>
                      </Link>
                    </div>
                  </div>

                </div>
                {/* Separator block */}
                {idx < products.length - 1 && (
                  <div className="w-full flex justify-center">
                    <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent my-4"></div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <style>{`
        .spin-slow {
          animation: spin 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProducts;
