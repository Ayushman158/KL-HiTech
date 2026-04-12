import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const MegaMenuPanel = ({ type, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-navy-lift/95 backdrop-blur-2xl border-b border-electric/30 animate-in fade-in slide-in-from-top-2 duration-200" style={{ transformOrigin: "top" }}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">
        
        {type === 'Solutions' && (
          <>
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {[
                { title: 'Financial Institutions', desc: 'EMV cards, MICR cheques, PIN mailers' },
                { title: 'Public Security & National Identity', desc: 'Aadhaar, voter ID, passports' },
                { title: 'Education', desc: 'Marksheets, certificates, OMR sheets' },
                { title: 'Government Sector', desc: 'Security printing for critical departments' },
                { title: 'Telecom', desc: 'SIM cards, eSIM solutions' },
                { title: 'Transport', desc: 'FASTag, RFID tickets, SCOSTA cards' },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer border-l-2 border-transparent hover:border-electric transition-all pl-4 time-ease">
                  <h4 className="text-white text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-steel text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-navy rounded-xl p-6 border border-border-dark flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-electric mb-4 block">Featured Case Study</span>
                <h4 className="text-white font-medium text-lg mb-2 leading-tight">Securing National Identity for 1.3 Billion Citizens</h4>
              </div>
              <button className="flex items-center text-electric text-sm font-mono mt-6 hover:text-white transition-colors">
                Read full study <ArrowRight size={14} className="ml-2" />
              </button>
            </div>
          </>
        )}

        {type === 'Products' && (
          <>
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {[
                { title: 'Banking Cards', desc: 'Contact, contactless & metal' },
                { title: 'RFID Solutions', desc: 'Tags, readers and antennas' },
                { title: 'Biometric Cards', desc: 'Fingerprint-enabled secure access' },
                { title: 'Secure Documents', desc: 'High-security printed credentials' },
                { title: 'Wearable Payment Devices', desc: 'Keyfobs, smart rings' },
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer border-l-2 border-transparent hover:border-electric transition-all pl-4 time-ease">
                  <h4 className="text-white text-sm font-medium mb-1">{item.title}</h4>
                  <p className="text-steel text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-navy rounded-xl p-6 border border-border-dark flex flex-col justify-center items-center text-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 to-transparent mix-blend-overlay"></div>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-electric mb-4 relative z-10"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="11" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>
              <h4 className="text-white font-medium text-base relative z-10">Next-Gen Biometric Cards</h4>
            </div>
          </>
        )}

        {type === 'Industries' && (
          <>
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {[
                'Banking & Financial Services',
                'Government & Public Sector',
                'Education',
                'Telecom',
                'Transport & Logistics',
                'Retail',
                'Healthcare'
              ].map((item, idx) => (
                <div key={idx} className="group cursor-pointer border-l-2 border-transparent hover:border-electric transition-all pl-4 py-1 time-ease">
                  <h4 className="text-white text-sm font-medium">{item}</h4>
                </div>
              ))}
            </div>
            <div className="bg-navy rounded-xl p-6 border border-border-dark flex flex-col justify-center">
              <h3 className="font-serif italic text-3xl text-white mb-2 leading-tight">Serving 7 critical sectors</h3>
              <p className="font-mono text-electric text-sm tracking-wide">across 52+ countries</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', hasDropdown: false },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Products', hasDropdown: true },
    { label: 'Industries', hasDropdown: true },
    { label: 'Resources', hasDropdown: false },
    { label: 'Careers', hasDropdown: false },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        scrolled ? 'bg-navy/85 backdrop-blur-xl border-b border-border-dark py-4' : 'bg-transparent border-transparent py-6'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative top-[1px]">
            <rect x="2" y="2" width="14" height="14" rx="2" stroke="white" strokeWidth="2" strokeOpacity="0.3" className="group-hover:stroke-white transition-colors" />
            <rect x="8" y="8" width="14" height="14" rx="2" fill="#2563EB" />
          </svg>
          <span className="font-sans font-medium text-white tracking-widest text-sm sm:text-base uppercase">KL Hi-Tech</span>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative py-2"
              onMouseEnter={() => item.hasDropdown ? setActiveMenu(item.label) : setActiveMenu(null)}
            >
              <div className="flex items-center space-x-1 cursor-pointer text-sm text-steel hover:text-white transition-colors">
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />}
              </div>
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex">
          <button className="bg-electric hover:bg-electric-dim text-white px-6 py-2.5 rounded-[0.75rem] text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden relative group">
            <span className="relative z-10">Request a Quote</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mega dropdown panel (Desktop) */}
      <div className="hidden md:block">
        <MegaMenuPanel type={activeMenu} isOpen={!!activeMenu} />
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-navy-lift bg-opacity-100 z-[90] flex flex-col px-6 py-8 overflow-y-auto w-full md:hidden">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-border-dark py-4 text-white font-medium text-lg flex items-center justify-between">
              {item.label} {item.hasDropdown && <ChevronDown size={18} />}
            </div>
          ))}
          <button className="bg-electric text-white rounded-[0.75rem] w-full py-4 mt-8 font-medium">
            Request a Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
