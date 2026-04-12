import React from 'react';

const clientsR1 = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "UIDAI (Aadhaar)",
  "Punjab National Bank",
  "Axis Bank",
  "Canara Bank",
  "Union Bank of India"
];

const clientsR2 = [
  "Election Commission",
  "Bank of Baroda",
  "IndusInd Bank",
  "Kotak Mahindra",
  "Ministry of Transport",
  "Reserve Bank of India",
  "IDFC First",
  "Bank of India"
];

const ClientLogos = () => {
  return (
    <section className="py-[6rem] bg-offwhite w-full relative border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16 relative z-10">
        <h3 className="font-sans font-[700] text-text-dark text-[clamp(28px,4vw,36px)] tracking-tight mb-3">
          Trusted by India's Leading Institutions
        </h3>
        <p className="font-sans text-steel text-[16px] max-w-[500px] mx-auto">
          Banks, government bodies, and critical infrastructure operators
        </p>
      </div>

      {/* Marquee Container */}
      <div className="w-full flex flex-col gap-6 mb-20 mask-edges relative z-10">
        {/* Row 1: Right to Left */}
        <div className="relative w-full overflow-hidden flex pt-2 pb-2">
          <div className="flex w-max animate-marquee group">
            {[...clientsR1, ...clientsR1].map((logo, idx) => (
              <div key={idx} className="flex-none mx-3 px-8 h-[80px] bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(10,22,40,0.04)] border border-border-light flex items-center justify-center grayscale opacity-[0.55] hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] transition-all duration-300 cursor-pointer">
                {/* Visual anchor point for the text mark */}
                <div className="w-2.5 h-2.5 rounded-sm bg-navy/20 mr-3 mr-group-hover:bg-electric transition-colors"></div>
                <span className="font-sans font-[600] text-[18px] text-text-dark tracking-tight">{logo}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Row 2: Left to Right */}
        <div className="relative w-full overflow-hidden flex pt-2 pb-2">
          <div className="flex w-max animate-marquee-reverse group">
            {[...clientsR2, ...clientsR2].map((logo, idx) => (
              <div key={idx} className="flex-none mx-3 px-8 h-[80px] bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(10,22,40,0.04)] border border-border-light flex items-center justify-center grayscale opacity-[0.55] hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] transition-all duration-300 cursor-pointer">
                {/* Different style for row 2 visual anchor */}
                <span className="font-sans font-[800] text-[20px] text-text-dark tracking-tighter uppercase">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications row */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center relative z-10">
        <div className="font-mono text-[11px] text-steel tracking-widest uppercase mb-6 font-medium">
          Certified & Empanelled By
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Visa', 'Mastercard', 'RuPay', 'NCMC', 'RBI', 'ISO 27001'].map((cert, idx) => (
            <div key={idx} className="bg-white px-5 py-[0.6rem] rounded-[0.5rem] shadow-sm flex items-center space-x-2.5 border border-border-light hover:border-electric/30 hover:shadow-md transition-all duration-300 cursor-default">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-electric">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-sans font-[600] text-text-dark text-[13px] tracking-wide">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 50s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
