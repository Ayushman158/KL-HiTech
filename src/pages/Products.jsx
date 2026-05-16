import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CheckCircle2, CornerDownRight, Watch, ArrowRight, Fingerprint } from 'lucide-react';
import ServiceHero from '../components/ServiceHero';

// Images
import imgBanking from '../assets/banking_cards_3d.png';
import imgWearables from '../assets/rfid_wearables_3d.png';
import imgBiometric from '../assets/biometric_cards_3d.png';

const productsData = [
  {
    id: 'banking',
    label: 'Banking Cards',
    title: "A card is your brand's most carried asset.",
    image: imgBanking,
    desc: "Certified by Visa, Mastercard, and RuPay since 2015, KL HI-TECH is one of India's leading banking card manufacturers. We offer the full spectrum of card types from standard EMV to premium metal and sustainable recycled PVC with complete personalisation and fulfilment capabilities under one roof.",
    stats: [
      { value: '80M+', label: 'Laminated cards manufactured' },
      { value: '50M+', label: 'Banking cards produced' },
      { value: '25M+', label: 'EMV cards personalised' },
      { value: '2 Lakh+', label: 'Cards personalised & dispatched per day' }
    ],
    sections: [
      {
        heading: 'Standard Payment Cards',
        items: ['EMV Chip Cards', 'Dual-Interface Cards', 'Contactless Cards', 'National Common Mobility Cards (NCMC)', 'QR Code Cards', 'PAN Cards']
      },
      {
        heading: 'Premium & Sustainable Cards',
        items: ['Full Metal Cards', 'Hybrid Metal Cards', 'Metal & Diamond Cards', 'Recycled PVC Cards', 'Biodegradable Cards', 'PETG / Recycled PETG Cards']
      },
      {
        heading: 'Speciality Cards',
        items: ['Biometric Cards', 'Transparent & Translucent Cards', 'Hololam Cards', 'Shell Cards', 'Spot Varnish & UV Print Cards', 'Gift & Loyalty Cards']
      },
      {
        heading: 'Personalisation & Fulfilment',
        items: ['Drop-on-Demand (DOD) Edge-to-Edge', 'Thermal & Inkjet Personalisation', 'EMV Key Management & Cryptography', 'Automated Mailing & Reporting']
      }
    ],
    highlight: 'Only company in India to personalise and dispatch over 1 million EMV Photo Cards in 6 weeks.',
    processFlow: ['Concept', 'Design', 'Production', 'Personalisation', 'Testing', 'Dispatch', 'Delivery']
  },
  {
    id: 'rfid',
    label: 'RFID & Payment Wearables',
    title: 'The future of payment is contactless.',
    image: imgWearables,
    desc: "From enterprise RFID inlays and tags to payment wearables that tap like a card KL HI-TECH's RFID product range is built for institutions that need proven, certified hardware at scale. Our RFID manufacturing is backed by the same quality and security discipline as our card operations.",
    sections: [
      {
        heading: 'RFID Products',
        items: ['Dry & Wet Inlays', 'Apparel Tags', 'Track & Trace Labels', 'Asset & Inventory Management Tags', 'Toll Booth Tags', 'RFID Lottery Tickets']
      },
      {
        heading: 'RFID Applications',
        items: ['Supply Chain & Inventory Management', 'Retail & Warehouse Automation', 'Aviation Baggage Tracking', 'Healthcare Asset Management', 'Logistics & Transportation', 'Pharma Track & Trace']
      }
    ],
    highlight: 'Wearable payments. Zero battery. Tap and go.',
    telmos: {
      title: 'TELMOS — Payment Wearables',
      desc: "TELMOS is KL HI-TECH's payment wearable product line enabling seamless contactless payments by tapping the wearable to any standard contactless payment terminal. Available in multiple sizes and designs, TELMOS can also function as a transport card, electronic access key, or loyalty card.",
      features: ['No battery required — passive technology', 'Compatible with all standard contactless payment terminals', 'Available across price segments', 'Multi-function: payment, transport, access, loyalty', 'Water-resistant and temperature-stable', 'Available in ring, band, and accessory formats']
    }
  },
  {
    id: 'biometric',
    label: 'Biometric Cards',
    title: 'Your fingerprint is your PIN.',
    image: imgBiometric,
    desc: "Biometric card technology represents the next generation of secure payment and identity verification combining the convenience of a physical card with the security of on-card fingerprint authentication. KL HI-TECH manufactures biometric cards in partnership with specialist technology vendors, bringing this capability to institutions ready to lead the market.",
    sections: [
      {
        heading: 'What Biometric Cards Enable',
        items: ['Fingerprint-authenticated payment transactions — no PIN required', 'Enhanced identity verification for high-value and high-security transactions', 'Secure access control for enterprise and government environments', 'A technology-forward card proposition for institutions positioning for the next decade']
      },
      {
        heading: 'Why KL HI-TECH',
        items: ['Certified EMV manufacturer — Visa, Mastercard & RuPay', 'End-to-end manufacturing and personalisation capability', 'Partnership with specialist biometric technology vendors', 'Proven data security infrastructure for sensitive biometric processing']
      }
    ],
    highlight: 'The most secure card in circulation; fingerprint authenticated, on-card stored, no PIN required.',
    techSpecs: [
      'On-card fingerprint sensor — biometric data stored on card, not on servers',
      'Compatible with existing EMV payment terminal infrastructure',
      'ISO 7816 standard form factor — contact and contactless interface',
      'Certified manufacturing under Visa, Mastercard & RuPay standards'
    ]
  }
];

