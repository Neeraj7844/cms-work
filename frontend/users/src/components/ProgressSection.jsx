import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

import "../styles/progress.css";

const ProgressSection=()=>{

const [data,setData]=useState({
tag:"",
heading:"",
paragraph:"",
image:"",
imageWidth:"690px",
imageHeight:"620px",
imageRadius:"18px",
backgroundColor:"#708a67",
headingColor:"#ffffff",
paragraphColor:"#ffffff",
headingFontSize:"78px",
paragraphFontSize:"17px",
headingFontWeight:"800",
paragraphFontWeight:"400",

progressBars:[
{
title:"Digital Marketing",
percentage:90,
barColor:"#2453ff",
},
{
title:"Web Development",
percentage:80,
barColor:"#7dff00",
},
{
title:"Business Consulting",
percentage:70,
barColor:"#ff6b57",
},
],

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

setData({

...res.data,

progressBars:
res.data.progressBars?.length > 0
? res.data.progressBars
: [
{
title:"Digital Marketing",
percentage:90,
barColor:"#2453ff",
},
{
title:"Web Development",
percentage:80,
barColor:"#7dff00",
},
{
title:"Business Consulting",
percentage:70,
barColor:"#ff6b57",
},
],

});

}

}catch(error){

console.log(error);

}

};

return(

<section
className="progress-section"
style={{
background:data.backgroundColor,
}}
>

<div className="progress-container">

<div className="progress-left">

<div className="progress-tag">
{data.tag}
</div>

<h1
className="progress-heading"
style={{
color:data.headingColor,
fontSize:data.headingFontSize,
fontWeight:data.headingFontWeight,
}}
>
{data.heading}
</h1>

<p
className="progress-paragraph"
style={{
color:data.paragraphColor,
fontSize:data.paragraphFontSize,
fontWeight:data.paragraphFontWeight,
}}
>
{data.paragraph}
</p>

{/* PROGRESS BARS */}

<div className="progress-bars">

{
data.progressBars &&
data.progressBars.map(
(item,index)=>(

<div
className="progress-item"
key={index}
>

<div className="progress-title">

<span>
{item.title}
</span>

<span>
{item.percentage}%
</span>

</div>

<div className="progress-line">

<div
className="progress-fill"
style={{
width:`${item.percentage}%`,
background:item.barColor,
}}
></div>

</div>

</div>

)
)
}

</div>

</div>

{/* RIGHT IMAGE */}

<div className="progress-right">

<img
src={data.image}
alt=""
style={{
width:data.imageWidth,
height:data.imageHeight,
borderRadius:data.imageRadius,
objectFit:"cover",
}}
/>

</div>

</div>

</section>

);

};

export default ProgressSection;