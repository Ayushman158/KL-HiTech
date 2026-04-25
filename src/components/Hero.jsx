import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Elegant Asymmetrical Entrance Animation
      const tl = gsap.timeline();
      
      gsap.set('.hero-reveal-left', { x: -40, opacity: 0 });
      gsap.set('.hero-reveal-right', { x: 40, opacity: 0 });
      gsap.set('.hero-reveal-bottom', { y: 30, opacity: 0 });
      gsap.set(imageRef.current, { scale: 0.9, opacity: 0, rotateZ: -5 });
      
      tl.to('.hero-reveal-left', {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      })
      .to(imageRef.current, {
        scale: 1,
        opacity: 0.9,
        rotateZ: 0,
        duration: 2,
        ease: 'power4.out',
      }, "-=0.8")
      .to('.hero-reveal-right', {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
      }, "-=1.5")
      .to('.hero-reveal-bottom', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      }, "-=1.0");

      // Smooth Mouse Parallax for the Intersecting Central Image
      const handleMouseMove = (e) => {
        if (!containerRef.current || !imageRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - left) / width - 0.5;
        const py = (e.clientY - top) / height - 0.5;

        gsap.to(imageRef.current, {
          x: px * -40,
          y: py * -40,
          rotationY: px * 15,
          rotationX: py * -15,
          ease: 'power2.out',
          duration: 1.5
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
    <section ref={containerRef} className="relative w-full min-h-screen bg-[#F8FAFC] overflow-hidden flex flex-col justify-between pt-24 md:pt-32">
      
      {/* Background Mesh Gradients to soften the harsh whiteness */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-multiply opacity-50 z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-electric/10 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-navy/5 rounded-full blur-[140px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* The Central Intersecting 3D/Elegant Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" style={{ perspective: '1200px' }}>
         <img 
            ref={imageRef}
            src="/elegant_hero_centerpiece.png" 
            className="w-[95vw] md:w-[80vw] lg:max-w-[1100px] h-auto object-contain mix-blend-multiply filter drop-shadow-[0_30px_60px_rgba(1,33,105,0.15)] mt-12 md:mt-0" 
            alt="Secure Framework Architecture" 
            style={{ transformStyle: 'preserve-3d' }}
         />
      </div>

      {/* Asymmetrical Typography Layers (Z-20) */}
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 lg:px-16 flex-1 flex flex-col pointer-events-none">
        
        {/* TOP LEFT BLOCK */}
        <div className="w-full md:w-1/2 pt-10 md:pt-20 flex flex-col items-start pointer-events-auto">
          <div className="hero-reveal-left font-sans font-[400] text-navy text-[clamp(44px,5vw,70px)] leading-[1.05] tracking-tight opacity-90">
            Forging the<br/>architecture of
          </div>
          
          <p className="hero-reveal-left font-sans text-steel font-medium text-[16px] md:text-[18px] leading-[1.7] max-w-sm mt-8 opacity-90 border-l border-electric/30 pl-4">
            India's premier partner for governments and financial institutions since 1988. Delivering unbreakable authentication mechanics across the globe.
          </p>
          
          <div className="hero-reveal-left mt-10">
            <Link to="/contact" className="inline-flex items-center justify-center bg-navy text-white px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] hover:bg-electric transition-colors duration-300 shadow-[0_15px_30px_rgba(1,33,105,0.2)]">
              Initiate Secure Link
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 mt-[1px]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>

        {/* BOTTOM RIGHT BLOCK */}
        <div className="w-full md:w-1/2 self-end mt-auto pb-16 md:pb-32 pt-32 md:pt-10 flex justify-end pointer-events-auto">
          <div className="hero-reveal-right text-right">
            <h1 className="font-sans font-[900] text-[clamp(60px,8vw,140px)] leading-[0.9] tracking-tighter">
              <span className="block text-navy">Absolute</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-navy via-electric to-navy bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                Trust.
              </span>
            </h1>
          </div>
        </div>

      </div>

      {/* The Minimal/Clinical Stats Footer (Z-20) */}
      <div className="relative z-20 w-full bg-white/80 backdrop-blur-xl border-t border-navy/10 py-10 px-6 lg:px-16 shadow-[0_-10px_40px_rgba(1,33,105,0.02)]">
         <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 md:divide-x divide-navy/10">
            
            {/* Descriptive Text Column matching the reference style */}
            <div className="hero-reveal-bottom flex flex-col justify-center px-0 md:pr-8">
              <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-steel font-medium">
                Keep your authentication channels flawless and secure with KL Hi-Tech's proprietary ISO-certified manufacturing infrastructure.
              </p>
            </div>
            
            {/* Data Columns */}
            <div className="hero-reveal-bottom flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Cards manufactured annually</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">80<span className="text-electric">M+</span></div>
            </div>
            
            <div className="hero-reveal-bottom flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Global export destinations</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">52<span className="text-electric">+</span></div>
            </div>
            
            <div className="hero-reveal-bottom flex flex-row md:flex-col justify-between md:justify-center items-center md:items-start px-0 md:px-8 border-t border-navy/10 md:border-t-0 pt-4 md:pt-0">
              <div className="font-sans text-[13px] md:text-[14px] text-steel font-medium md:mb-2 max-w-[120px]">Active clients worldwide</div>
              <div className="font-mono text-3xl md:text-5xl font-bold text-navy tracking-tighter">500<span className="text-electric">+</span></div>
            </div>

         </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
