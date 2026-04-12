import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import HeroCard from './HeroCard';

const NationalIDVisual = () => (
  <div className="w-[160px] h-[240px] bg-gradient-to-b from-[#060E1A] to-navy border border-white/10 rounded-2xl p-4 shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between">
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(37,99,235,0.4)_50%,transparent_75%)] bg-[length:250%_250%] animate-[spin-slow_10s_linear_infinite]"></div>
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
    <div className="w-[65px] h-[80px] border border-white/10 bg-navy/50 rounded-[0.5rem] mt-3 mx-auto overflow-hidden relative flex flex-col items-center justify-end z-10">
      <div className="w-6 h-6 rounded-full bg-electric/30 blur-[1px] absolute top-2"></div>
      <div className="w-full h-[45%] bg-electric/20 rounded-t-xl blur-[1px]"></div>
    </div>
    {/* Microprint Details & Fingerprint */}
    <div className="flex flex-col gap-2 mt-4 relative z-10">
      <div className="w-full h-1 bg-white/10 rounded-full"></div>
      <div className="w-[85%] h-1 bg-white/10 rounded-full"></div>
      <div className="w-[50%] h-1 bg-white/5 rounded-full"></div>
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
  <div className="w-[130px] h-[130px] bg-navy border border-electric/20 rounded-[1.5rem] flex items-center justify-center shadow-[0_10px_30px_rgba(37,99,235,0.15)] relative overflow-hidden transform rotate-12">
     <div className="w-[80%] h-[80%] border-2 border-electric/40 rounded-[1rem] flex items-center justify-center">
       <div className="absolute w-[60%] h-[60%] border-2 border-electric/60 rounded-[0.5rem] flex items-center justify-center"></div>
       <div className="absolute w-[40%] h-[40%] border-2 border-electric rounded-[0.25rem] flex items-center justify-center"></div>
       <div className="w-[20%] h-[20%] bg-electric rounded-sm shadow-[0_0_15px_#2563EB] z-10"></div>
     </div>
     <div className="absolute inset-0 border border-electric/50 rounded-[1.5rem] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
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
        .from('.hero-cta', { y: 20, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out' }, '-=0.6')
        .from('.hero-stats', { y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.4');

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

      // Counters
      const counters = document.querySelectorAll('.hero-counter');
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        gsap.to(counter, { innerText: target, duration: 2.5, snap: { innerText: 1 }, ease: 'power3.out', onUpdate: function() { counter.innerText = Math.ceil(this.targets()[0].innerText); }});
      });

      return () => {
        if (containerRef.current) containerRef.current.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-28 md:pt-36 pb-16 md:pb-20">
      
      {/* SHADER MESH BACKGROUND */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full z-0 overflow-hidden mix-blend-screen opacity-[0.85]">
        <div ref={obj1Ref} className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[140px] mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(10,22,40,0) 70%)' }}></div>
        <div ref={obj2Ref} className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-screen" style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.35) 0%, rgba(10,22,40,0) 70%)' }}></div>
        {/* Subtle Node Data Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-12 md:mt-0">
        
        {/* Left Typography Side */}
        <div className="flex flex-col items-start text-left w-full lg:w-[55%]">
          <div className="hero-badge inline-flex items-center space-x-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8 md:mb-10">
            <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
            <span className="font-mono text-[10px] md:text-[12px] text-white uppercase tracking-widest font-medium">Next-Generation Printing</span>
          </div>

          <div className="hero-heading font-sans font-[800] text-[clamp(44px,6vw,84px)] leading-[1.05] tracking-tight text-white mb-8">
            <div className="overflow-hidden"><div className="line">Forging the</div></div>
            <div className="overflow-hidden"><div className="line">architecture</div></div>
            <div className="overflow-hidden"><div className="line">of <span className="text-electric font-serif italic font-[500] pr-2">absolute trust.</span></div></div>
          </div>

          <p className="hero-desc font-sans text-steel text-[16px] md:text-[18px] leading-[1.7] max-w-[500px] text-balance mb-12">
            India's premier partner for governments and financial institutions since 1988. Delivering unbreakable authentication across physical cards and digital identities.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-16 w-full sm:w-auto">
            <Link to="/solutions" className="w-full sm:w-auto bg-electric text-white px-8 py-3.5 rounded-[0.5rem] font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] text-center">
              Explore Solutions
            </Link>
            <Link to="/contact" className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-8 py-3.5 rounded-[0.5rem] font-sans font-[600] text-[15px] border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
              Request a Quote
            </Link>
          </div>
          
          {/* Glassmorphic Stats Strip */}
          <div className="hero-stats w-full max-w-[500px] bg-navy-lift/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-3 gap-4 divide-x divide-white/10 shadow-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="font-mono text-3xl font-bold text-electric mb-1"><span className="hero-counter" data-target="80">0</span>M+</div>
              <div className="text-[10px] text-steel font-medium tracking-widest uppercase text-center">Cards Annually</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-mono text-3xl font-bold text-white mb-1"><span className="hero-counter" data-target="52">0</span>+</div>
              <div className="text-[10px] text-steel font-medium tracking-widest uppercase text-center">Countries Expo</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-mono text-3xl font-bold text-white mb-1"><span className="hero-counter" data-target="500">0</span>+</div>
              <div className="text-[10px] text-steel font-medium tracking-widest uppercase text-center">Clients Worldwide</div>
            </div>
          </div>
        </div>

        {/* Right 3D Interactive Side: Composite Visualization */}
        <div className="hidden lg:flex w-full lg:w-[45%] h-[500px] relative mt-16 lg:mt-0 items-center justify-center pointer-events-none lg:pointer-events-auto">
          
          {/* Top Left Text Capsule */}
          <div ref={capsule1Ref} className="absolute top-[15%] left-[5%] z-30">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/80 border border-white/5 bg-navy-lift bg-opacity-70 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.4)] block">
              <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full mr-2 shadow-[0_0_5px_#2563EB]"></span>
              National ID Systems
            </div>
          </div>

          {/* Bottom Right Text Capsule */}
          <div ref={capsule2Ref} className="absolute bottom-[20%] right-[-5%] z-30">
            <div className="text-[11px] font-mono uppercase tracking-widest text-white/80 border border-white/5 bg-navy-lift bg-opacity-70 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.4)] block">
              <span className="inline-block w-1.5 h-1.5 bg-electric rounded-full mr-2 shadow-[0_0_5px_#2563EB]"></span>
              RFID Ecosystems
            </div>
          </div>

          {/* Back Left: RFID Chip component */}
          <div ref={rfidRef} className="absolute top-[15%] left-[15%] z-0 opacity-80 blur-[0.5px]">
             <HeroRFIDVisual />
          </div>

          {/* Back Right: National ID / Aadhaar style portrait card */}
          <div ref={idCardRef} className="absolute bottom-[10%] right-[10%] z-0 scale-[0.85] opacity-90">
             <NationalIDVisual />
          </div>

          {/* Primary Front: Banking EMV Card */}
          <div ref={cardMainRef} className="absolute inset-0 flex items-center justify-center z-20 scale-100 drop-shadow-[0_45px_45px_rgba(37,99,235,0.3)] hover:drop-shadow-[0_45px_55px_rgba(37,99,235,0.45)] transition-shadow duration-500">
            <HeroCard className="border border-white/20 ring-1 ring-white/5 shadow-2xl" />
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
