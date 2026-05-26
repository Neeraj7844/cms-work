import React,{
useEffect,
useState,
} from "react";

import axios from "axios";
import "../styles/AdminAbout.css";

const AdminAbout=()=>{

const [data,setData]=useState({

/* HERO */

heroTitle:"",
heroBgImage:"",
heroOverlayColor:"#375237",
heroOpacity:"0.72",
heroBgHeight:"650px",
heroBgWidth:"100%",
heroBgSize:"cover",
heroBgRepeat:"no-repeat",
heroBgPosition:"center",

/* REASONS */

reasonsHeading:"",
reasonsParagraph:"",
reasonsImage:"",
reasonsImageRadius:"0px",
sideText:"",

serveHeading:"",
serveParagraph1:"",
serveParagraph2:"",

/* SKILLS */

skills:[],

/* COUNTERS */

counters:[],

counterBgColor:"#456b42",

/* MISSION */

missionImage:"",
missionTitle:"",
missionHeading:"",
missionParagraph1:"",
missionParagraph2:"",

/* COLORS */

backgroundColor:"#ffffff",
headingColor:"#3d5d39",
paragraphColor:"#222222",

/* FONT */

heroFontSize:"78px",
headingFontSize:"40px",
paragraphFontSize:"15px",

heroFontWeight:"700",
headingFontWeight:"600",
paragraphFontWeight:"400",

/* IMAGE */

imageHeight:"500px",
imageWidth:"90%",
imageRadius:"0px",

});

useEffect(()=>{
fetchAbout();
},[]);

const fetchAbout=async()=>{

try{

const res=await axios.get(
"https://cms-3tty.onrender.com/api/about"
);

if(res.data){
setData(res.data);
}

}catch(error){

console.log(error);

}

};

const handleChange=(e)=>{

setData({
...data,
[e.target.name]:e.target.value,
});

};

const updateAbout=async()=>{

try{

await axios.put(
"https://cms-3tty.onrender.com/api/about",
data
);

alert("About Updated");

}catch(error){

console.log(error);

}

};

return(

<div className="admin-about">

<h1 className="admin-page-title">
  About CMS
</h1>

{/* HERO SECTION */}

<div className="cms-section">

<h2>
Hero Section
</h2>

<div className="cms-grid">

<div className="cms-field">
<label>Hero Title</label>

<input
type="text"
name="heroTitle"
placeholder="Hero Title"
value={data.heroTitle||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Hero Background Image</label>

<input
type="text"
name="heroBgImage"
placeholder="Hero Background Image"
value={data.heroBgImage||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Hero Overlay Color</label>

<input
type="color"
name="heroOverlayColor"
value={data.heroOverlayColor||"#375237"}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Hero Overlay Opacity</label>

<input
type="text"
name="heroOpacity"
placeholder="0.72"
value={data.heroOpacity||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Hero Background Width</label>

<input
type="text"
name="heroBgWidth"
placeholder="100%"
value={data.heroBgWidth||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Hero Background Height</label>

<input
type="text"
name="heroBgHeight"
placeholder="650px"
value={data.heroBgHeight||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Background Size</label>

<select
name="heroBgSize"
value={data.heroBgSize||"cover"}
onChange={handleChange}
>

<option value="cover">Cover</option>
<option value="contain">Contain</option>
<option value="100% 100%">Stretch</option>
<option value="auto">Auto</option>

</select>
</div>

<div className="cms-field">
<label>Background Repeat</label>

<select
name="heroBgRepeat"
value={data.heroBgRepeat||"no-repeat"}
onChange={handleChange}
>

<option value="no-repeat">No Repeat</option>
<option value="repeat">Repeat</option>
<option value="repeat-x">Repeat X</option>
<option value="repeat-y">Repeat Y</option>

</select>
</div>

<div className="cms-field">
<label>Background Position</label>

<select
name="heroBgPosition"
value={data.heroBgPosition||"center"}
onChange={handleChange}
>

<option value="center">Center</option>
<option value="top">Top</option>
<option value="bottom">Bottom</option>
<option value="left">Left</option>
<option value="right">Right</option>

</select>
</div>

</div>

</div>

{/* REASONS SECTION */}

<div className="cms-section">

<h2>
Reasons Section
</h2>

<div className="cms-grid">

<div className="cms-field">
<label>Reasons Heading</label>

<input
type="text"
name="reasonsHeading"
placeholder="Reasons Heading"
value={data.reasonsHeading||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Reasons Paragraph</label>

<textarea
name="reasonsParagraph"
placeholder="Reasons Paragraph"
value={data.reasonsParagraph||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Reasons Image</label>

<input
type="text"
name="reasonsImage"
placeholder="Reasons Image"
value={data.reasonsImage||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Reasons Image Radius</label>

<input
type="text"
name="reasonsImageRadius"
placeholder="40px"
value={data.reasonsImageRadius||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Side Text</label>

<input
type="text"
name="sideText"
placeholder="Side Text"
value={data.sideText||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Serve Heading</label>

<input
type="text"
name="serveHeading"
placeholder="Serve Heading"
value={data.serveHeading||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Serve Paragraph 1</label>

<textarea
name="serveParagraph1"
placeholder="Serve Paragraph 1"
value={data.serveParagraph1||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Serve Paragraph 2</label>

<textarea
name="serveParagraph2"
placeholder="Serve Paragraph 2"
value={data.serveParagraph2||""}
onChange={handleChange}
/>
</div>

</div>

</div>

{/* MISSION SECTION */}

<div className="cms-section">

<h2>
Mission Section
</h2>

<div className="cms-grid">

<div className="cms-field">
<label>Mission Image</label>

<input
type="text"
name="missionImage"
placeholder="Mission Image"
value={data.missionImage||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Mission Title</label>

<input
type="text"
name="missionTitle"
placeholder="Mission Title"
value={data.missionTitle||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Mission Heading</label>

<input
type="text"
name="missionHeading"
placeholder="Mission Heading"
value={data.missionHeading||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Mission Paragraph 1</label>

<textarea
name="missionParagraph1"
placeholder="Mission Paragraph 1"
value={data.missionParagraph1||""}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Mission Paragraph 2</label>

<textarea
name="missionParagraph2"
placeholder="Mission Paragraph 2"
value={data.missionParagraph2||""}
onChange={handleChange}
/>
</div>

</div>

</div>

{/* COLORS */}

<div className="cms-section">

<h2>
Colors
</h2>

<div className="cms-grid">

<div className="cms-field">
<label>Background Color</label>

<input
type="color"
name="backgroundColor"
value={data.backgroundColor||"#ffffff"}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Heading Color</label>

<input
type="color"
name="headingColor"
value={data.headingColor||"#3d5d39"}
onChange={handleChange}
/>
</div>

<div className="cms-field">
<label>Paragraph Color</label>

<input
type="color"
name="paragraphColor"
value={data.paragraphColor||"#222222"}
onChange={handleChange}
/>
</div>

</div>

</div>

{/* BUTTON */}

<button
className="update-btn"
onClick={updateAbout}
>
Update About
</button>

</div>

);

};

export default AdminAbout;