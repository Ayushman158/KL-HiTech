import React from 'react';

const clientsTop = [
  { name: 'HDFC Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
  { name: 'Aadhaar', url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg' },
  { name: 'ICICI Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
  { name: 'Punjab National Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Punjab_National_Bank.svg' },
  { name: 'FIS', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Fidelity_National_Information_Services_logo.svg' },
  { name: 'State Bank of India', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/SBI-logo.svg' }
];

const clientsBottom = [
  { name: 'Axis Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg' },
  { name: 'Kotak Mahindra', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Kotak_Mahindra_Bank_logo.svg' },
  { name: 'Election Commission', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Election_Commission_of_India_Logo.svg' },
  { name: 'Bank of Baroda', url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Bank_of_Baroda_logo.svg' },
  { name: 'Union Bank of India', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Union_Bank_of_India_Logo.svg' },
  { name: 'Canara Bank', url: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Canara_Bank_Logo.svg' }
];

const certifications = [
  { name: 'VISA', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
  { name: 'Mastercard', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
  { name: 'RuPay', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png' }
];

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-[6rem] bg-offwhite w-full relative border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center mb-16 relative z-10">
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
            {[...clientsTop, ...clientsTop, ...clientsTop, ...clientsTop].map((logo, idx) => (
              <div key={idx} className="flex-none w-[180px] h-[80px] mx-3 px-6 bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(10,22,40,0.04)] border border-border-light flex items-center justify-center grayscale-[1] opacity-[0.4] hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] transition-all duration-300 cursor-pointer">
                <img src={logo.url} alt={logo.name} className="max-w-full max-h-[40px] mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Row 2: Left to Right */}
        <div className="relative w-full overflow-hidden flex pt-2 pb-2">
          <div className="flex w-max animate-marquee-reverse group">
            {[...clientsBottom, ...clientsBottom, ...clientsBottom, ...clientsBottom].map((logo, idx) => (
              <div key={idx} className="flex-none w-[180px] h-[80px] mx-3 px-6 bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(10,22,40,0.04)] border border-border-light flex items-center justify-center grayscale-[1] opacity-[0.4] hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] transition-all duration-300 cursor-pointer">
                <img src={logo.url} alt={logo.name} className="max-w-full max-h-[40px] mix-blend-multiply" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications row */}
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col items-center relative z-10">
        <div className="font-mono text-[11px] text-steel tracking-widest uppercase mb-8 font-medium">
          Certified by
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex items-center justify-center grayscale-[1] opacity-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110">
              <img src={cert.url} alt={cert.name} className="h-[28px] md:h-[40px] object-contain mix-blend-multiply" />
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
          animation: marquee 80s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 80s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
