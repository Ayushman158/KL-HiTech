import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const MegaMenuPanel = ({ type, isOpen }) => {
  if (!isOpen) return null;

  const content = {
    Solutions: [
      { title: 'Banking Solutions', desc: 'Secure payment cards and EMV manufacturing.' },
      { title: 'Telecom Cards', desc: 'High-volume SIM and smart card production.' },
      { title: 'Government', desc: 'Aadhaar, Voter ID, and highly secure credentials.' },
      { title: 'Transport', desc: 'Access control and secure transit payment devices.' },
      { title: 'Retail & Loyalty', desc: 'Prepaid, gift, and membership cards.' },
    ],
    Products: [
      { title: 'Contactless Cards', desc: 'NFC-enabled tap-to-pay tech.' },
      { title: 'Biometric Cards', desc: 'Fingerprint authentication.' },
      { title: 'Metal Cards', desc: 'Premium weighted banking cards.' },
      { title: 'Wearables', desc: 'NFC keyfobs and smart rings.' },
    ]
  };

  const activeContent = content[type];
  if (!activeContent) return null;

  return (
    <div className="absolute top-full left-0 w-full min-h-[300px] border-t border-border-light shadow-2xl backdrop-blur-xl bg-navy-lift/95 z-50 transform origin-top transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex">
        
        {/* Title Side */}
        <div className="w-1/3 pr-8 border-r border-border-dark">
          <h2 className="font-sans font-[700] text-white text-3xl mb-4">{type}</h2>
          <p className="font-sans text-steel text-[15px] max-w-[250px] leading-[1.6]">
            Secure manufacturing pipelines designed for {type.toLowerCase()} across global critical infrastructure.
          </p>
          <div className="mt-8">
            <Link to={`/${type.toLowerCase()}`} className="inline-block text-electric font-mono text-[12px] uppercase tracking-widest hover:text-white transition-colors outline-none cursor-pointer">
              View All {type} <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-2/3 pl-12 grid grid-cols-2 gap-x-8 gap-y-6">
          {activeContent.map((item, idx) => (
            <Link to={`/${type.toLowerCase()}/${item.title.toLowerCase().replace(/ /g, '-')}`} key={idx} className="group cursor-pointer block outline-none">
              <h3 className="font-sans font-[600] text-white text-[16px] mb-1 group-hover:text-electric transition-colors">{item.title}</h3>
              <p className="font-sans text-steel text-[13px] leading-[1.5] group-hover:text-text-muted transition-colors">{item.desc}</p>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', hasDropdown: false, to: '/about' },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Products', hasDropdown: true },
    { label: 'Innovation', hasDropdown: false, to: '/innovation' },
    { label: 'Careers', hasDropdown: false, to: '/careers' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 lg:py-4 bg-navy-lift/90 backdrop-blur-xl border-b border-border-light shadow-lg' 
          : 'py-5 lg:py-8 bg-transparent border-b border-transparent'
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer group pt-1">
           <img src="/klhitech-logo.png" alt="KL Hi-Tech Logo" className="h-[28px] sm:h-[34px] w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" style={{ filter: 'invert(1) grayscale(1) contrast(500%)', mixBlendMode: 'lighten' }} />
        </Link>
        
        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <div 
              key={idx} 
              className="relative py-2"
              onMouseEnter={() => item.hasDropdown ? setActiveMenu(item.label) : setActiveMenu(null)}
            >
              <div className={`flex items-center space-x-1 cursor-pointer text-sm transition-colors ${location.pathname === item.to ? 'text-electric font-medium' : 'text-steel hover:text-white'}`}>
                {item.to ? (
                  <Link to={item.to} className="outline-none focus:outline-none">{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />}
              </div>
            </div>
          ))}

          {/* CTA Button */}
          <Link to="/contact" className="ml-4 font-sans text-sm font-medium border border-border-light px-5 py-2.5 rounded-full text-white hover:bg-white hover:text-navy transition-all duration-300">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mega Menu Dropdowns (Desktop) */}
      <div className="hidden md:block">
        <MegaMenuPanel type="Solutions" isOpen={activeMenu === 'Solutions'} />
        <MegaMenuPanel type="Products" isOpen={activeMenu === 'Products'} />
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <div className={`fixed inset-0 bg-navy z-40 transform transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMobileMenuOpen(false)} className="text-white absolute top-6 right-6 p-2"><X size={28} /></button>
          </div>
          
          <div className="flex flex-col flex-grow overflow-y-auto pb-20">
            <Link to="/" className="mb-10 block" onClick={() => setMobileMenuOpen(false)}>
              <img src="/klhitech-logo.png" alt="KL Hi-Tech Logo" className="h-[36px] w-auto object-contain opacity-90" style={{ filter: 'invert(1) grayscale(1) contrast(500%)', mixBlendMode: 'lighten' }} />
            </Link>

            <div className="flex flex-col space-y-4">
              {/* Mobile Menu Links */}
              {navItems.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    {item.to ? (
                      <Link to={item.to} className="text-xl font-medium text-white hover:text-electric transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-xl font-medium text-white" onClick={() => item.hasDropdown && setActiveMenu(activeMenu === item.label ? null : item.label)}>
                        {item.label}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <button onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)} className="p-2 outline-none">
                        <ChevronDown size={20} className={`text-electric transition-transform duration-300 ${activeMenu === item.label ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {item.hasDropdown && activeMenu === item.label && (
                    <div className="mt-4 flex flex-col space-y-4 pl-4 border-l border-white/10">
                      {['Banking Solutions', 'Telecom Cards', 'Commercial Print', 'Digital Identities'].map((sub, sIdx) => (
                        <Link to={`/${item.label.toLowerCase()}/${sub.toLowerCase().replace(/ /g, '-')}`} onClick={() => setMobileMenuOpen(false)} key={sIdx} className="text-steel hover:text-white transition-colors text-lg">{sub}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-electric text-white py-4 rounded-lg font-medium text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
