import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

import "../styles/progressAdmin.css";

const AdminProgress=()=>{

const [data,setData]=useState({
tag:"",
heading:"",
paragraph:"",
image:"",
imageWidth:"",
imageHeight:"",
imageRadius:"",
backgroundColor:"#708a67",
headingColor:"#ffffff",
paragraphColor:"#ffffff",
headingFontSize:"70px",
paragraphFontSize:"18px",
headingFontWeight:"800",
paragraphFontWeight:"400",
progressBars:[],
});

useEffect(()=>{
fetchProgress();
},[]);

const fetchProgress=async()=>{

try{

const res=await axios.get(
"https://cms-3tty.onrender.com/api/progress"
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

const handleBarChange=(
index,
field,
value
)=>{

const updatedBars=[
...data.progressBars,
];

updatedBars[index][field]=value;

setData({
...data,
progressBars:updatedBars,
});

};

const addProgressBar=()=>{

setData({
...data,
progressBars:[
...data.progressBars,
{
title:"",
percentage:50,
barColor:"#0047ff",
},
],
});

};

const deleteProgressBar=(index)=>{

const updatedBars=
data.progressBars.filter(
(_,i)=>i!==index
);

setData({
...data,
progressBars:updatedBars,
});

};

const updateProgress=async()=>{

try{

await axios.put(
"https://cms-3tty.onrender.com/api/progress",
data
);

alert("Progress Updated");

}catch(error){

console.log(error);

}

};

return(

<div className="progress-admin-page">

<div className="progress-admin-container">

<h1>
Progress CMS
</h1>

<h3>
Top Tag
</h3>

<input
type="text"
name="tag"
placeholder="Tag"
value={data.tag||""}
onChange={handleChange}
/>

<h3>
Main Heading
</h3>

<input
type="text"
name="heading"
placeholder="Heading"
value={data.heading||""}
onChange={handleChange}
/>

<h3>
Paragraph Text
</h3>

<textarea
name="paragraph"
placeholder="Paragraph"
value={data.paragraph||""}
onChange={handleChange}
/>

<h3>
Image URL
</h3>

<input
type="text"
name="image"
placeholder="Image URL"
value={data.image||""}
onChange={handleChange}
/>

<h3>
Image Width
</h3>

<input
type="text"
name="imageWidth"
placeholder="600px"
value={data.imageWidth||""}
onChange={handleChange}
/>

<h3>
Image Height
</h3>

<input
type="text"
name="imageHeight"
placeholder="650px"
value={data.imageHeight||""}
onChange={handleChange}
/>

<h3>
Image Border Radius
</h3>

<input
type="text"
name="imageRadius"
placeholder="20px"
value={data.imageRadius||""}
onChange={handleChange}
/>

<h3>
Background Color
</h3>

<input
type="color"
name="backgroundColor"
value={data.backgroundColor||"#708a67"}
onChange={handleChange}
/>

<h3>
Heading Color
</h3>

<input
type="color"
name="headingColor"
value={data.headingColor||"#ffffff"}
onChange={handleChange}
/>

<h3>
Paragraph Color
</h3>

<input
type="color"
name="paragraphColor"
value={data.paragraphColor||"#ffffff"}
onChange={handleChange}
/>

<h3>
Heading Font Size
</h3>

<input
type="text"
name="headingFontSize"
placeholder="70px"
value={data.headingFontSize||""}
onChange={handleChange}
/>

<h3>
Paragraph Font Size
</h3>

<input
type="text"
name="paragraphFontSize"
placeholder="18px"
value={data.paragraphFontSize||""}
onChange={handleChange}
/>

<h3>
Heading Font Weight
</h3>

<input
type="text"
name="headingFontWeight"
placeholder="800"
value={data.headingFontWeight||""}
onChange={handleChange}
/>

<h3>
Paragraph Font Weight
</h3>

<input
type="text"
name="paragraphFontWeight"
placeholder="400"
value={data.paragraphFontWeight||""}
onChange={handleChange}
/>

<hr />

{
data.progressBars?.map(
(bar,index)=>(
<div
key={index}
className="progress-admin-card"
>

<h2>
Progress Bar {index+1}
</h2>

<h4>
Progress Title
</h4>

<input
type="text"
value={bar.title||""}
onChange={(e)=>
handleBarChange(
index,
"title",
e.target.value
)
}
/>

<h4>
Progress Percentage
</h4>

<input
type="number"
value={bar.percentage||0}
onChange={(e)=>
handleBarChange(
index,
"percentage",
e.target.value
)
}
/>

<h4>
Progress Fill Color
</h4>

<input
type="color"
value={bar.barColor||"#0047ff"}
onChange={(e)=>
handleBarChange(
index,
"barColor",
e.target.value
)
}
/>

<button
onClick={()=>
deleteProgressBar(index)
}
>
Delete Bar
</button>

</div>
)
)
}

<div className="progress-admin-buttons">

<button onClick={addProgressBar}>
Add Progress Bar
</button>

<button onClick={updateProgress}>
Update Progress
</button>

</div>

</div>

</div>

);

};

export default AdminProgress;