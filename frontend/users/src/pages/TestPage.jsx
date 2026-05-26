import React from "react";
import "../styles/TestPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestPage = () => {
  return (
    <>
     <Navbar />
    <div className="test-page">

      {/* HERO SECTION */}
      <section className="test-hero">

        {/* BIG BACKGROUND TEXT */}
        <h1 className="bg-text">DESIGN U CRAVE</h1>

        {/* CENTER CONTENT */}
        <div className="hero-content">
          <h2>TEST PAGE</h2>
          <div className="hero-dot"></div>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="test-content">
        <p>Hello This Is My Test Page</p>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default TestPage;