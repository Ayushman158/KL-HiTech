import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Vercel-style seamless entrance
      const tl = gsap.timeline();
      
      gsap.set('.hero-reveal', { y: 30, opacity: 0 });
      gsap.set(imageRef.current, { y: 50, opacity: 0, rotateX: 10, scale: 0.95 });
      
      tl.to('.hero-reveal', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.1
      })
      .to(imageRef.current, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
      }, "-=0.6");

      // Interactive 3D mouse tracking for the image frame
      const handleMouseMove = (e) => {
        if (!containerRef.current || !imageRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const px = (e.clientX - left) / width - 0.5;
        const py = (e.clientY - top) / height - 0.5;

        gsap.to(imageRef.current, {
          rotationY: px * 10,
          rotationX: -py * 10,
          transformPerspective: 1500,
          ease: 'power2.out',
          duration: 0.6
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
    <section ref={containerRef} className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white pt-32 pb-20">
      
      {/* Vercel-style precise grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSwxLCAzMyLCAxMDUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_20%,transparent_100%)]"></div>
        {/* Top central ambient glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] max-w-[800px] h-[500px] bg-electric/10 rounded-full blur-[100px] opacity-70 mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10 flex flex-col items-center justify-start text-center mt-12">
        
        {/* Minimal Pill Badge */}
        <div className="hero-reveal inline-flex items-center space-x-2 bg-white border border-gray-200 backdrop-blur-md rounded-full px-4 py-1.5 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
          </span>
          <span className="font-mono text-[11px] md:text-[12px] text-navy uppercase tracking-widest font-semibold pt-px">Next-Generation Print Manufacturing</span>
        </div>

        {/* Hyper-minimal, Vercel-style Heading */}
        <h1 className="hero-reveal font-sans font-[800] text-[clamp(44px,7vw,88px)] leading-[1.05] tracking-tighter text-navy max-w-4xl mb-6 text-balance flex flex-wrap justify-center items-center gap-x-4">
          <span>Forging the architecture of</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-navy via-electric to-navy bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
            absolute trust.
          </span>
        </h1>

        <p className="hero-reveal font-sans text-steel text-[16px] md:text-[20px] leading-[1.6] max-w-2xl text-balance mb-12 font-medium">
          India's premier partner for governments and financial institutions. Delivering unbreakable authentication across physical cards and digital identities in seconds.
        </p>

        {/* Crisp Call to Actions */}
        <div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link to="/contact" className="w-full sm:w-auto bg-navy text-white px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] hover:bg-[#000] focus:ring-4 focus:ring-navy/20 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 text-center">
            Initiate Secure Link
          </Link>
          <Link to="/innovation" className="w-full sm:w-auto bg-white text-navy px-8 py-3.5 rounded-full font-sans font-[600] text-[15px] border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-center shadow-sm">
            Explore Architecture
          </Link>
        </div>

        {/* Framer/Vercel Style Image Presentation inside 3D Perspective */}
        <div className="w-full max-w-5xl mt-20 relative px-4 sm:px-0">
          <div ref={imageRef} className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[1rem] md:rounded-[2rem] overflow-hidden bg-white/50 backdrop-blur-sm border border-gray-200/60 shadow-[0_40px_80px_rgba(1,33,105,0.12)]">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-80 z-10 pointer-events-none mix-blend-overlay"></div>
            
            <img src="/elegant_hero_centerpiece.png" alt="Secure Infrastructure" className="w-full h-full object-cover transform scale-[1.01]" />
            
            {/* Lower Shadow Fade to ground the image */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none"></div>

            {/* Faint UI Mockup Window Buttons to give it a tech-dashboard feel */}
            <div className="absolute top-6 left-6 flex gap-2 z-20 hidden md:flex opacity-50">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
          </div>
        </div>

        {/* Subtle Client Logos directly under the Hero frame */}
        <div className="hero-reveal w-full max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-16 opacity-50 grayscale hover:grayscale-0 transition-duration-700">
           <div className="font-sans font-[800] text-[18px] tracking-tight text-navy">VISA</div>
           <div className="font-sans font-[800] text-[18px] tracking-tighter text-navy flex items-center gap-1">
              <div className="flex -space-x-2"><div className="w-4 h-4 rounded-full bg-red-600 mix-blend-multiply"></div><div className="w-4 h-4 rounded-full bg-yellow-500 mix-blend-multiply"></div></div>
              Mastercard
           </div>
           <div className="font-sans font-[800] text-[18px] tracking-tight text-navy">RuPay</div>
           <div className="font-mono font-[700] text-[16px] tracking-widest text-navy border border-navy px-2 py-0.5 rounded-[4px]">NCMC</div>
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
