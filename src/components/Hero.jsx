import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import HeroCard from './HeroCard';

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline();
      tl.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.6 })
        .from('.hero-h1-line1', { opacity: 0, y: 30, duration: 0.7 }, '-=0.3')
        .from('.hero-h1-line2', { opacity: 0, y: 30, duration: 0.7 }, '-=0.4')
        .from('.hero-body', { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from('.hero-ctas', { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
        .from('.hero-certs', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-card-container', { 
          opacity: 0, scale: 0.9, rotateY: -20, 
          duration: 1.2, ease: 'power3.out' 
        }, '-=0.8');

      // Stat Counter Animation
      gsap.from('.stat-num', {
        scrollTrigger: {
          trigger: '.stat-strip',
          start: 'top 95%',
          once: true
        },
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        ease: 'power2.out',
        stagger: 0.1,
      });
      
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / rect.width) * 12;
    const rotateX = -((e.clientY - centerY) / rect.height) * 8;
    
    gsap.to('.primary-card', { rotateY, rotateX, duration: 0.6, ease: 'power2.out', transformPerspective: 1000 });
    gsap.to('.ghost-card-1', { rotateY: rotateY * 0.6, rotateX: rotateX * 0.6, x: -rotateY * 2, y: rotateX * 2, duration: 0.8, ease: 'power2.out', transformPerspective: 1000 });
    gsap.to('.ghost-card-2', { rotateY: rotateY * 0.4, rotateX: rotateX * 0.4, x: -rotateY * 3, y: rotateX * 3, duration: 1, ease: 'power2.out', transformPerspective: 1000 });
  };

  const handleMouseLeave = () => {
    gsap.to('.primary-card', { rotateY: -8, rotateX: 4, duration: 1, ease: 'power3.out' });
    gsap.to('.ghost-card-1', { rotateY: -8, rotateX: 4, x: -30, y: 15, duration: 1.2, ease: 'power3.out' });
    gsap.to('.ghost-card-2', { rotateY: -8, rotateX: 4, x: -60, y: 30, duration: 1.4, ease: 'power3.out' });
  };

  useEffect(() => {
    // Initial Resting Position
    gsap.set('.primary-card', { rotateY: -8, rotateX: 4, transformPerspective: 1000 });
    gsap.set('.ghost-card-1', { rotateY: -8, rotateX: 4, x: -30, y: 15, z: -30, transformPerspective: 1000 });
    gsap.set('.ghost-card-2', { rotateY: -8, rotateX: 4, x: -60, y: 30, z: -60, transformPerspective: 1000 });
  }, []);

  return (
    <section 
      ref={heroRef} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[100dvh] h-auto bg-navy overflow-hidden flex flex-col pt-32 pb-0 border-b border-border-dark"
    >
      <div className="absolute inset-0 pointer-events-none z-0" style={{ backgroundImage: 'radial-gradient(rgba(37,99,235,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-[0.12] z-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(37,99,235,1), transparent)' }} />

      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center relative z-10 pb-16 pt-8">
        <div className="w-full lg:w-[55%] flex flex-col lg:pt-0">
          <div className="hero-eyebrow font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-5">
            // TRUSTED BY 500+ INSTITUTIONS WORLDWIDE
          </div>
          <h1 className="flex flex-col gap-2 mb-8">
            <span className="hero-h1-line1 font-sans font-[800] text-white text-[clamp(44px,5vw,76px)] tracking-[-0.03em] leading-[1.1]">
              Securing Identities.
            </span>
            <span className="hero-h1-line2 font-serif italic text-electric text-[clamp(52px,6vw,92px)] leading-[1.1]">
              Powering Nations.
            </span>
          </h1>
          <p className="hero-body font-sans text-text-muted text-base max-w-[480px] leading-[1.7] mb-10 text-pretty">
            India's leading secure print and smart card manufacturer. Serving governments, banks, and critical infrastructure operators across 52+ countries since 1988.
          </p>
          <div className="hero-ctas flex flex-wrap items-center gap-4 mb-12">
            <button className="bg-electric hover:bg-electric-dim text-white px-8 py-4 rounded-[0.75rem] font-medium transition-all duration-300 hover:scale-[1.02] shadow-[0_4px_14px_rgba(37,99,235,0.3)]">
              Request a Quote
            </button>
            <button className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-[0.75rem] font-medium transition-all duration-300 hover:border-electric">
              Explore Solutions
            </button>
          </div>
          <div className="hero-certs flex items-center space-x-3">
            <span className="font-mono text-[10px] text-steel uppercase tracking-widest mr-2">Certified by</span>
            <div className="flex items-center space-x-3 text-white/50 text-[11px] font-medium tracking-wide">
              <span>Visa</span><span className="w-px h-3 bg-white/10"></span>
              <span>Mastercard</span><span className="w-px h-3 bg-white/10"></span>
              <span>RuPay</span><span className="w-px h-3 bg-white/10"></span>
              <span>ISO</span>
            </div>
          </div>
        </div>

        <div className="hero-card-container w-full lg:w-[45%] h-full flex items-center justify-center mt-12 lg:mt-0 relative perspective-1000 hidden md:flex">
          <div className="relative w-full max-w-[360px] aspect-[1.58] z-30" style={{ transformStyle: 'preserve-3d' }}>
            <div className="ghost-card-2 absolute inset-0 opacity-[0.12]">
               <HeroCard />
            </div>
            <div className="ghost-card-1 absolute inset-0 opacity-[0.25]">
               <HeroCard />
            </div>
            <div ref={cardRef} className="primary-card absolute inset-0 z-10">
               <HeroCard />
            </div>
          </div>
        </div>
      </div>

      {/* Stat Strip at the very bottom edge */}
      <div className="stat-strip w-full border-t border-white/10 bg-navy/80 backdrop-blur-md relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4">
          {[
            { num: 80, suffix: 'M+', label: 'Cards Manufactured' },
            { num: 52, suffix: '+', label: 'Countries Served' },
            { num: 500, suffix: '+', label: 'Enterprise Clients' },
            { num: 30, suffix: '+', label: 'Years of Excellence' },
          ].map((stat, idx) => (
            <div key={idx} className={`py-10 flex flex-col items-center justify-center text-center ${idx < 3 ? 'md:border-r md:border-white/10' : ''} ${idx % 2 === 0 ? 'border-r border-white/10' : ''}`}>
              <div className="font-sans font-[700] text-white text-[32px] tracking-tight leading-none mb-2">
                <span className="stat-num">{stat.num}</span><span>{stat.suffix}</span>
              </div>
              <div className="font-mono text-[11px] text-text-muted mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
