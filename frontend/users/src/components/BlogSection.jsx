import React,{
useEffect,
useState
} from "react";

import axios from "axios";

import "../styles/blog.css";

const BlogSection = () => {

const [blogData,setBlogData]=
useState({

heading:"",
paragraph:"",
blogs:[]

});

useEffect(()=>{

fetchBlogs();

},[]);

const fetchBlogs=
async()=>{

try{

const res=
await axios.get(
"https://cms-work.onrender.com/api/blog"
);

if(res.data){

setBlogData(res.data);

}

}catch(error){

console.log(error);

}

};

/* BRAND PAGE */

const openBrandPage=()=>{

window.open(
"/brand-identity-blog",
"_blank"
);

};

/* DESIGN PAGE */

const openDesignPage=()=>{

window.open(
"/design-digital-blog",
"_blank"
);

};

/* MARKETING PAGE */

const openMarketingPage=()=>{

window.open(
"/digital-marketing-blog",
"_blank"
);

};

return (

<section className="blog-section">

<div className="blog-tag">
Our Blog
</div>

<h2>

{
blogData.heading ||
"Latest News & Articles"
}

</h2>

<p className="blog-desc">

{
blogData.paragraph ||
"Follow our latest news and thoughts which focuses exclusively on design, art, vintage, and also work updates."
}

</p>

<div className="blog-cards">

{/* CARD 1 */}

<div className="blog-card">

<div className="blog-image">

<img
src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200"
alt=""
/>

</div>

<div className="blog-content">

<div className="blog-category blue">
Brand Identity
</div>

<div className="blog-date">
📅 May 28, 2026
</div>

<h3>
How to Build a
Memorable Brand
Identity Online.
</h3>

<button
className="blog-btn blue-btn"
onClick={openBrandPage}
>
»
</button>

</div>

</div>

{/* CARD 2 */}

<div className="blog-card">

<div className="blog-image">

<img
src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200"
alt=""
/>

</div>

<div className="blog-content">

<div className="blog-category pink">
Design, Digital
</div>

<div className="blog-date">
📅 May 28, 2026
</div>

<h3>
The Power of User-
Centric Thinking
in Modern Design
</h3>

<button
className="blog-btn pink-btn"
onClick={openDesignPage}
>
»
</button>

</div>

</div>

{/* CARD 3 */}

<div className="blog-card">

<div className="blog-image">

<img
src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200"
alt=""
/>

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
productive using
sticky notes.
</h3>

<button
className="blog-btn green-btn"
onClick={openMarketingPage}
>
»
</button>

</div>

</div>

</div>

</section>

);

};

export default BlogSection;