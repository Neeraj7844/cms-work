import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/DigitalMarketingBlog.css";

const DigitalMarketingBlog = () => {

return (

<>

<Navbar />

{/* HERO */}

<section className="marketing-blog">

<div className="marketing-overlay">

<div className="marketing-content">

<h1>
HOW TO BE MORE PRODUCTIVE USING STICKY NOTES
</h1>

</div>

</div>

</section>

{/* DETAILS */}

<section className="marketing-details-section">

<div className="marketing-details-container">

{/* LEFT */}

<div className="marketing-left">

<div className="marketing-main-image">

<img
src="/digital-marketing-main.jpg"
alt=""
/>

</div>

<div className="marketing-meta">

<div className="meta-item">

<span className="meta-icon">
⏰
</span>

<span>
MAY 26, 2021
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
DIGITAL, MARKETING
</span>

</div>

</div>

<div className="marketing-line"></div>

<div className="marketing-text">

<p>
Sticky notes may look simple,
but they are one of the most effective productivity tools
used by students, marketers,
designers, and entrepreneurs worldwide.
</p>

<p>
They help organize ideas,
improve planning,
boost focus,
and simplify task management.
</p>

<div className="marketing-extra-content">

<h2>
WHY STICKY NOTES IMPROVE PRODUCTIVITY
</h2>

<ul>

<li>
Visual reminders improve task completion.
</li>

<li>
Helps organize priorities effectively.
</li>

<li>
Improves workflow management.
</li>

<li>
Boosts creativity and focus.
</li>

</ul>

<h2>
BEST WAYS TO USE STICKY NOTES
</h2>

<ol>

<li>
Write one task per note.
</li>

<li>
Use color coding for priorities.
</li>

<li>
Place notes where they remain visible.
</li>

<li>
Remove completed tasks for motivation.
</li>

</ol>

<h2>
DIGITAL PRODUCTIVITY TIPS
</h2>

<ul>

<li>
Combine physical and digital notes.
</li>

<li>
Create structured daily goals.
</li>

<li>
Review tasks regularly.
</li>

<li>
Track progress consistently.
</li>

</ul>

<h2>
FINAL THOUGHTS
</h2>

<p>
Small productivity habits create powerful long-term results.
Sticky notes remain one of the simplest
yet most effective planning systems.
</p>

</div>

</div>

</div>

{/* SIDEBAR */}

<div className="marketing-sidebar">

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

export default DigitalMarketingBlog;