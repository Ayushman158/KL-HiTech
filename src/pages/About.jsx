import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Globe, Users, ShieldCheck, Award, Link as LinkIcon, FileText, Smartphone, ArrowRight, Calendar, Heart, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const timelineWrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animations
      gsap.from('.animate-on-load', {
        y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power3.out'
      });

      // Scroll Animations for sections
      gsap.utils.toArray('.scroll-fade-up').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Horizontal Scroll for Timeline
      if (timelineRef.current && timelineWrapperRef.current) {
        const wrapperWidth = timelineWrapperRef.current.offsetWidth;
        const timelineWidth = timelineRef.current.scrollWidth;
        
        if (timelineWidth > wrapperWidth) {
          gsap.to(timelineRef.current, {
            x: -(timelineWidth - wrapperWidth),
            ease: 'none',
            scrollTrigger: {
              trigger: timelineWrapperRef.current,
              start: 'top center',
              end: () => `+=${timelineWidth - wrapperWidth}`,
              scrub: 1,
              pin: true,
            }
          });
        }
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '35+', label: 'Years of precision manufacturing' },
    { value: '500+', label: 'Clients across banking, government & telecom' },
    { value: '52+', label: 'Countries served globally' },
    { value: '80M+', label: 'Laminated cards manufactured' }
  ];

  const capabilities = [
    {
      title: 'Payment & Identity Cards',
      icon: <ShieldCheck size={32} className="text-electric mb-6" />,
      desc: 'EMV chip cards, dual-interface cards, biometric cards, metal cards, NCMC cards, PAN cards, and gift & loyalty cards manufactured and personalised to the highest global scheme standards.'
    },
    {
      title: 'Secure Documents',
      icon: <FileText size={32} className="text-electric mb-6" />,
      desc: 'Aadhaar cards, Voter IDs, passports, ration cards, driving licences, ballot papers, government certificates, and examination documents produced for state and central government institutions across India and internationally.'
    },
    {
      title: 'RFID & Connectivity',
      icon: <Smartphone size={32} className="text-electric mb-6" />,
      desc: 'RFID tags, inlays, labels, SIM cards, eSIMs, and payment wearables manufactured for telecom operators, logistics providers, aviation, retail, and healthcare institutions.'
    }
  ];

  const certifications = [
    'ISO 9001:2015 — Quality Management',
    'ISO 27001:2022 — Information Security Management',
    'ISO 14001:2015 — Environmental Management',
    'ISO 45001:2018 — Occupational Health & Safety',
    'ISO 20000-1:2018 — IT Service Management',
    'ISO 14298:2021 (Intergraf) — Security Printing',
    'Certified by Visa, Mastercard & RuPay — since 2015',
    'GSMA SAS — SIM Manufacturing',
    'RBI Empanelled — MICR Cheque Printing',
    'NCMC Debit Card Scheme — Government of India'
  ];

  const timeline = [
    { year: '1988', text: 'Founded. Empanelled by RBI for MICR cheque printing' },
    { year: '1994', text: 'Commenced lottery printing' },
    { year: '2002', text: 'Printed the world\'s largest ballot paper' },
    { year: '2006', text: 'MICR cheques for Sri Lanka People\'s Bank — first international mandate' },
    { year: '2013', text: 'Aadhaar card production begins for UIDAI' },
    { year: '2015', text: 'Certified by Visa, Mastercard & RuPay. Plastic card manufacturing begins' },
    { year: '2018', text: 'PVC Aadhaar Cards, Health SMART Cards, Ration Cards' },
    { year: '2022', text: 'RFID Wearable Payments launched' },
    { year: '2023', text: 'eSIM and SIM Push Software vertical launched' },
    { year: '2024', text: 'Noida manufacturing facility commissioned' }
  ];

  return (
    <main ref={containerRef} className="bg-offwhite min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative bg-navy text-white pt-40 pb-32 px-6 lg:px-12 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]">
        {/* Abstract Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full mix-blend-screen opacity-[0.15] pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 50%, #00A3E0, transparent)' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="animate-on-load font-mono text-[11px] lg:text-[13px] text-electric uppercase tracking-[0.2em] font-semibold mb-8 flex flex-wrap gap-4 opacity-90">
            <span>SINCE 1988</span>
            <span className="text-white/30">•</span>
            <span>500+ CLIENTS</span>
            <span className="text-white/30">•</span>
            <span>52+ COUNTRIES</span>
            <span className="text-white/30">•</span>
            <span>RANKED 26TH GLOBALLY</span>
          </div>
          
          <h1 className="animate-on-load font-sans font-[800] text-[clamp(40px,5vw,72px)] leading-[1.1] tracking-tight mb-8 max-w-5xl">
            Empowering Banks.<br/>
            Enabling Governments.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-white italic font-serif">Securing Identities.</span>
          </h1>
          
          <p className="animate-on-load text-text-muted font-medium text-[18px] lg:text-[22px] leading-[1.6] max-w-3xl mb-12">
            KL HI-TECH manufactures and personalises security-critical products that power the systems institutions depend on. From the cards in millions of wallets, to the documents that define citizenship, to the infrastructure that keeps modern payment networks running.
          </p>
          
          <div className="animate-on-load flex flex-wrap gap-6">
            <Link to="/solutions" className="group flex items-center justify-center bg-electric text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white hover:text-navy transition-all duration-300">
              Explore Our Solutions
              <ChevronRight size={18} className="translate-x-2 group-hover:translate-x-4 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="group flex items-center justify-center bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-sans font-[600] text-[15px] hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
              View Global Presence
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are & Stats */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 scroll-fade-up">
          <div>
            <h2 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-6">
              // Who We Are
            </h2>
            <h3 className="font-sans font-[800] text-navy text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-tight mb-8">
              A globally recognised manufacturing authority.
            </h3>
          </div>
          <div className="space-y-6 text-steel font-medium text-[16px] lg:text-[18px] leading-[1.8]">
            <p>
              KL HI-TECH Secure Print Limited is one of India's most trusted manufacturers of smart cards, banking cards, secure documents, and RFID products. Founded in 1988, we have grown from a pioneering security printer into a globally recognised manufacturing authority, ranked 26th in the world by the Nilson Report (2024) and 11th in high-security document printing globally.
            </p>
            <p>
              Our manufacturing facility in Hyderabad spans 125,000 square feet and is staffed by a team of 250+ specialists. We operate personalisation centres in Hyderabad and Noida, supported by regional offices across Mumbai, Delhi, Bengaluru, Chennai, Kolkata, and Lucknow.
            </p>
            <p>
              We serve banks, governments, telecom operators, and enterprises across 52+ countries across Southeast Asia, the Middle East, Africa, and beyond.
            </p>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 scroll-fade-up border-t border-navy/10 pt-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-sans font-[800] text-[clamp(36px,4vw,56px)] text-navy mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="font-sans text-steel font-medium text-[14px] leading-relaxed uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white px-6 lg:px-12 border-y border-navy/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-up">
            <h2 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-6">
              // What We Manufacture
            </h2>
            <p className="font-serif italic text-navy text-[clamp(24px,3vw,32px)] leading-[1.4]">
              Our capabilities span the full lifecycle of secure product manufacturing from raw material sourcing and card production to data personalisation, quality certification, and end-mile delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="bg-offwhite rounded-[2rem] p-10 border border-navy/5 hover:border-electric/30 transition-colors duration-500 scroll-fade-up group">
                <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 origin-left">
                  {cap.icon}
                </div>
                <h3 className="font-sans font-[800] text-navy text-2xl mb-4 tracking-tight">{cap.title}</h3>
                <p className="font-sans text-steel text-[15px] leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto scroll-fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-6">
              // Compliance
            </h2>
            <h3 className="font-sans font-[800] text-navy text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-tight mb-8">
              Certified. Compliant.<br/>Trusted.
            </h3>
            <p className="font-sans text-steel font-medium text-[16px] lg:text-[18px] leading-[1.8]">
              Our certifications are not credentials we display they are the standards we operate to, every day, across every product line.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center space-x-4 bg-white p-6 rounded-2xl border border-navy/10 shadow-sm hover:shadow-md transition-shadow">
                  <Award size={20} className="text-electric flex-shrink-0" />
                  <span className="font-sans font-semibold text-navy text-[14px] leading-snug">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 scroll-fade-up">
          <h2 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-6">
            // Milestones
          </h2>
          <h3 className="font-sans font-[800] text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-tight mb-8 max-w-3xl">
            A Legacy Built on Precision
          </h3>
          <p className="font-sans text-text-muted font-medium text-[16px] lg:text-[18px] leading-[1.8] max-w-3xl">
            From MICR cheque printing for Indian banks in our earliest years, to Aadhaar card production for the world's largest biometric identity programme, to launching payment wearables and eSIM technology, KL HI-TECH has consistently moved ahead of the curve without compromising on the security and precision that institutions require.
          </p>
        </div>

        <div ref={timelineWrapperRef} className="w-full overflow-hidden h-[400px] flex items-center relative pl-6 lg:pl-12">
           <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 -translate-y-1/2 z-0"></div>
           <div ref={timelineRef} className="flex gap-16 relative z-10 whitespace-nowrap pl-6 lg:pl-12 pr-[50vw]">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex flex-col justify-center min-w-[300px] max-w-[300px] whitespace-normal group">
                  <div className="mb-8 relative">
                    <div className="w-4 h-4 bg-navy border-2 border-electric rounded-full mx-auto relative z-10 group-hover:bg-electric transition-colors duration-300 shadow-[0_0_15px_rgba(0,163,224,0)] group-hover:shadow-[0_0_15px_rgba(0,163,224,0.5)]"></div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-mono text-electric text-[24px] font-bold mb-4">{item.year}</h4>
                    <p className="font-sans text-white/80 text-[15px] leading-relaxed group-hover:text-white transition-colors">{item.text}</p>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Leadership & Values */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-24 scroll-fade-up">
          <h2 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-12 text-center">
            // The Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-10 md:p-12 rounded-[2rem] border border-navy/10 shadow-[0_20px_60px_rgba(1,33,105,0.03)] hover:shadow-[0_30px_80px_rgba(1,33,105,0.06)] transition-all">
              <h3 className="font-sans font-[800] text-navy text-2xl mb-2">P. Srinivas Rao</h3>
              <p className="font-sans text-electric font-semibold text-[14px] uppercase tracking-wide mb-8">Chairman & CEO</p>
              <p className="font-sans text-steel leading-relaxed text-[15px]">
                Over three and a half decades, Mr. P. Srinivas Rao has built KL HI-TECH into one of the world's most trusted names in secure manufacturing. His approach has been consistent: invest in world-class machinery, develop specialist expertise, and pursue certifications that meet the most demanding global standards. Under his leadership, KL HI-TECH has earned mandates from governments, central banks, and multinational financial institutions.
              </p>
            </div>
            <div className="bg-white p-10 md:p-12 rounded-[2rem] border border-navy/10 shadow-[0_20px_60px_rgba(1,33,105,0.03)] hover:shadow-[0_30px_80px_rgba(1,33,105,0.06)] transition-all">
              <h3 className="font-sans font-[800] text-navy text-2xl mb-2">K. Rama Lakshmi</h3>
              <p className="font-sans text-electric font-semibold text-[14px] uppercase tracking-wide mb-8">Managing Director</p>
              <p className="font-sans text-steel leading-relaxed text-[15px]">
                As Co-founder and Managing Director, Ms. K. Rama Lakshmi leads Operations, Human Resources, and Environmental Sustainability. Her management discipline has been central to KL HI-TECH's ability to meet demanding institutional timelines without compromise a track record of zero missed deadlines across more than three decades of operations.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="bg-navy rounded-[3rem] p-12 lg:p-20 text-white scroll-fade-up relative overflow-hidden">
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-electric/20 blur-[100px] pointer-events-none"></div>
          
          <div className="mb-16 relative z-10">
            <h3 className="font-mono text-electric text-[13px] uppercase tracking-[0.15em] font-semibold mb-6">Our Vision</h3>
            <p className="font-serif italic text-[clamp(24px,3vw,36px)] leading-[1.4] max-w-4xl">
              "To be the world's most trusted partner for secure manufacturing, delivering precision, compliance, and innovation to the institutions that power economies and governments."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 border-t border-white/10 pt-16">
            <div>
              <Zap size={28} className="text-electric mb-6" />
              <h4 className="font-sans font-bold text-xl mb-4">Reliability</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">Every mandate, every deadline, every time.</p>
            </div>
            <div>
              <ShieldCheck size={28} className="text-electric mb-6" />
              <h4 className="font-sans font-bold text-xl mb-4">Trust</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">Built through certifications, compliance, and consistency.</p>
            </div>
            <div>
              <Target size={28} className="text-electric mb-6" />
              <h4 className="font-sans font-bold text-xl mb-4">Innovation</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">From MICR to biometrics to wearable payments.</p>
            </div>
            <div>
              <Heart size={28} className="text-electric mb-6" />
              <h4 className="font-sans font-bold text-xl mb-4">Commitment</h4>
              <p className="text-white/70 text-[15px] leading-relaxed">To clients, to quality, and to security.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default About;
