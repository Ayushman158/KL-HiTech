import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroCard from './HeroCard';

const NationalIDVisual = () => (
  <div className="w-[160px] h-[240px] bg-gradient-to-b from-white to-offwhite border border-navy/10 rounded-2xl p-4 shadow-[0_15px_30px_rgba(1,33,105,0.15)] relative overflow-hidden flex flex-col justify-between">
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(0,163,224,0.15)_50%,transparent_75%)] bg-[length:250%_250%] animate-[spin-slow_10s_linear_infinite]"></div>
    {/* Emblem Header */}
    <div className="flex justify-between items-center w-full relative z-10">
      <div className="w-5 h-5 border-[1px] border-yellow-500 rounded-full flex flex-col items-center justify-center">
        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <div className="w-12 h-[3px] bg-electric/40 rounded-full"></div>
        <div className="w-8 h-[3px] bg-white/20 rounded-full"></div>
      </div>
    </div>
    {/* Avatar Block */}
    <div className="w-[65px] h-[80px] border border-electric/10 bg-offwhite rounded-[0.5rem] mt-3 mx-auto overflow-hidden relative flex flex-col items-center justify-end z-10">
      <div className="w-6 h-6 rounded-full bg-electric/20 blur-[1px] absolute top-2"></div>
      <div className="w-full h-[45%] bg-electric/10 rounded-t-xl blur-[1px]"></div>
    </div>
    {/* Microprint Details & Fingerprint */}
    <div className="flex flex-col gap-2 mt-4 relative z-10">
      <div className="w-full h-1 bg-navy/20 rounded-full"></div>
      <div className="w-[85%] h-1 bg-navy/20 rounded-full"></div>
      <div className="w-[50%] h-1 bg-navy/10 rounded-full"></div>
    </div>
    {/* Fingerprint watermark */}
    <div className="absolute bottom-2 right-2 text-electric/30 opacity-50">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 6c0-1.5-1-2.5-2-2.5S10 4.5 10 6M17 9c0-3-2-5-5-5S7 6 7 9M20 12c0-5-3.5-8-8-8s-8 3-8 8" />
        <path d="M18 16c-1-2.5-3-4-6-4s-5 1.5-6 4" />
      </svg>
    </div>
  </div>
);

