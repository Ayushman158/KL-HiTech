import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SolutionsGrid from '../components/SolutionsGrid';
import EditorialBreak from '../components/EditorialBreak';
import FeaturedProducts from '../components/FeaturedProducts';
import Industries from '../components/Industries';
import StatsDeepDive from '../components/StatsDeepDive';
import ClientLogos from '../components/ClientLogos';
import LatestInsights from '../components/LatestInsights';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
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
  );
};

export default Home;