const Products = () => {
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

  const activeData = productsData[activeTab];

  return (
    <main ref={containerRef} className="bg-offwhite min-h-screen overflow-x-hidden font-sans text-text-dark">
      
      <ServiceHero 
        tags={['BANKING CARDS', 'RFID & WEARABLES', 'BIOMETRIC CARDS']}
        title="Security-critical products, engineered for"
        titleHighlight="institutions."
        ctaText="Request a Consultation"
      />



      {/* Tabs Interface */}
      <section className="pt-12 pb-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        
        {/* Tab Headers */}
        <div className="flex overflow-x-auto hide-scrollbar border-b border-navy/10 mb-16 relative z-20 bg-offwhite/80 backdrop-blur-md sticky top-[72px] lg:top-[88px] pt-4">
          <div className="flex w-full md:justify-center px-2 gap-12 min-w-max md:min-w-0">
            {productsData.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`tab-anim relative pb-6 px-4 font-mono text-[12px] lg:text-[13px] uppercase tracking-widest font-semibold whitespace-nowrap transition-colors duration-300 ${activeTab === idx ? 'text-electric' : 'text-steel hover:text-navy'}`}
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
              <div className="grid grid-cols-2 gap-8 border-l-[3px] border-electric/30 pl-6 py-2">
                {activeData.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-sans font-[800] text-navy text-2xl md:text-3xl mb-2">{stat.value}</div>
                    <div className="font-mono text-steel text-[10px] uppercase tracking-widest font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Process Flow Strip for Banking Cards */}
            {activeData.processFlow && (
              <div className="bg-white rounded-2xl p-6 border border-navy/5 shadow-sm">
                <h3 className="font-mono text-electric text-[11px] uppercase tracking-[0.15em] font-semibold mb-6">
                  // End-to-End Workflow
                </h3>
                <div className="flex flex-wrap gap-2 items-center">
                  {activeData.processFlow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span className="font-sans font-semibold text-[13px] text-navy bg-offwhite px-3 py-1.5 rounded-md border border-navy/5">{step}</span>
                      {idx < activeData.processFlow.length - 1 && <ArrowRight size={14} className="text-steel" />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-sections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {activeData.sections.map((section, sIdx) => (
                <div key={sIdx} className="bg-white rounded-[1.5rem] p-8 border border-navy/5 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-mono text-electric text-[12px] uppercase tracking-[0.15em] font-semibold mb-6 pb-4 border-b border-navy/5">
                    // {section.heading}
                  </h3>
                  <div className="flex flex-col gap-y-4">
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

            {/* Telmos Callout */}
            {activeData.telmos && (
              <div className="bg-navy rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-electric/30 blur-3xl rounded-full"></div>
                <div className="relative z-10">
                  <Watch size={40} className="text-electric mb-6" />
                  <h3 className="font-sans font-[800] text-3xl mb-4">{activeData.telmos.title}</h3>
                  <p className="font-sans text-white/80 leading-relaxed mb-8">{activeData.telmos.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeData.telmos.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric mt-2 flex-shrink-0"></div>
                        <span className="font-sans text-[14px] text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Biometric Tech Specs */}
            {activeData.techSpecs && (
              <div className="bg-white rounded-2xl p-8 border border-navy/5 shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <Fingerprint size={28} className="text-electric" />
                  <h3 className="font-mono text-navy text-[13px] uppercase tracking-[0.15em] font-semibold">
                    Technical Overview
                  </h3>
                </div>
                <div className="flex flex-col gap-y-4">
                  {activeData.techSpecs.map((spec, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 size={18} className="text-electric flex-shrink-0 mt-0.5 opacity-80" />
                      <span className="font-sans font-medium text-navy/90 text-[14px] leading-relaxed">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

export default Products;
