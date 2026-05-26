import React from "react";
import "../styles/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP BOX */}
      <div className="footer-top-box">

        <div className="footer-top-left">
          <h1>Let’s Elevate Your Digital Presence</h1>

          <p>
            Ready to enhance your online visibility and engage your target audience?
            <br />
            Get in touch with us today for a consultation.
          </p>
        </div>

        <button className="footer-start-btn">
          Get Started
        </button>

      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">

        {/* LOGO SECTION */}
        <div className="footer-col footer-logo-col">

          <div className="footer-logo">
            <div className="logo-circle"></div>

            <div>
              <h2>Design U Crave</h2>
              <span>Technologies</span>
            </div>
          </div>

          <p>
            Design U Crave Technologies creates
            impactful digital solutions across
            design, web, and marketing.
          </p>

          <p>
            We help brands stand out and
            connect meaningfully with their
            audience.
          </p>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>

        </div>

        {/* SERVICES */}
        <div className="footer-col">

          <h3>Services</h3>

          <ul>
            <li>Website Design & Devlopment</li>
            <li>App Design & Devlopment</li>
            <li>SEO</li>
            <li>Social Media Marketing</li>
            <li>Software Development</li>
            <li>Brand Design</li>
          </ul>

        </div>

        {/* COMMUNITY */}
        <div className="footer-col">

          <h3>Community</h3>

          <ul>
            <li>Terms & Conditions</li>
            <li>Our Policy</li>
            <li>Careers</li>
          </ul>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">

        <p>
          © 2026 design U Crave Technologies. All rights reserved.
        </p>

        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Cookie Policy</span>
        </div>

      </div>

     
    </footer>
  );
};

export default Footer;