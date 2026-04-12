import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

const ServicePage = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const titleRaw = pathParts[pathParts.length - 1] || 'Overview';
  const title = titleRaw.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const category = pathParts.length > 1 ? pathParts[0].toUpperCase() : 'KL HI-TECH NETWORK';

  useEffect(() => {
    window.scrollTo(0, 0);
    
    let ctx = gsap.context(() => {
      gsap.from('.service-anim', { 
        y: 40, 
        opacity: 0, 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power3.out',
        delay: 0.2
      });
      
      gsap.from('.bg-grid', {
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-[85vh] bg-[#060E1A] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      
      {/* Cinematic Grid Background */}
      <div className="bg-grid absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[20%] left-[20%] w-[30vh] h-[30vh] bg-electric/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[40vh] h-[40vh] bg-[#2B5DE2]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Breadcrumb / Category */}
        <div className="service-anim flex items-center space-x-3 mb-8">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
          <div className="font-mono text-electric tracking-widest uppercase text-[11px] sm:text-xs">
            {category} / {title.toUpperCase()}
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="service-anim font-sans font-[800] text-white text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8 text-balance">
          {title}
        </h1>
        
        {/* Description Body */}
        <p className="service-anim font-sans text-steel text-[16px] md:text-[18px] max-w-[600px] leading-[1.8] mb-12 text-balance">
          Detailed technical specifications, production scaling metrics, and comprehensive architectural workflows for <strong className="text-white font-[600]">{title.toLowerCase()}</strong> are currently being indexed by our engineering teams.
        </p>
        
        {/* Actions */}
        <div className="service-anim flex flex-col sm:flex-row items-center gap-6">
          <Link to="/contact" className="group flex items-center justify-center bg-electric text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] w-full sm:w-auto">
            Get in Touch
            <ChevronRight size={18} className="translate-x-2 group-hover:translate-x-4 transition-transform duration-300" />
          </Link>
          
          <Link to="/" className="group flex items-center justify-center bg-transparent border border-white/10 text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
            Return to Core
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ServicePage;
