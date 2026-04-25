import React from 'react';
import HeroWebGL from '../components/HeroWebGL';
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
      <HeroWebGL />
      <AboutUs />
      <StatsDeepDive />
      <SolutionsGrid />
      <EditorialBreak />
      <FeaturedProducts />
      <Industries />
      <ClientLogos />
      <LatestInsights />
      <CTABanner />
    </main>
  );
};

export default Home;
