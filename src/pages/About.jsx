import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.animate-on-load', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="pt-[140px] pb-24 bg-offwhite min-h-screen border-b border-navy/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none mix-blend-multiply opacity-[0.25] z-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0,163,224,0.1), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl animate-on-load">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-4 font-semibold">
            // OUR IDENTITY
          </div>
          <h1 className="text-navy font-sans font-[800] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8">
            Pioneering the future of <span className="text-electric italic font-serif">authentication</span> since 1988.
          </h1>
        </div>

        {/* Vision Block */}
        <div className="w-full bg-white border border-navy/10 rounded-[2rem] p-10 md:p-16 mb-20 animate-on-load relative overflow-hidden group shadow-[0_20px_60px_rgba(1,33,105,0.05)] transition-shadow duration-500 hover:shadow-[0_30px_80px_rgba(1,33,105,0.08)]">
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-electric opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-steel font-sans font-[700] uppercase tracking-wider text-[14px] mb-6">Our Vision</h2>
          <p className="text-navy font-serif italic text-[clamp(24px,3vw,36px)] leading-[1.4] max-w-4xl text-pretty">
            "To provide the highest standard of secure printing solutions through innovation, improvisation, cost effectiveness & timely delivery."
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div className="animate-on-load">
            <h3 className="text-navy font-sans font-[800] text-3xl mb-6 tracking-tight">Why Us?</h3>
            <div className="space-y-6 text-steel font-medium text-[16px] leading-[1.8] text-pretty">
              <p>
                With an impeccable track record of having NEVER missed a deadline in over thirty years of operations, KL HI-TECH is completely committed to its customers and provides end-to-end solutions under one roof for all Banking and Government needs.
              </p>
              <p>
                We conform to strict industry compliance standards ensuring lesser downtime, negligible waste, and faster turnaround. We focus on out-of-the-box solutions providing much-needed support in pioneering personalized credentials and turnkey architectures.
              </p>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 border-t border-navy/10 pt-8">
                {[
                  'Variable Data Printing',
                  'Financial Card Personalisation',
                  'Milling and Embedding',
                  'Drop On Demand (DOD)',
                  'Thermal Formatting',
                  'Turnkey Deployments'
                ].map(item => (
                  <li key={item} className="flex items-center text-[14px] font-sans font-semibold text-navy/90 tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-load">
            <h3 className="text-navy font-sans font-[800] text-3xl mb-6 tracking-tight">Our Footprint </h3>
            <div className="bg-white rounded-[1.5rem] border border-navy/10 shadow-[0_15px_40px_rgba(1,33,105,0.06)] p-8 -mx-4 md:mx-0">
              <p className="text-steel font-medium text-[16px] leading-[1.8] mb-8 text-pretty">
                A sprawling state-of-the-art manufacturing facility headquartered in Telangana alongside highly integrated regional hubs.
              </p>
              <div className="grid grid-cols-2 gap-8 font-mono text-[13px]">
                <div className="border-l-2 border-electric/50 pl-4">
                  <div className="text-navy font-semibold mb-1 uppercase tracking-wider">Hyderabad HQ</div>
                  <div className="text-steel font-medium flex flex-col mt-2">
                    <span>IDA Bollaram</span>
                    <span>Telangana, India</span>
                  </div>
                </div>
                <div className="border-l-2 border-electric/50 pl-4">
                  <div className="text-navy font-semibold mb-1 uppercase tracking-wider">Mumbai Hub</div>
                  <div className="text-steel font-medium mt-2">Maharashtra</div>
                </div>
                <div className="border-l-2 border-electric/50 pl-4">
                  <div className="text-navy font-semibold mb-1 uppercase tracking-wider">New Delhi</div>
                  <div className="text-steel font-medium mt-2">NCR</div>
                </div>
                <div className="border-l-2 border-electric/50 pl-4">
                  <div className="text-navy font-semibold mb-1 uppercase tracking-wider">Bengaluru</div>
                  <div className="text-steel font-medium mt-2">Karnataka</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;
