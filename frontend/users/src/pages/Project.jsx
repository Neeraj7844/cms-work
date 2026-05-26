import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

import "../styles/project.css";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const Project=()=>{

const [projectData,setProjectData]=useState({
portfolioHeading:"",
portfolioParagraph:"",
projectImages:[],
});

useEffect(()=>{
fetchProject();
},[]);

const fetchProject=async()=>{

try{

const res=await axios.get(
"http://localhost:5000/api/project"
);

if(res.data){
setProjectData(res.data);
}

}catch(error){
console.log(error);
}

};

return(

<>

<Navbar />

<section className="project-hero">

<h1 className="bg-text">
DESIGN U CRAVE
</h1>

<div className="project-content">

<h2>
PROJECT SHOWCASE
</h2>

</div>

</section>

<section className="portfolio-section">

<div className="portfolio-container">

<div className="portfolio-top">

<div className="portfolio-left">

<div className="portfolio-shape"></div>

<h2>
{projectData.portfolioHeading}
</h2>

</div>

<div className="portfolio-right">

<p>
{projectData.portfolioParagraph}
</p>

</div>

</div>

<div className="portfolio-filter">

<button className="active-filter">
ALL
</button>

<button>
BUSINESS
</button>

<button>
E-COMMERCE
</button>

</div>

</div>

</section>

<div className="project-grid">

{
projectData.projectImages?.map(
(item,index)=>(

<div
className={`project-card ${item.cardSize}`}
key={index}
style={{
width:item.imageWidth||"100%",
height:item.imageHeight||"400px",
borderRadius:item.borderRadius||"0px",
overflow:"hidden",
}}
>

<img
src={item.image}
alt=""
style={{
width:"100%",
height:"100%",
objectFit:"cover",
borderRadius:item.borderRadius||"0px",
display:"block",
}}
/>

</div>

)
)
}

</div>
{/* ================= BRANDS SECTION ================= */}

<section
className="brands-section"
style={{
background:projectData.brandsBgColor||"#d8c1c1",
}}
>

<div className="brands-container">

<div className="brands-top-line"></div>

<div className="brands-left">

<div className="brands-shape"></div>

<div className="brands-heading">

<h2>
{projectData.brandsHeading}
</h2>

</div>

</div>

<div className="brands-logos">

<div className="brand-logo">
<img
src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
alt=""
/>
</div>

<div className="brand-logo">
<img
src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
alt=""
/>
</div>

<div className="brand-logo">
<img
src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
alt=""
/>
</div>

<div className="brand-logo">
<img
src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
alt=""
/>
</div>

<div className="brand-logo">
<img
src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
alt=""
/>
</div>

</div>

</div>

</section>
<Footer />

</>

);

};

export default Project;