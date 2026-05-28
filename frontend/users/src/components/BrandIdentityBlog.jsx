// user/src/pages/BrandIdentityBlog.jsx

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/BrandIdentityBlog.css";

const BrandIdentityBlog = () => {

  return (

    <>

      {/* NAVBAR */}

      <Navbar />

      {/* HERO SECTION */}

      <section className="brand-blog">

        <div className="brand-overlay">

          <div className="brand-content">

            <h1>
              HOW TO BUILD A MEMORABLE BRAND IDENTITY ONLINE.
            </h1>

          </div>

        </div>

      </section>

      {/* BLOG DETAILS */}

      <section className="brand-details-section">

        <div className="brand-details-container">

          {/* LEFT SIDE */}

          <div className="brand-left">

            {/* IMAGE */}

            <div className="brand-main-image">

              <img
                src="/brand-blog-main.jpg"
                alt=""
              />

            </div>

            {/* META */}

            <div className="brand-meta">

              <div className="meta-item">

                <span className="meta-icon">
                  ⏰
                </span>

                <span>
                  AUGUST 25, 2025
                </span>

              </div>

              <div className="meta-item">

                <span className="meta-icon">
                  👤
                </span>

                <span>
                  BY ADMIN
                </span>

              </div>

              <div className="meta-item">

                <span className="meta-icon">
                  🏷
                </span>

                <span>
                  BRAND IDENTITY
                </span>

              </div>

            </div>

            {/* LINE */}

            <div className="brand-line"></div>

            {/* TEXT */}

            <div className="brand-text">

              <p>
                In today’s fast-moving digital landscape,
                your brand isn’t just a logo or color palette—it’s
                a living story that connects hearts and minds.
                If you want your audience to remember you,
                you must craft a <b>brand identity</b> that feels
                authentic, consistent, and instantly recognizable.
              </p>

              <p>
                At <i>Design U Crave Technologies</i>,
                we believe great brands aren’t built by accident—they’re
                designed with intention.
              </p>

              <p>
                Here’s how you can start building
                a memorable identity online:
              </p>

              {/* EXTRA CONTENT */}

              <div className="brand-extra-content">

                <h2>
                  1. DEFINE YOUR BRAND CORE
                </h2>

                <p>
                  Before visuals, you need clarity. Ask:
                </p>

                <ul>

                  <li>
                    What are your <b>brand values?</b>
                  </li>

                  <li>
                    Who is your <b>target audience?</b>
                  </li>

                  <li>
                    What emotions should your brand evoke?
                  </li>

                </ul>

                <p>
                  Think of your brand like a person—what personality traits
                  would it have? Bold? Minimalist? Playful?
                </p>

                <p>
                  As <span>HubSpot explains in their brand identity guide</span>,
                  your values and mission statement lay the foundation
                  for everything else you create.
                </p>

                <h2>
                  2. CRAFT A CONSISTENT VISUAL IDENTITY
                </h2>

                <p>
                  Your logo, colors, and typography should flow seamlessly
                  across your <b>website, social profiles, and marketing campaigns.</b>
                  Brands like <b>Airbnb</b> or <b>Spotify</b> are recognized instantly
                  because of visual consistency.
                </p>

                <p>
                  👉 <span>Canva’s branding guide</span> highlights that consistent
                  fonts, color palettes, and imagery help audiences
                  recognize your brand at a glance.
                </p>

                <p>
                  <b>Pro Tip:</b> Use brand guidelines to maintain the same tone,
                  colors, and imagery everywhere.
                </p>

                <h2>
                  3. DEVELOP A UNIQUE VOICE & STORY
                </h2>

                <p>
                  Your <b>brand voice</b> shapes how people feel about you.
                  Whether you’re witty, conversational, or professional-use
                  this tone across Instagram captions, blog posts,
                  and even customer support.
                </p>

                <p>
                  Storytelling humanizes your brand. Share behind-the-scenes
                  moments, client success stories, and your
                  “why you started” narrative.
                </p>

                <p>
                  👉 <span>Glossier’s own blog, Into the Gloss</span>,
                  shows how a simple storytelling platform grew into
                  a globally recognized identity.
                </p>

              </div>

            </div>

          </div>

          {/* SIDEBAR */}

          <div className="brand-sidebar">

            {/* RECENT POSTS */}

            <div className="sidebar-box">

              <h3>
                RECENT POSTS
              </h3>

              <div className="green-line"></div>

              <ul>

                <li>
                  How to Build a Memorable Brand Identity Online.
                </li>

                <li>
                  The Power of User-Centric Thinking in Modern Design
                </li>

                <li>
                  How to be more productive using sticky notes.
                </li>

              </ul>

            </div>

            {/* CATEGORIES */}

            <div className="sidebar-box">

              <h3>
                CATEGORIES
              </h3>

              <div className="green-line"></div>

              <div className="category-item">

                <span>
                  Brand Identity
                </span>

                <button>
                  1
                </button>

              </div>

              <div className="category-item">

                <span>
                  Design
                </span>

                <button>
                  1
                </button>

              </div>

              <div className="category-item">

                <span>
                  Digital
                </span>

                <button>
                  2
                </button>

              </div>

              <div className="category-item">

                <span>
                  Marketing
                </span>

                <button>
                  1
                </button>

              </div>

            </div>

          </div>
            
        </div>
    
      </section>

      {/* FOOTER */}

      <Footer />

    </>

  );

};

export default BrandIdentityBlog;