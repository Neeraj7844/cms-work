// About.jsx

import React from "react";
import "../styles/about.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>

      {/* HERO SECTION */}

      <Navbar />

      <section className="about-hero">

        <div className="about-overlay"></div>

        <div className="about-content">
          <h1>ABOUT US</h1>
        </div>

      </section>

      {/* ================= REASONS SECTION ================= */}

      <section className="reasons-section">

        <div className="reasons-container">

          {/* TOP */}

          <div className="reasons-top">

            <div className="reasons-left">

              <div className="green-shape"></div>

              <h2>
                THERE ARE MANY REASONS
                TO CHOICE US
              </h2>

            </div>

            <div className="reasons-right">

              <p>
                We blend creativity, strategy, and dependability
                to deliver design solutions that truly make an impact.
              </p>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="reasons-bottom">

            {/* IMAGE */}

            <div className="reasons-image">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="team"
              />

              <div className="image-side-text">
                CRAVING FOR EXCELLENCE
              </div>

            </div>

            {/* CONTENT */}

            <div className="reasons-content">

              <h3>We are here to serve you!</h3>

              <p>
                Established in 2018, Design U Crave Technologies
                is a Gurgaon, India based organization.
                We are a team of web developers, web designers,
                e-commerce experts, Content Writers and
                Social Media Marketers.
              </p>

              <p>
                A one-stop-shop for all your web needs,
                Design U Crave Technologies provides a fresh
                and youthful perspective towards designing
                the ideal website.
              </p>

              {/* SKILLS */}

              <div className="skill">

                <div className="skill-head">
                  <span>UI/UX DESIGN</span>
                  <span>70%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: "70%" }}
                  ></div>
                </div>

              </div>

              <div className="skill">

                <div className="skill-head">
                  <span>MARKETING</span>
                  <span>90%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: "90%" }}
                  ></div>
                </div>

              </div>

              <div className="skill">

                <div className="skill-head">
                  <span>WEB DEVELOPMENT</span>
                  <span>75%</span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= COUNTER SECTION ================= */}

      <section className="counter-section">

        <div className="counter-container">

          <div className="counter-box">

            <div className="counter-icon">
              📄
            </div>

            <h2>2.205</h2>

            <p>Completed Projects</p>

          </div>

          <div className="counter-box">

            <div className="counter-icon">
              👥
            </div>

            <h2>54+</h2>

            <p>Active Members</p>

          </div>

          <div className="counter-box">

            <div className="counter-icon">
              🏆
            </div>

            <h2>14+</h2>

            <p>Award Winning</p>

          </div>

          <div className="counter-box">

            <div className="counter-icon">
              🎖️
            </div>

            <h2>100%</h2>

            <p>Satisfaction Rate</p>

          </div>

        </div>

      </section>

{/* ================= MISSION SECTION ================= */}

<section className="mission-section">

  <div className="mission-container">

    {/* LEFT IMAGE */}

    <div className="mission-image">

      <div className="mission-image-border">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          alt="mission"
        />

      </div>

    </div>

    {/* RIGHT CONTENT */}

    <div className="mission-content">

      <h2>OUR MISSON</h2>

      <h3>
        “OUR COMPANY IS BUILT ON PEOPLE – THOSE WHO WORK
        FOR US, AND THOSE WE DO BUSINESS WITH”
      </h3>

      <p>
        We, at Design U Crave Technologies, behold the primary motive
        of providing premium technology services at affordable rates,
        to our clients. With the assistance of some of the best
        professionals in the field, we prize honesty and innovation
        to be our key standards.
      </p>

      <p>
        Further, our goal stands to help businesses operating on
        all parallels, whether it may be E-commerce, Retail,
        Wholesale joints or Healthcare.
  
        Our essential moral compass and elevated work culture are
        formed based on our key criteria towards building blocks
        of online superiority.
        With honesty and innovation, as our light,
        Design U Crave Technologies is designed
        to help businesses.
      </p>

    </div>

  </div>

</section>
   <Footer /> 
    </>
  );
};

export default About;