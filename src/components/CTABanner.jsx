import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MagneticButton = ({ children, className, ...props }) => {
  const btnRef = useRef(null);
  const xTo = useRef(null);
  const yTo = useRef(null);

  useEffect(() => {
    xTo.current = gsap.quickTo(btnRef.current, "x", {duration: 0.4, ease: "power3.out"});
    yTo.current = gsap.quickTo(btnRef.current, "y", {duration: 0.4, ease: "power3.out"});
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    if(xTo.current && yTo.current) {
      xTo.current(x * 0.1);
      yTo.current(y * 0.1);
    }
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  };

  return (
    <button 
      ref={btnRef} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
      className={className} 
      {...props}
    >
      {children}
    </button>
  );
};

const CTABanner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 95%',
          once: true
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[7rem] bg-electric w-full relative overflow-hidden z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8 relative z-10">
        
        {/* Left Side */}
        <div className="w-full lg:w-[60%] flex text-center lg:text-left pt-6">
          <h2 className="font-sans font-[700] text-white text-[clamp(32px,4vw,40px)] tracking-tight leading-[1.25]">
            Ready to build secure infrastructure for your institution?
          </h2>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end gap-5">
          <MagneticButton className="w-full sm:w-auto min-w-[240px] bg-white text-electric px-8 py-[1.125rem] rounded-[0.75rem] font-[600] text-[16px] shadow-[0_4px_20px_rgba(10,22,40,0.1)] hover:scale-[1.02] transition-transform duration-300">
            Request a Quote
          </MagneticButton>
          
          <MagneticButton className="w-full sm:w-auto min-w-[240px] bg-transparent border-2 border-white text-white px-8 py-[1rem] rounded-[0.75rem] font-[600] text-[16px] hover:bg-white hover:text-electric transition-colors duration-300">
            Contact Our Team
          </MagneticButton>
        </div>
        
      </div>
    </section>
  );
};

export default CTABanner;
