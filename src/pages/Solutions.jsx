import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2, CornerDownRight } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

// Images
import imgBanking from '../assets/solutions_banking_3d.png';
import imgIdentity from '../assets/solutions_identity_3d.png';
import imgGov from '../assets/solutions_gov_3d.png';
import imgEdu from '../assets/solutions_edu_3d.png';
import imgTransport from '../assets/solutions_transport_3d.png';
import imgTelecom from '../assets/solutions_telecom_3d.png';
import imgRFID from '../assets/solutions_rfid_3d.png';

const solutionsData = [
  {
    id: 'banking',
    label: 'Banking & Financial Institutions',
    title: 'The infrastructure behind every secure transaction.',
    image: imgBanking,
    desc: "A certified card manufacturer and personalisation partner for India's largest banks, MNCs, NBFCs, and fintech companies. We deliver end-to-end from card design and manufacturing to data personalisation, kitting, and last-mile delivery under Visa, Mastercard, and RuPay certification.",
    stats: [
      { value: '80M+', label: 'Laminated cards manufactured' },
      { value: '2 Lakh+', label: 'Cards personalised & dispatched per day' },
      { value: '2015', label: 'Certified by Visa, Mastercard & RuPay' }
    ],
    sections: [
      {
        heading: 'Payment Cards',
        items: ['EMV Chip Cards', 'Dual-Interface Cards', 'Contactless Cards', 'National Common Mobility Cards (NCMC)', 'QR Code Cards', 'PAN Cards', 'Premium & Specialty Cards', 'Metal Cards — Full Metal & Hybrid', 'Biometric Cards', 'Recycled PVC & Biodegradable Cards', 'Transparent & Translucent Cards', 'Hololam Cards', 'Gift & Loyalty Cards', 'Corporate Identity Cards']
      },
      {
        heading: 'Banking Instruments & Fulfilment',
        items: ['Personalised & Non-Personalised Cheques and Demand Drafts', 'PIN Mailers', 'Welcome Kits & Insta Kits', 'Automated Mailing & Fulfilment', 'Real-Time Inventory & Shipping Reporting']
      }
    ],
    highlight: 'Only company in India to personalise and dispatch over 1 million EMV Photo Cards in 6 weeks.'
  },
  {
    id: 'identity',
    label: 'Public Security & National Identity',
    title: 'The documents that define identity manufactured to protect it.',
    image: imgIdentity,
    desc: "KL HI-TECH has been central to India's national identity infrastructure for over a decade. We have produced Aadhaar cards for UIDAI as part of the world's largest biometric identity programme and bring that same precision, scale, and security to national identity mandates globally.",
    sections: [
      {
        heading: 'Products',
        items: ['Aadhaar Cards — Paper & PVC', 'Voter ID Cards', 'Passports & ePassports', 'National Identity Cards', 'Health Smart Cards', 'PDS Smart Ration Cards — One Nation One Card']
      },
      {
        heading: 'Security Standards',
        items: ['ISO 14298:2021 (Intergraf) — Global benchmark for security printing', 'ISO 27001:2022 — Information Security Management', 'End-to-end encrypted data processing with certified deletion', 'Firewalled networks, audited by certified agencies']
      }
    ],
    highlight: 'Over a decade of continuous Aadhaar production for UIDAI, the world\'s largest biometric identity programme.'
  },
  {
    id: 'government',
    label: 'State & Central Government',
    title: 'When governments require precision, they call on KL HI-TECH.',
    image: imgGov,
    desc: "State and central government departments across India have trusted KL HI-TECH with their most critical citizen-facing mandates from land records and ration cards to electoral materials and excise documentation. High-volume, time-bound, zero-error delivery is the standard we have maintained across 35+ years of government partnerships.",
    sections: [
      {
        heading: 'Products & Documents',
        items: ['Government-to-Citizen (G2C) Certificates', 'ePermits', 'PDS Smart Ration Cards — One Nation One Card Programme', 'Pattadar Passbooks — Land Records cum Title Deeds', 'Ballot Papers', 'Census Forms', 'Excise & Tax Stamps', 'Health Cards — Plastic & Paper']
      },
      {
        heading: 'Track Record',
        items: ['Ballot papers for multiple state elections including the world\'s largest democracy', 'Pattadar Passbooks for the Government of Telangana', 'MeeSeva certificates for Andhra Pradesh', 'Ration and health cards across 10+ state governments']
      }
    ],
    highlight: 'Mandates delivered on time, every time across three decades of government partnerships.'
  },
  {
    id: 'education',
    label: 'Education',
    title: 'Critical examination materials. Delivered without compromise.',
    image: imgEdu,
    desc: "Education board examinations operate on fixed calendars with zero tolerance for error or delay. KL HI-TECH manufactures examination materials, student identity documents, and academic records with the confidentiality and precision that high-stakes assessments demand.",
    sections: [
      {
        heading: 'Examination Materials',
        items: ['Question Papers', 'Hall Tickets', 'Attendance Sheets & Absentee Statements', 'OMR / ICR Sheets with Variable Data Printing', 'Pre and Post Examination Processing']
      },
      {
        heading: 'Academic Documents & Identity',
        items: ['Mark Statements', 'Migration Certificates & Certificates', 'Textbooks & Exercise Books', 'Student Identity Cards']
      }
    ],
    highlight: 'Strict chain-of-custody protocols and confidentiality standards across all examination materials.'
  },
  {
    id: 'transport',
    label: 'Transportation',
    title: 'Secure credentials for a connected transport network.',
    image: imgTransport,
    desc: "From driving licences to FASTags, from SCOSTA-certified smart cards to RFID bus tickets KL HI-TECH manufactures the secure credentials and travel documents that keep modern transport systems moving. We are empanelled by several of India's leading banks for FASTags manufacturing, and hold SCOSTA certification for government transport applications.",
    sections: [
      {
        heading: 'Products',
        items: ['Driving Licences & Registration Certificates', 'SCOSTA Cards', 'RFID Tickets — Train & Bus', 'FASTags for Toll Booths', 'Passenger Tickets — Bus & Train']
      },
      {
        heading: 'Geographic Reach',
        items: ['State mandates across Uttar Pradesh, Gujarat, Karnataka, Haryana, and Telangana', 'International programmes — Kingdom of Lesotho, Angola, and others']
      }
    ],
    highlight: 'Empanelled by leading Indian banks for FASTags. SCOSTA certified.'
  },
  {
    id: 'telecom',
    label: 'Telecommunications',
    title: 'From SIM to eSIM manufactured at scale, certified for security.',
    image: imgTelecom,
    desc: "KL HI-TECH has kept pace with every evolution in the telecom industry from traditional SIM cards to eSIMs and Machine-to-Machine connectivity. With 96 million SIM cards produced and a dedicated eSIM and SIM Push Software vertical launched in 2023, we are one of India's most capable telecom product manufacturers serving operators across India, Africa, and the Middle East.",
    sections: [
      {
        heading: 'Products',
        items: ['SIM Cards', 'SIM Kits', 'Recharge Cards — Pre-paid', 'eSIM', 'Machine-to-Machine (M2M) SIM', 'SIM Push Software']
      },
      {
        heading: 'Certifications',
        items: ['GSMA SAS — SIM Manufacturing Certification', 'ISO 27001:2022 — Information Security Management', '96M+ SIM cards produced']
      }
    ],
    highlight: 'eSIM vertical launched 2023 at the frontier of next-generation connectivity.'
  },
  {
    id: 'rfid',
    label: 'RFID',
    title: 'Intelligent identification. Built for operational scale.',
    image: imgRFID,
    desc: "RFID technology is transforming how institutions manage assets, inventory, and supply chains. KL HI-TECH manufactures a comprehensive range of RFID products from dry and wet inlays to apparel tags, track-and-trace labels, and toll booth tags backed by the same manufacturing discipline and security standards that underpin our card and document operations.",
    sections: [
      {
        heading: 'Products',
        items: ['Dry & Wet Inlays', 'Apparel Tags', 'Track & Trace Labels', 'Asset & Inventory Management Tags', 'RFID Lottery Tickets', 'Toll Booth Tags']
      },
      {
        heading: 'Services & Sectors',
        items: ['Inventory & Supply Chain Management', 'Retail, Healthcare & Aviation', 'Logistics & Transportation', 'Track & Trace Solutions', 'Authenticity Verification']
      }
    ],
    highlight: 'Prevent inventory loss. Reduce labour costs. Increase supply chain efficiency.'
  }
];

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.tab-anim', {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'power2.out', delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (contentRef.current && imageRef.current) {
      // Crossfade text content
      gsap.fromTo(contentRef.current, 
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out' }
      );
      
      // Crossfade image with a slight scale effect
      gsap.fromTo(imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  const activeData = solutionsData[activeTab];

  return (
    <main ref={containerRef} className="bg-offwhite min-h-screen overflow-x-hidden font-sans text-text-dark">
      
      <ServiceHero 
        tags={['BANKING', 'GOVERNMENT', 'TELECOM', 'IDENTITY', 'TRANSPORT', 'EDUCATION', 'RFID']}
        title="Built for the sectors that"
        titleHighlight="run the world."
        ctaText="Start a Conversation"
      />



      {/* Tabs Interface */}
      <section className="pt-12 pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        
        {/* Tab Headers */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-navy/10 mb-16 relative z-20 bg-offwhite/80 backdrop-blur-md sticky top-[72px] lg:top-[88px] pt-4">
          <div className="flex w-full md:justify-between px-2 gap-8 md:gap-4 min-w-max md:min-w-0">
            {solutionsData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`tab-anim relative pb-6 px-2 font-mono text-[12px] uppercase tracking-wider font-semibold whitespace-nowrap transition-colors duration-300 ${activeTab === idx ? 'text-electric' : 'text-steel hover:text-navy'}`}
              >
                {tab.label}
                {activeTab === idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric rounded-t-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content - Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 sticky top-[180px]">
            <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_rgba(1,33,105,0.15)] bg-navy">
              {/* Subtle inner shadow for depth */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-10 rounded-[2rem] pointer-events-none"></div>
              <img 
                ref={imageRef}
                src={activeData.image} 
                alt={activeData.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col space-y-12 pb-24">
            
            {/* Header & Desc */}
            <div>
              <h2 className="font-sans font-[800] text-navy text-[clamp(32px,3.5vw,48px)] leading-[1.1] tracking-tight mb-6">
                {activeData.title}
              </h2>
              <p className="font-sans text-steel text-[16px] lg:text-[18px] leading-[1.8] font-medium">
                {activeData.desc}
              </p>
            </div>
            
            {/* Stats (if available) */}
            {activeData.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-l-[3px] border-electric/30 pl-6 py-2">
                {activeData.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-sans font-[800] text-navy text-2xl md:text-3xl mb-2">{stat.value}</div>
                    <div className="font-mono text-steel text-[10px] uppercase tracking-widest font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Sub-sections Grid */}
            <div className="grid grid-cols-1 gap-8">
              {activeData.sections.map((section, sIdx) => (
                <div key={sIdx} className="bg-white rounded-[1.5rem] p-8 border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-mono text-electric text-[12px] uppercase tracking-[0.15em] font-semibold mb-6 pb-4 border-b border-navy/5">
                    // {section.heading}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start space-x-3">
                        <CheckCircle2 size={18} className="text-electric flex-shrink-0 mt-1 opacity-80" />
                        <span className="font-sans font-medium text-navy/90 text-[15px] leading-relaxed tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-white/50 backdrop-blur-md border border-electric/20 rounded-2xl p-6 md:p-8 flex items-start space-x-4 shadow-[0_10px_40px_rgba(0,163,224,0.05)]">
              <CornerDownRight size={24} className="text-electric flex-shrink-0 mt-1" />
              <p className="font-serif italic text-navy text-[18px] md:text-[22px] leading-[1.4] font-medium">
                {activeData.highlight}
              </p>
            </div>
          </div>
          
        </div>
      </section>

    </main>
  );
};

export default Solutions;
