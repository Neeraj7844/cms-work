import React from "react";
import "../styles/blog.css";

const BlogSection = () => {
  return (
    <section className="blog-section">

      {/* TAG */}
      <div className="blog-tag">
        Our Blog
      </div>

      {/* HEADING */}
      <h2>
        Latest News & Articles
      </h2>

      {/* DESCRIPTION */}
      <p className="blog-desc">
        Follow our latest news and thoughts which focuses exclusively
        on design, art, vintage, and also work updates.
      </p>

      {/* BLOG CARDS */}

      <div className="blog-cards">

        {/* CARD 1 */}

        <div className="blog-card">

          {/* IMAGE */}
          <div className="blog-image blog-img-1">
            {/* IMAGE YAHAN ADD KRNA */}
          </div>

          {/* CONTENT */}
          <div className="blog-content">

            <div className="blog-category blue">
              Brand Identity
            </div>

            <div className="blog-date">
              📅 August 25, 2025
            </div>

            <h3>
              How to Build a
              Memorable Brand
              Identity Online.
            </h3>

            <button className="blog-btn blue-btn">
              »
            </button>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="blog-card">

          <div className="blog-image blog-img-2">
            {/* IMAGE YAHAN ADD KRNA */}
          </div>

          <div className="blog-content">

            <div className="blog-category pink">
              Design, Digital
            </div>

            <div className="blog-date">
              📅 August 21, 2025
            </div>

            <h3>
              The Power of User-
              Centric Thinking
              in Modern Design
            </h3>

            <button className="blog-btn pink-btn">
              »
            </button>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="blog-card third-card">

          <div className="blog-image blog-img-3">
            {/* IMAGE YAHAN ADD KRNA */}
          </div>

          <div className="blog-content">

            <div className="blog-category green">
              Digital, Marketing
            </div>

            <div className="blog-date">
              📅 May 26, 2021
            </div>

            <h3>
              How to be more
              productive usgin
              sticky notes.
            </h3>

            <button className="blog-btn green-btn">
              »
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BlogSection;