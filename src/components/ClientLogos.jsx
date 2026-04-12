import React from 'react';

const clientsTop = [
  { name: 'SBI', url: '/logos/logo1.png' },
  { name: 'HDFC', url: '/logos/logo2.png' },
  { name: 'ICICI', url: '/logos/logo3.png' },
  { name: 'Axis', url: '/logos/logo4.png' },
  { name: 'BOB', url: '/logos/logo5.png' }
];

const clientsBottom = [
  { name: 'PNB', url: '/logos/logo8.png' },
  { name: 'Kotak', url: '/logos/logo_9.png' },
  { name: 'Canara', url: '/logos/logo_10.png' },
  { name: 'Union', url: '/logos/logo_11.png' },
  { name: 'Aadhaar Ecosystem', url: '/logos/logo_12.png' }
];

const certifications = [
  { name: 'Official Certifications', url: '/logos/logo_7.png' }
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
