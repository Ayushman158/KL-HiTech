import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-deep w-full relative z-30 pt-16 pb-8 rounded-t-[2rem] border-t border-electric/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-3 cursor-pointer group mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="14" height="14" rx="2" stroke="white" strokeWidth="2" strokeOpacity="0.3" className="group-hover:stroke-white transition-colors" />
                <rect x="8" y="8" width="14" height="14" rx="2" fill="#2563EB" />
              </svg>
              <span className="font-sans font-[600] text-white tracking-widest text-[16px] uppercase">KL Hi-Tech</span>
            </div>
            <p className="font-mono text-text-muted text-[12px] mb-8 tracking-wide">
              Securing identities since 1988.
            </p>
            <div className="flex items-center space-x-4 mb-10">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-electric hover:text-white hover:border-electric transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-electric hover:text-white hover:border-electric transition-all duration-300">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
            {/* System Operational Indicator */}
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
              <span className="font-mono text-[10px] text-[#10B981]/80 tracking-widest uppercase">System Operational</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col">
            <h4 className="font-sans font-[600] text-white text-[15px] mb-6">Quick Links</h4>
            <ul className="flex flex-col space-y-4">
              <li><Link to="/about" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">About</Link></li>
              <li><Link to="/innovation" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">Innovation</Link></li>
              <li><a href="#" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">Resources</a></li>
              <li><Link to="/careers" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">Careers</Link></li>
              <li><Link to="/contact" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col">
            <h4 className="font-sans font-[600] text-white text-[15px] mb-6">Solutions</h4>
            <ul className="flex flex-col space-y-4">
              {['Financial Institutions', 'Public Security', 'Education', 'Government', 'Telecom', 'Transport'].map(link => (
                <li key={link}>
                  <a href="#" className="font-sans text-[14px] text-text-muted hover:text-white hover:pl-1 transition-all duration-300 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col">
            <h4 className="font-sans font-[600] text-white text-[15px] mb-6">Contact</h4>
            <ul className="flex flex-col space-y-4 font-mono text-[13px] text-text-muted">
              <li className="text-white bg-white/5 py-1 px-3 rounded inline-block w-max">Bollaram HQ — Telangana</li>
              <li className="leading-relaxed whitespace-pre-line">
                {'Mumbai  ·  Delhi  ·  Bengaluru\nLucknow  ·  Noida'}
              </li>
              <li className="pt-2 flex flex-col space-y-2">
                <a href="mailto:info@klhitech.com" className="hover:text-electric transition-colors">info@klhitech.com</a>
                <a href="tel:+919550556780" className="hover:text-electric transition-colors">+91 9550556780</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="font-sans text-text-muted text-[12px]">
            &copy; 2026 KL Hi-Tech Secure Print Limited. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 font-sans text-[12px] text-text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
