import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import WhatsAppFloat from './components/WhatsAppFloat';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import SolutionsGrid from './components/SolutionsGrid';
import EditorialBreak from './components/EditorialBreak';
import FeaturedProducts from './components/FeaturedProducts';
import Industries from './components/Industries';
import StatsDeepDive from './components/StatsDeepDive';
import ClientLogos from './components/ClientLogos';
import LatestInsights from './components/LatestInsights';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative w-full min-h-screen bg-navy text-text-light font-sans selection:bg-electric selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <SolutionsGrid />
        <EditorialBreak />
        <FeaturedProducts />
        <Industries />
        <StatsDeepDive />
        <ClientLogos />
        <LatestInsights />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
