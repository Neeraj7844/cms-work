import React,{
useEffect,
useState
} from "react";

import axios from "axios";

import "../styles/about.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About=()=>{

const [aboutData,setAboutData]=
useState({});

useEffect(()=>{

fetchAbout();

},[]);

const fetchAbout=async()=>{

try{

const res=
await axios.get(
"http://localhost:5000/api/about"
);

if(res.data){

setAboutData(res.data);

}

}catch(error){

console.log(error);

}

};

return(

<>

<Navbar/>

{/* HERO */}

<section

className="about-hero"

style={{

backgroundImage:
`linear-gradient(rgba(55,82,55,0.72),rgba(55,82,55,0.72)),url(${aboutData.heroBgImage})`

}}

>

<div className="about-content">

<h1>

{

aboutData.heroTitle ||

"ABOUT US"

}

</h1>

</div>

</section>

{/* REASONS */}

<section className="reasons-section">

<div className="reasons-container">

{/* TOP */}

<div className="reasons-top">

<div className="reasons-left">

<div className="green-shape"></div>

<h2>

{

aboutData.reasonsHeading ||

"THERE ARE MANY REASONS TO CHOICE US"

}

</h2>

</div>

<div className="reasons-right">

<p>

{

aboutData.reasonsParagraph ||

"We blend creativity, strategy, and dependability to deliver design solutions that truly make an impact."

}

</p>

</div>

</div>

{/* BOTTOM */}

<div className="reasons-bottom">

{/* IMAGE */}

<div className="reasons-image">

<img
src={aboutData.reasonsImage}
alt=""
/>

<div className="image-side-text">

{

aboutData.sideText ||

"CRAVING FOR EXCELLENCE"

}

</div>

</div>

{/* CONTENT */}

<div className="reasons-content">

<h3>

{

aboutData.serveHeading ||

"We are here to serve you!"

}

</h3>

<p>

{

aboutData.serveParagraph1 ||

"Established in 2018, Design U Crave Technologies is a Gurgaon, India based organization."

}

</p>

<p>

{

aboutData.serveParagraph2 ||

"A one-stop-shop for all your web needs."

}

</p>

{/* SKILL 1 */}

<div className="skill">

<div className="skill-head">

<span>

UI/UX DESIGN

</span>

<span>

70%

</span>

</div>

<div className="skill-bar">

<div

className="skill-fill"

style={{

width:"70%"

}}

></div>

</div>

</div>

{/* SKILL 2 */}

<div className="skill">

<div className="skill-head">

<span>

MARKETING

</span>

<span>

90%

</span>

</div>

<div className="skill-bar">

<div

className="skill-fill"

style={{

width:"90%"

}}

></div>

</div>

</div>

{/* SKILL 3 */}

<div className="skill">

<div className="skill-head">

<span>

WEB DEVELOPMENT

</span>

<span>

75%

</span>

</div>

<div className="skill-bar">

<div

className="skill-fill"

style={{

width:"75%"

}}

></div>

</div>

</div>

</div>

</div>

</div>

</section>

{/* COUNTER */}

<section className="counter-section">

<div className="counter-container">

<div className="counter-box">

<div className="counter-icon">

{

aboutData.missionCard1Icon ||

"⚙"

}

</div>

<h2>

{

aboutData.missionCard1Number ||

"2.205"

}

</h2>

<p>

{

aboutData.missionCard1Text ||

"Completed Projects"

}

</p>

</div>

<div className="counter-box">

<div className="counter-icon">

{

aboutData.missionCard2Icon ||

"👥"

}

</div>

<h2>

{

aboutData.missionCard2Number ||

"54+"

}

</h2>

<p>

{

aboutData.missionCard2Text ||

"Active Members"

}

</p>

</div>

<div className="counter-box">

<div className="counter-icon">

{

aboutData.missionCard3Icon ||

"🏆"

}

</div>

<h2>

{

aboutData.missionCard3Number ||

"14+"

}

</h2>

<p>

{

aboutData.missionCard3Text ||

"Award Winning"

}

</p>

</div>

<div className="counter-box">

<div className="counter-icon">

{

aboutData.missionCard4Icon ||

"🎖"

}

</div>

<h2>

{

aboutData.missionCard4Number ||

"100%"

}

</h2>

<p>

{

aboutData.missionCard4Text ||

"Satisfaction Rate"

}

</p>

</div>

</div>

</section>

{/* MISSION */}

<section className="mission-section">

<div className="mission-container">

<div className="mission-image">

<div className="mission-image-border">

<img
src={aboutData.missionImage}
alt=""
/>

</div>

</div>

<div className="mission-content">

<h2>

{

aboutData.missionHeading ||

"OUR MISSION"

}

</h2>

<h3>

{

aboutData.missionSubheading ||

"OUR COMPANY IS BUILT ON PEOPLE"

}

</h3>

<p>

{

aboutData.missionParagraph1 ||

"We provide premium technology services."

}

</p>

<p>

{

aboutData.missionParagraph2 ||

"We help businesses grow online."

}

</p>

</div>

</div>

</section>

<Footer/>

</>

);

};

export default About;