import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Send } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.animate-on-load', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network delay for realistic feel
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <main ref={containerRef} className="pt-[140px] pb-24 bg-navy min-h-screen relative overflow-hidden flex flex-col justify-center">
      
      {/* Cinematic Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-[20%] left-[-10%] w-[50vh] h-[50vh] bg-electric/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: HQ and Contact Details */}
          <div className="w-full lg:w-[40%] flex flex-col animate-on-load">
            
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
              <div className="font-mono text-electric tracking-widest uppercase text-xs">
                CLIENT HUB
              </div>
            </div>

            <h1 className="text-white font-sans font-[800] text-[clamp(44px,5vw,72px)] leading-[1.1] tracking-tight mb-8 text-balance">
              Establish a <br/><span className="text-electric italic font-serif opacity-90">Secure Link</span>.
            </h1>
            
            <p className="text-text-muted text-[17px] md:text-[18px] leading-[1.7] mb-12 text-pretty">
              We are actively available for commissions, collaborative RFPs, and sophisticated architectural challenges. Connect with our central HQ to initiate a secure encrypted dialogue.
            </p>

            <div className="space-y-10 mb-12">
              <div className="flex flex-col border-l-2 border-electric/40 hover:border-electric transition-colors pl-6 duration-300">
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest mb-1 shadow-sm">General Intelligence</span>
                <a href="mailto:info@klhitech.com" className="text-white font-[600] text-[18px] sm:text-[22px] hover:text-electric transition-colors">info@klhitech.com</a>
              </div>
              <div className="flex flex-col border-l-2 border-electric/40 hover:border-electric transition-colors pl-6 duration-300">
                <span className="font-mono text-[11px] text-steel uppercase tracking-widest mb-1">Primary Telecom</span>
                <a href="tel:+919550556780" className="text-white font-[600] text-[18px] sm:text-[22px] hover:text-electric transition-colors">+91 9550556780</a>
                <a href="tel:+918458279570" className="text-steel font-[500] text-[15px] hover:text-white transition-colors mt-1">+91 8458279570</a>
              </div>
            </div>

            <div className="bg-navy-lift border border-border-dark rounded-2xl p-8 hover:border-white/10 transition-colors duration-300">
              <h3 className="text-white font-sans font-[600] text-lg mb-4 border-b border-border-dark pb-3">Global Headquarters</h3>
              <div className="flex flex-col gap-1.5 font-mono text-steel text-xs leading-relaxed uppercase tracking-wider">
                <span className="text-white font-semibold">KL HI-TECH SECURE PRINT</span>
                <span>Plot No. 22-23</span>
                <span>Anrich Industrial Estate</span>
                <span>IDA Bollaram – 502325</span>
                <span>Sangareddy District, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="w-full lg:w-[60%] animate-on-load lg:pt-0 mb-12 lg:mb-0 lg:pl-12">
            <form onSubmit={handleSubmit} className="flex flex-col relative group h-full justify-center">
              <h2 className="text-white font-sans font-[500] text-[24px] mb-8 border-b border-border-dark pb-3 opacity-90 tracking-wide">Client Inquiry</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8 mb-6 md:mb-8">
                <div className="flex flex-col relative">
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="peer bg-transparent border-b border-white/10 py-3 text-white font-sans text-[15px] outline-none focus:border-electric transition-colors" placeholder="Full Name" />
                </div>
                <div className="flex flex-col relative">
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="peer bg-transparent border-b border-white/10 py-3 text-white font-sans text-[15px] outline-none focus:border-electric transition-colors" placeholder="Work Email" />
                </div>
              </div>

              <div className="flex flex-col mb-6 md:mb-8">
                <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="peer bg-transparent border-b border-white/10 py-3 text-white font-sans text-[15px] outline-none focus:border-electric transition-colors" placeholder="Company / Organization" />
              </div>

              <div className="flex flex-col mb-10">
                <textarea required rows="1" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="peer bg-transparent border-b border-white/10 py-3 text-white font-sans text-[15px] outline-none focus:border-electric transition-colors resize-y min-h-[60px] max-h-[200px] leading-relaxed" placeholder="Describe your operational requirements or architectural challenges..." />
              </div>

              <button type="submit" disabled={isSubmitting} className={`w-full md:w-auto md:self-end px-10 flex items-center justify-center gap-3 py-3.5 rounded-full font-sans font-[500] text-[13px] tracking-wide uppercase transition-all duration-300 border ${isSubmitted ? 'border-[#10B981] bg-[#10B981]/10 text-[#10B981]' : 'border-electric/40 text-electric hover:bg-electric hover:border-electric hover:text-white'} disabled:opacity-70 disabled:cursor-not-allowed`}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-electric/30 border-t-electric rounded-full animate-spin" /> Transmitting</span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2 font-mono uppercase"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Secured</span>
                ) : (
                  <>Send Transmission <Send size={15} className="mt-[-2px] opacity-80" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
