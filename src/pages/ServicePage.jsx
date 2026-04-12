import React, { useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const contentDatabase = {
  // --- SOLUTIONS ---
  'banking-solutions': {
    category: 'Solutions',
    title: 'Financial Institutions',
    desc: 'KL HI-TECH is a trusted partner to many MNCs, Private & Nationalised Banks, and Financial Institutions. A pioneer in MICR Cheque printing empanelled with the RBI in 1988, we are fully certified by VISA, MasterCard, RuPay, and the NCMC dual-interface schemes.',
    bullets: ['EMV Chip Cards & Personalised Cheques', 'Dual Interface Contactless Cards', 'National Common Mobility Cards (NCMC)', 'PAN Cards & QR Code Cards', 'Gift and Loyalty Cards', 'Welcome/Insta Kits & PIN Mailers']
  },
  'financial-institutions': {
    category: 'Solutions',
    title: 'Financial Institutions',
    desc: 'KL HI-TECH is a trusted partner to many MNCs, Private & Nationalised Banks, and Financial Institutions. A pioneer in MICR Cheque printing empanelled with the RBI in 1988, we are fully certified by VISA, MasterCard, RuPay, and the NCMC dual-interface schemes.',
    bullets: ['EMV Chip Cards & Personalised Cheques', 'Dual Interface Contactless Cards', 'National Common Mobility Cards (NCMC)', 'PAN Cards & QR Code Cards', 'Gift and Loyalty Cards', 'Welcome/Insta Kits & PIN Mailers']
  },
  'government': {
    category: 'Solutions',
    title: 'Public Security & Identity',
    desc: 'We support the Government’s focus on providing a common national identity to the citizens of India. KL Hi-Tech provides robust and highly secure end-to-end solutions serving critical infrastructure and e-Governance initiatives.',
    bullets: ['Aadhaar Cards', 'Voter ID Cards', 'Passports & ePassports', 'National Identity Cards', 'High-Security Access Passports']
  },
  'public-security': {
    category: 'Solutions',
    title: 'Public Security & Identity',
    desc: 'We support the Government’s focus on providing a common national identity to the citizens of India. KL Hi-Tech provides robust and highly secure end-to-end solutions serving critical infrastructure and e-Governance initiatives.',
    bullets: ['Aadhaar Cards', 'Voter ID Cards', 'Passports & ePassports', 'National Identity Cards', 'High-Security Access Passports']
  },
  'education': {
    category: 'Solutions',
    title: 'Education Sector',
    desc: 'Education is a demanding vertical, and KL HI-TECH has delivered all commitments of generating, monitoring, and delivering documents to millions of students. We are a trusted partner to State Education Boards and the CBSE.',
    bullets: ['Mark Statements & Certificates', 'OMR/ICR Sheets with Variable Data Printing', 'Student ID Cards', 'Confidential Printing (Question papers)', 'Results Processing & Examination Hosting']
  },
  'telecom-cards': {
    category: 'Solutions',
    title: 'Telecom',
    desc: 'Matching the exponential growth in the telecommunications industry, KL HI-TECH works with leading service providers in India and globally to maintain pace with robust digital communication and identification demands.',
    bullets: ['SIM Cards & Micro-SIMs', 'SIM Kits & Assembly', 'Pre-paid Recharge Cards', 'Machine to Machine (M2M) Capabilities']
  },
  'telecom': {
    category: 'Solutions',
    title: 'Telecom',
    desc: 'Matching the exponential growth in the telecommunications industry, KL HI-TECH works with leading service providers in India and globally to maintain pace with robust digital communication and identification demands.',
    bullets: ['SIM Cards & Micro-SIMs', 'SIM Kits & Assembly', 'Pre-paid Recharge Cards', 'Machine to Machine (M2M) Capabilities']
  },
  'transport': {
    category: 'Solutions',
    title: 'Toll & Transport',
    desc: 'RFID Tags have revolutionized the way we travel in India both on highways by making payments easier & faster through FASTag. Additionally, several metro train authorities also utilize our specialized RFID tech for their tickets.',
    bullets: ['FASTag Ecosystem Integrations', 'Metro Passes & Smart Transit Cards', 'Automated Access Ticketing', 'Encrypted Transport Supply Chain']
  },

  // --- PRODUCTS ---
  'contactless-cards': {
    category: 'Products',
    title: 'RFID & Contactless Solutions',
    desc: 'RFID is a rapidly growing technology with a range of applications that help your business trace assets and manage inventory seamlessly. Our high-security intelligent labels empower aviation, automotive, and logistics networks.',
    bullets: ['Automotive Supply Chain Logistics', 'Aviation Baggage Tracking', 'Counterfeit Prevention in Healthcare', 'Retail Digital ID Optimization', 'Turnkey End-To-End Asset Tracing']
  },
  'biometric-cards': {
    category: 'Products',
    title: 'Biometric Smart Cards',
    desc: 'In the ever-evolving world of technology, we stay at the forefront. Our Biometric Cards allow users to authenticate payments via an embedded fingerprint sensor operating seamlessly under Visa & Mastercard schemes without any integrated batteries.',
    bullets: ['Banking Biometric Authentication POS', 'Truly Contact-Free POS Checkout', 'Healthcare Personnel Access Control', 'Highly Secure Workplace Verification', 'Cryptocurrency Wallet Security Access']
  }
};

// Default mapping for unsupported slugs
const fallbackData = {
  category: 'KL HI-TECH NETWORK',
  title: 'Network Systems',
  desc: 'Detailed technical specifications, production scaling metrics, and comprehensive architectural workflows are currently being indexed by our engineering teams.',
  bullets: ['System Integrity Checking', 'Encrypted Supply Routing', 'Scalable Production Queues', 'End-to-End Encryption Topologies']
};

const ServicePage = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const slug = pathParts[pathParts.length - 1] || '';
  
  // Try to find perfect dictionary match, or default context
  const data = contentDatabase[slug] || {
    ...fallbackData,
    title: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'System Integration',
    category: pathParts.length > 1 ? pathParts[0].toUpperCase() : 'KL HI-TECH NETWORK'
  };

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
    <div ref={containerRef} className="pt-32 pb-24 min-h-[85vh] bg-navy flex flex-col justify-center items-center px-6 relative overflow-hidden">
      
      {/* Cinematic Grid Background */}
      <div className="bg-grid absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(37,99,235,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Glow Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[40vh] h-[40vh] bg-electric/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[10%] w-[50vh] h-[50vh] bg-[#2B5DE2]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center md:items-start text-left mt-8">
        
        {/* Left Column: Title & Desc */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center">
          <div className="service-anim flex items-center space-x-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
            <div className="font-mono text-electric tracking-widest uppercase text-[11px] sm:text-xs">
              {data.category} / {data.title.toUpperCase()}
            </div>
          </div>
          
          <h1 className="service-anim font-sans font-[800] text-white text-[clamp(40px,5vw,60px)] leading-[1.15] tracking-tight mb-8 text-balance">
            {data.title}
          </h1>
          
          <p className="service-anim font-sans text-text-muted text-[16px] md:text-[18px] leading-[1.8] mb-12 text-balance max-w-2xl">
            {data.desc}
          </p>
          
          <div className="service-anim flex flex-col sm:flex-row items-center gap-6">
            <Link to="/contact" className="group flex items-center justify-center bg-electric text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] w-full sm:w-auto">
              Get in Touch Configuration
              <ChevronRight size={18} className="translate-x-2 group-hover:translate-x-4 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Column: Capabilities / Bullets */}
        <div className="service-anim w-full lg:w-[45%] bg-navy-lift border border-border-dark rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-electric/40 transition-colors duration-500">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-electric/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          
          <h3 className="font-mono text-electric text-[12px] uppercase tracking-[0.15em] font-semibold mb-8">
            // Core Architecture Capabilities
          </h3>
          
          <ul className="flex flex-col space-y-6">
            {data.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start space-x-4 relative z-10">
                <CheckCircle2 size={24} className="text-electric flex-shrink-0 mt-0.5" />
                <span className="font-sans text-white text-[15px] md:text-[16px] leading-relaxed pt-0.5">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default ServicePage;
