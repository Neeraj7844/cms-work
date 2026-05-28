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
import Neab from "../components/Neab";
import BlogSection from "../components/BlogSection";
const Home = () => {
  return (
    <>

      <Navbar />

      <Hero />

      <FeatureSection />
      <Neab/>
      <AchievementSection />
      <ServicesSection />

      <Journey />

      <PortfolioSection />

       <ProgressSection />

     <Testimonial />
    <BlogSection/>
      <Footer /> 

    </>
  );
};

export default Home;