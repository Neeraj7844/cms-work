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

/* REASONS */

reasonsHeading:"",
reasonsParagraph:"",
reasonsImage:"",
sideText:"",

serveHeading:"",
serveParagraph1:"",
serveParagraph2:"",

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

});

/* FILE STATES */

const [heroBgFile,setHeroBgFile]=
useState(null);

const [reasonsImageFile,setReasonsImageFile]=
useState(null);

const [missionImageFile,setMissionImageFile]=
useState(null);

/* FETCH */

useEffect(()=>{

fetchAbout();

},[]);

const fetchAbout=async()=>{

try{

const res=await axios.get(

"http://localhost:5000/api/about"

);

if(res.data){

setData(res.data);

}

}catch(error){

console.log(error);

}

};

/* HANDLE CHANGE */

const handleChange=(e)=>{

setData({

...data,

[e.target.name]:
e.target.value,

});

};

/* UPDATE */

const updateAbout=async()=>{

try{

const formData=
new FormData();

/* TEXT DATA */

Object.keys(data).forEach((key)=>{

formData.append(
key,
data[key]
);

});

/* FILES */

if(heroBgFile){

formData.append(
"heroBgFile",
heroBgFile
);

}

if(reasonsImageFile){

formData.append(
"reasonsImageFile",
reasonsImageFile
);

}

if(missionImageFile){

formData.append(
"missionImageFile",
missionImageFile
);

}

/* API */

await axios.put(

"http://localhost:5000/api/about",

formData,

{
headers:{
"Content-Type":
"multipart/form-data"
}
}

);

alert("About Updated");

fetchAbout();

}catch(error){

console.log(error);

alert("Server Error");

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

<label>

Hero Title

</label>

<input
type="text"
name="heroTitle"
placeholder="Enter Hero Title"
value={data.heroTitle||""}
onChange={handleChange}
/>

</div>

{/* FILE */}

<div className="cms-field">

<label>

Upload Hero Background

</label>

<input
type="file"
onChange={(e)=>

setHeroBgFile(
e.target.files[0]
)

}
/>

</div>

{/* URL */}

<div className="cms-field">

<label>

OR Paste Hero Image URL

</label>

<input
type="text"
name="heroBgImage"
placeholder="https://example.com/image.jpg"
value={data.heroBgImage||""}
onChange={handleChange}
/>

</div>

</div>

</div>

{/* REASONS */}

<div className="cms-section">

<h2>

Reasons Section

</h2>

<div className="cms-grid">

<div className="cms-field">

<label>

Reasons Heading

</label>

<input
type="text"
name="reasonsHeading"
placeholder="Reasons Heading"
value={data.reasonsHeading||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Reasons Paragraph

</label>

<textarea
name="reasonsParagraph"
placeholder="Reasons Paragraph"
value={data.reasonsParagraph||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Upload Reasons Image

</label>

<input
type="file"
onChange={(e)=>

setReasonsImageFile(
e.target.files[0]
)

}
/>

</div>

<div className="cms-field">

<label>

OR Paste Reasons Image URL

</label>

<input
type="text"
name="reasonsImage"
placeholder="https://example.com/image.jpg"
value={data.reasonsImage||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Side Text

</label>

<input
type="text"
name="sideText"
placeholder="Side Text"
value={data.sideText||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Serve Heading

</label>

<input
type="text"
name="serveHeading"
placeholder="Serve Heading"
value={data.serveHeading||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Serve Paragraph 1

</label>

<textarea
name="serveParagraph1"
placeholder="Serve Paragraph 1"
value={data.serveParagraph1||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Serve Paragraph 2

</label>

<textarea
name="serveParagraph2"
placeholder="Serve Paragraph 2"
value={data.serveParagraph2||""}
onChange={handleChange}
/>

</div>

</div>

</div>

{/* MISSION */}

<div className="cms-section">

<h2>

Mission Section

</h2>

<div className="cms-grid">

<div className="cms-field">

<label>

Upload Mission Image

</label>

<input
type="file"
onChange={(e)=>

setMissionImageFile(
e.target.files[0]
)

}
/>

</div>

<div className="cms-field">

<label>

OR Paste Mission Image URL

</label>

<input
type="text"
name="missionImage"
placeholder="https://example.com/image.jpg"
value={data.missionImage||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Mission Title

</label>

<input
type="text"
name="missionTitle"
placeholder="Mission Title"
value={data.missionTitle||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Mission Heading

</label>

<input
type="text"
name="missionHeading"
placeholder="Mission Heading"
value={data.missionHeading||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Mission Paragraph 1

</label>

<textarea
name="missionParagraph1"
placeholder="Mission Paragraph 1"
value={data.missionParagraph1||""}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Mission Paragraph 2

</label>

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

<label>

Background Color

</label>

<input
type="color"
name="backgroundColor"
value={data.backgroundColor||"#ffffff"}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Heading Color

</label>

<input
type="color"
name="headingColor"
value={data.headingColor||"#3d5d39"}
onChange={handleChange}
/>

</div>

<div className="cms-field">

<label>

Paragraph Color

</label>

<input
type="color"
name="paragraphColor"
value={data.paragraphColor||"#222222"}
onChange={handleChange}
/>

</div>

</div>

</div>

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