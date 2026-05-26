import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import ServicesSection from "../components/ServicesSection";
import Journey from "../components/Journey";
import PortfolioSection from "../components/PortfolioSection";
import AchievementSection from "../components/AchievementSection";
 import ProgressSection from "../components/ProgressSection";
  import Testimonial from "../components/Testimonial";
 import Footer from "../components/Footer";

const Home = () => {
  return (
    <>

      <Navbar />

      <Hero />

      <FeatureSection />
    
      <AchievementSection />
      <ServicesSection />

      <Journey />

      <PortfolioSection />

       <ProgressSection />

     <Testimonial />

      <Footer /> 

    </>
  );
};

export default Home;