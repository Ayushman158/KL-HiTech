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
    <main ref={containerRef} className="pt-[140px] pb-24 bg-navy min-h-screen border-b border-border-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-[0.05] z-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(37,99,235,1), transparent)' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 max-w-4xl animate-on-load">
          <div className="font-mono text-[11px] text-electric uppercase tracking-[0.15em] mb-4">
            // OUR IDENTITY
          </div>
          <h1 className="text-white font-sans font-[800] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8">
            Pioneering the future of <span className="text-electric italic font-serif">authentication</span> since 1988.
          </h1>
        </div>

        {/* Vision Block */}
        <div className="w-full bg-navy-lift border border-white/[0.08] rounded-[2rem] p-10 md:p-16 mb-20 animate-on-load relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-electric opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h2 className="text-steel font-sans font-[600] text-[20px] mb-4">Our Vision</h2>
          <p className="text-white font-serif italic text-[clamp(24px,3vw,36px)] leading-[1.4] max-w-4xl text-pretty">
            "To provide the highest standard of secure printing solutions through innovation, improvisation, cost effectiveness & timely delivery."
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div className="animate-on-load">
            <h3 className="text-white font-sans font-[700] text-3xl mb-6">Why Us?</h3>
            <div className="space-y-6 text-text-muted text-[16px] leading-[1.7]">
              <p>
                With an impeccable track record of having NEVER missed a deadline in over thirty years of operations, KL HI-TECH is completely committed to its customers and provides end-to-end solutions under one roof for all Banking and Government needs.
              </p>
              <p>
                We conform to strict industry compliance standards ensuring lesser downtime, negligible waste, and faster turnaround. We focus on out-of-the-box solutions providing much-needed support in pioneering personalized credentials and turnkey architectures.
              </p>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8 border-t border-white/10 pt-6">
                {[
                  'Variable Data Printing',
                  'Financial Card Personalisation',
                  'Milling and Embedding',
                  'Drop On Demand (DOD)',
                  'Thermal Formatting',
                  'Turnkey Deployments'
                ].map(item => (
                  <li key={item} className="flex items-center text-sm font-sans text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="animate-on-load">
            <h3 className="text-white font-sans font-[700] text-3xl mb-6">Our Footprint </h3>
            <div className="bg-navy-lift rounded-[1.5rem] border border-white/[0.08] p-8 -mx-4 md:mx-0">
              <p className="text-text-muted text-[16px] leading-[1.7] mb-8">
                A sprawling state-of-the-art manufacturing facility headquartered in Telangana alongside highly integrated regional hubs.
              </p>
              <div className="grid grid-cols-2 gap-6 font-mono text-sm">
                <div className="border-l-2 border-electric/30 pl-4">
                  <div className="text-white font-semibold mb-1">Hyderabad HQ</div>
                  <div className="text-steel flex flex-col">
                    <span>IDA Bollaram</span>
                    <span>Telangana, India</span>
                  </div>
                </div>
                <div className="border-l-2 border-electric/30 pl-4">
                  <div className="text-white font-semibold mb-1">Mumbai Hub</div>
                  <div className="text-steel">Maharashtra</div>
                </div>
                <div className="border-l-2 border-electric/30 pl-4">
                  <div className="text-white font-semibold mb-1">New Delhi</div>
                  <div className="text-steel">NCR</div>
                </div>
                <div className="border-l-2 border-electric/30 pl-4">
                  <div className="text-white font-semibold mb-1">Bengaluru</div>
                  <div className="text-steel">Karnataka</div>
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
