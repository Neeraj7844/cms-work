import React from "react";
import "../styles/homeAboutSection.css";

const HomeAboutSection = () => {
  return (
    <section className="about-home-section">

      {/* LEFT IMAGES */}
      <div className="about-home-images">

        <div className="top-img-box">
          <div className="img-placeholder top-img"></div>
        </div>

        <div className="bottom-img-box">
          <div className="img-placeholder bottom-img"></div>
        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div className="about-home-content">

        <div className="who-tag">
          Who We are
        </div>

        <h2>
          Design with Purpose, Strategy
          <br />
          with Impact
        </h2>

        <p className="about-text">
          We are a creative digital agency focused on designing modern,
          meaningful experiences. By blending strategy and design,
          we help brands grow, connect, and stay relevant in the digital space.
        </p>

        {/* BOXES */}
        <div className="about-boxes">

          <div className="about-small-box">
            <div className="small-icon green">🤝</div>

            <h4>User-Centric Thinking</h4>
          </div>

          <div className="about-small-box">
            <div className="small-icon orange">⏱️</div>

            <h4>Strategic Creativity</h4>
          </div>

          <div className="about-small-box">
            <div className="small-icon blue">🚀</div>

            <h4>End-to-End Delivery</h4>
          </div>

          <div className="about-small-box">
            <div className="small-icon purple">💬</div>

            <h4>Result-Driven Approach</h4>
          </div>

        </div>

        {/* BUTTON */}
        <button className="explore-btn">
          Explore More
        </button>

      </div>

    </section>
  );
};

export default HomeAboutSection;