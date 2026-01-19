
import React from 'react';
import Hero from '../components/home/Hero';
import Pillars from '../components/home/Pillars';
import WorkHighlights from '../components/home/WorkHighlights';
import ServicesSection from '../components/home/ServicesSection';
import Approach from '../components/home/Approach';
import AboutSection from '../components/home/AboutSection';
import CtaBand from '../components/home/CtaBand';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Pillars />
      <WorkHighlights />
      <ServicesSection />
      <Approach />
      <AboutSection />
      <CtaBand />
    </>
  );
};

export default HomePage;
