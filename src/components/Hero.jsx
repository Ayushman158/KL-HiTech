import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroCard from './HeroCard';

const Hero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const obj1Ref = useRef(null);
  const obj2Ref = useRef(null);
  const cardMainRef = useRef(null);
  const cardGhost1Ref = useRef(null);
  const cardGhost2Ref = useRef(null);

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

      // Card 3D Setup & Entrance
      gsap.set([cardMainRef.current, cardGhost1Ref.current, cardGhost2Ref.current], {
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      });
      
      tl.from(cardGhost1Ref.current, { x: 100, y: -50, z: -200, rotationY: 45, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1')
        .from(cardGhost2Ref.current, { x: -100, y: 50, z: -100, rotationY: -30, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.3')
        .from(cardMainRef.current, { z: 200, opacity: 0, rotationY: -15, rotationX: 10, duration: 1.5, ease: 'power3.out' }, '-=1.2');

      // Parallax Mouse Interaction
      const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - left) / width - 0.5;
        const py = (e.clientY - top) / height - 0.5;

        gsap.to(cardMainRef.current, {
          rotationY: px * 30,
          rotationX: -py * 30,
          x: px * 20,
          y: py * 20,
          duration: 1,
          ease: 'power2.out'
        });
        gsap.to(cardGhost1Ref.current, {
          rotationY: px * 15 + 20,
          rotationX: -py * 15,
          x: px * 40 - 20,
          y: py * 40 - 20,
          duration: 1.5,
          ease: 'power2.out'
        });
        gsap.to(cardGhost2Ref.current, {
          rotationY: px * 10 - 15,
          rotationX: -py * 10,
          x: px * 60 + 20,
          y: py * 60 + 20,
          duration: 2,
          ease: 'power2.out'
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
            <button className="w-full sm:w-auto bg-electric text-white px-8 py-3.5 rounded-[0.5rem] font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Explore Solutions
            </button>
            <button className="w-full sm:w-auto bg-white/5 backdrop-blur-sm text-white px-8 py-3.5 rounded-[0.5rem] font-sans font-[600] text-[15px] border border-white/10 hover:bg-white/10 transition-all duration-300">
              Request a Quote
            </button>
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

        {/* Right 3D Interactive Side */}
        <div className="w-full lg:w-[45%] h-[400px] lg:h-[500px] relative mt-16 lg:mt-0 flex items-center justify-center pointer-events-none lg:pointer-events-auto">
          {/* Back Ghost Card */}
          <div ref={cardGhost2Ref} className="absolute inset-0 flex items-center justify-center opacity-30 blur-[2px] scale-90">
            <HeroCard />
          </div>
          {/* Middle Ghost Card */}
          <div ref={cardGhost1Ref} className="absolute inset-0 flex items-center justify-center opacity-60 blur-[1px] scale-95">
            <HeroCard className="border border-white/5" />
          </div>
          {/* Primary Front Card */}
          <div ref={cardMainRef} className="absolute inset-0 flex items-center justify-center z-10 scale-100 drop-shadow-[0_45px_45px_rgba(37,99,235,0.25)] hover:drop-shadow-[0_45px_55px_rgba(37,99,235,0.4)] transition-shadow duration-500">
            <HeroCard className="border border-white/10 ring-1 ring-white/5" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
