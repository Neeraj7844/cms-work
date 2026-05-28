// user/src/components/DesignDigitalBlog.jsx

import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/DesignDigitalBlog.css";

const DesignDigitalBlog = () => {

  return (

    <>

      <Navbar />

      {/* HERO SECTION */}

      <section className="design-blog">

        <div className="design-overlay">

          <div className="design-content">

            <h1>
              THE POWER OF USER-CENTRIC THINKING IN MODERN DESIGN
            </h1>

          </div>

        </div>

      </section>
    {/* BLOG DETAILS */}

<section className="design-details-section">

<div className="design-details-container">

{/* LEFT SIDE */}

<div className="design-left">

{/* IMAGE */}

<div className="design-main-image">

<img
src="/design-digital-main.jpg"
alt=""
/>

</div>

{/* META */}

<div className="design-meta">

<div className="meta-item">

<span className="meta-icon">
⏰
</span>

<span>
AUGUST 21, 2025
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
DESIGN DIGITAL
</span>

</div>

</div>

{/* LINE */}

<div className="design-line"></div>

{/* CONTENT */}

<div className="design-text">

<p>
In today’s fast-evolving digital landscape,
successful designs are no longer just about aesthetics
or innovative features—they are fundamentally about
the people who use them.
User-centric thinking places the user’s needs,
behaviors, and experiences at the heart of the design process,
ensuring digital products are both intuitive and impactful.
</p>

<p>
This approach is driving the future of design
in 2025 and beyond
<span> Duck.design</span>
</p>

{/* SECTION */}

<div className="design-extra-content">

<h2>
WHAT IS USER-CENTRIC THINKING?
</h2>

<p>
User-centric thinking focuses on understanding
and prioritizing the user’s perspective throughout
design and development.
This means gathering real user feedback,
empathizing with their pain points,
and iterating solutions that truly solve problems.
</p>

<p>
Instead of designing for assumptions,
modern businesses now design for real human behavior.
This creates products that feel natural,
easy to use, and emotionally engaging.
</p>

<ul>

<li>
Focus on real user needs.
</li>

<li>
Improve usability and accessibility.
</li>

<li>
Create meaningful experiences.
</li>

</ul>

<p>
👉 <span>NNGroup’s UX research</span>
shows that user-focused interfaces
increase satisfaction and retention.
</p>

<h2>
WHY USER-CENTRIC DESIGN MATTERS
</h2>

<p>
People today expect seamless digital experiences.
Whether it’s a website, mobile app,
or software platform, users quickly abandon
products that are confusing or frustrating.
</p>

<p>
Brands that invest in user-centric thinking
gain higher engagement, stronger trust,
and better customer loyalty.
</p>

<ul>

<li>
Enhances customer satisfaction.
</li>

<li>
Builds stronger emotional connection.
</li>

<li>
Boosts conversions and retention.
</li>

</ul>

<p>
👉 <span>Spotify’s personalized UX</span>
is a perfect example of designing
around user preferences and habits.
</p>

</div>

</div>

</div>

{/* SIDEBAR */}

<div className="design-sidebar">

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
How to be more productive usgin sticky notes.
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

      <Footer />

    </>

  );

};

export default DesignDigitalBlog;