const HeroRFIDVisual = () => (
  <div className="w-[130px] h-[130px] bg-white border border-electric/20 rounded-[1.5rem] flex items-center justify-center shadow-[0_15px_30px_rgba(0,163,224,0.15)] relative overflow-hidden transform rotate-12">
     <div className="w-[80%] h-[80%] border-2 border-electric/30 rounded-[1rem] flex items-center justify-center">
       <div className="absolute w-[60%] h-[60%] border-2 border-electric/40 rounded-[0.5rem] flex items-center justify-center"></div>
       <div className="absolute w-[40%] h-[40%] border-2 border-electric/80 rounded-[0.25rem] flex items-center justify-center"></div>
       <div className="w-[20%] h-[20%] bg-electric rounded-sm shadow-[0_0_15px_rgba(0,163,224,0.5)] z-10"></div>
     </div>
     <div className="absolute inset-0 border border-electric/40 rounded-[1.5rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
  </div>
);

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const obj1Ref = useRef(null);
  const obj2Ref = useRef(null);
  const cardMainRef = useRef(null);
  const idCardRef = useRef(null);
  const rfidRef = useRef(null);
  const capsule1Ref = useRef(null);
  const capsule2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Mesh Gradient Animation
      gsap.to(obj1Ref.current, { x: '10vw', y: '10vh', rotation: 360, duration: 25, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      gsap.to(obj2Ref.current, { x: '-15vw', y: '-10vh', rotation: -360, duration: 30, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2 });

      // Typography Entrance
      const tl = gsap.timeline();
      tl.from('.hero-badge', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.hero-heading .line', { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { y: 20, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.6');

      // 3D Visual Elements Setups
      gsap.set([cardMainRef.current, idCardRef.current, rfidRef.current], {
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      });
      
      tl.from(idCardRef.current, { x: 100, y: -50, z: -200, rotationY: 45, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1')
        .from(rfidRef.current, { x: -50, y: -100, z: -150, rotationY: -30, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.3')
        .from(cardMainRef.current, { z: 200, opacity: 0, rotationY: -15, rotationX: 10, duration: 1.5, ease: 'power3.out' }, '-=1.2')
        .from([capsule1Ref.current, capsule2Ref.current], { scale: 0, opacity: 0, duration: 1, stagger: 0.2, ease: 'back.out(1.5)' }, '-=1');

      // Parallax Mouse Interaction
      const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - left) / width - 0.5;
        const py = (e.clientY - top) / height - 0.5;

        gsap.to(cardMainRef.current, {
          rotationY: px * 30, rotationX: -py * 30, x: px * 20, y: py * 20, duration: 1, ease: 'power2.out'
        });
        gsap.to(idCardRef.current, {
          rotationY: px * 15 + 10, rotationX: -py * 15, x: px * 40 - 20, y: py * 40 + 20, duration: 1.5, ease: 'power2.out'
        });
        gsap.to(rfidRef.current, {
          rotationY: px * -20 - 10, rotationX: -py * 10, x: px * 30 + 10, y: py * 40 - 40, duration: 2, ease: 'power2.out'
        });
        gsap.to(capsule1Ref.current, {
          x: px * 60 + 20, y: py * 60 - 30, duration: 1.2, ease: 'power2.out'
        });
        gsap.to(capsule2Ref.current, {
          x: px * 40 - 30, y: py * 40 + 40, duration: 1.4, ease: 'power2.out'
        });
      };
      
      containerRef.current.addEventListener('mousemove', handleMouseMove);



      return () => {
        if (containerRef.current) containerRef.current.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-offwhite pt-28 md:pt-36 pb-16 md:pb-20">
      
      {/* SHADER MESH BACKGROUND (LIGHT MODE) */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden opacity-80 mix-blend-multiply flex items-center justify-center">
        <div ref={obj1Ref} className="absolute w-[80vw] h-[80vw] max-w-[1400px] max-h-[1400px] translate-y-[-20%] rounded-full blur-[160px] mix-blend-multiply opacity-40" style={{ background: 'radial-gradient(circle, rgba(0,163,224,0.3) 0%, rgba(248,250,252,0) 70%)' }}></div>
        <div ref={obj2Ref} className="absolute w-[70vw] h-[70vw] max-w-[1200px] max-h-[1200px] translate-y-[20%] rounded-full blur-[140px] mix-blend-multiply opacity-50" style={{ background: 'radial-gradient(circle, rgba(1,33,105,0.15) 0%, rgba(248,250,252,0) 70%)' }}></div>
        {/* Subtle Node Data Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_40%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col items-center justify-start gap-0 md:gap-4 mt-8">
        
        {/* Centered Typography Block */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl relative z-40 pt-10">
          <div className="hero-badge inline-flex items-center space-x-2 bg-white border border-navy/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 md:mb-10 shadow-[0_10px_20px_rgba(1,33,105,0.05)]">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
            <span className="font-mono text-[10px] md:text-[11px] text-navy uppercase tracking-[0.15em] font-bold">Next-Generation Print Manufacturing</span>
          </div>

          <div className="hero-heading font-sans font-[800] text-[clamp(44px,6vw,84px)] leading-[1.05] tracking-tight text-navy mb-8 text-balance">
            <div className="overflow-hidden py-2 -my-2"><div className="line">Forging the architecture</div></div>
            <div className="overflow-hidden py-2 -my-2"><div className="line">of <span className="text-electric font-serif italic font-[500] pr-6 border-b-4 border-electric/30">absolute trust.</span></div></div>
          </div>

          <p className="hero-desc font-sans text-steel font-medium text-[16px] md:text-[19px] leading-[1.7] max-w-2xl text-balance mb-12">
            India's premier partner for governments and financial institutions since 1988. Delivering unbreakable authentication across physical cards and digital identities in seconds.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto bg-navy text-white px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] hover:bg-electric transition-all duration-300 shadow-[0_15px_30px_rgba(1,33,105,0.2)] hover:shadow-[0_15px_30px_rgba(0,163,224,0.3)] text-center tracking-wide">
              Initiate Secure Link
            </Link>
            <Link to="/innovation" className="group flex items-center justify-center gap-3 w-full sm:w-auto bg-white/60 backdrop-blur-md text-navy px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] border border-navy/10 hover:border-electric/50 hover:bg-white transition-all duration-300 text-center shadow-[0_10px_20px_rgba(1,33,105,0.03)] focus:outline-none">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-navy/5 group-hover:bg-electric/10 transition-colors">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 group-hover:text-electric"><path d="M8 5v14l11-7z"/></svg>
              </div>
              Explore Architecture
            </Link>
          </div>
        </div>

        {/* Floating Orchestration of 3D Visuals & Nodes */}
        <div className="flex w-full h-[550px] relative mt-12 items-center justify-center pointer-events-none lg:pointer-events-auto">
          
          {/* Orbiting Tech Badges (Like the Spotify/Discord logos in reference) */}
          <div className="absolute top-[20%] left-[10%] z-30 transform -rotate-12 blur-[1px]">
             <div className="text-[14px] font-sans font-[900] italic tracking-tighter text-white px-6 py-2 bg-[#1434CB] rounded-[0.5rem] shadow-xl">VISA</div>
          </div>
          <div className="absolute bottom-[20%] left-[15%] z-30 transform rotate-6 border border-navy/10 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-[0_20px_40px_rgba(1,33,105,0.1)]">
             <div className="text-[13px] font-sans font-[800] tracking-tight text-navy">RuPay<span className="text-[#F26422]">~</span></div>
          </div>
          <div className="absolute top-[30%] right-[10%] z-30 transform rotate-12 blur-[0.5px]">
             <div className="flex -space-x-2 drop-shadow-xl"><div className="w-8 h-8 rounded-full bg-[#EB001B] opacity-90 mix-blend-multiply"></div><div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply"></div></div>
          </div>
          <div className="absolute bottom-[25%] right-[15%] z-30 transform -rotate-6 border border-navy/10 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-[0.5rem] shadow-[0_20px_40px_rgba(1,33,105,0.1)]">
             <div className="text-[12px] font-mono tracking-widest font-bold text-navy border border-navy/20 px-2 py-0.5 rounded-[2px]">NCMC</div>
          </div>

          {/* Top Left Text Capsule */}
          <div ref={capsule1Ref} className="absolute top-[10%] left-[25%] z-30">
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-navy border border-white/60 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full shadow-[0_15px_30px_rgba(1,33,105,0.08)] block font-semibold">
              <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full mr-2 shadow-[0_0_8px_#00A3E0]"></span>
              National ID Systems
            </div>
          </div>

          {/* Bottom Right Text Capsule */}
          <div ref={capsule2Ref} className="absolute bottom-[10%] right-[25%] z-30">
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-navy border border-white/60 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-full shadow-[0_15px_30px_rgba(1,33,105,0.08)] block font-semibold">
              <span className="inline-block w-1.5 h-1.5 bg-[#10B981] rounded-full mr-2 shadow-[0_0_8px_#10B981]"></span>
              RFID Ecosystems
            </div>
          </div>

          {/* Back Left: RFID Chip component */}
          <div ref={rfidRef} className="absolute top-[30%] left-[30%] z-0 opacity-90">
             <HeroRFIDVisual />
          </div>

          {/* Back Right: National ID / Aadhaar style portrait card */}
          <div ref={idCardRef} className="absolute bottom-[15%] right-[30%] z-0 scale-[0.85] opacity-95">
             <NationalIDVisual />
          </div>

          {/* Primary Front Container (Absolute Center): Banking EMV Card */}
          <div ref={cardMainRef} className="absolute inset-0 flex items-center justify-center z-20 scale-[1.1] sm:scale-[1.2] drop-shadow-[0_45px_45px_rgba(1,33,105,0.15)] hover:drop-shadow-[0_45px_55px_rgba(0,163,224,0.3)] transition-shadow duration-500">
            <HeroCard className="border border-white/30 ring-1 ring-white/10 shadow-2xl" />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
