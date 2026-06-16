import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

import "../styles/Testimonial.css";

const Testimonial=()=>{

const [data,setData]=useState({

tag:"",
heading:"",
paragraph:"",

headingColor:"#5d7659",
paragraphColor:"#222222",

headingFontSize:"72px",
paragraphFontSize:"18px",

headingFontWeight:"800",
paragraphFontWeight:"400",

cards:[],

});

useEffect(()=>{
fetchData();
},[]);

const fetchData=async()=>{

try{

const res=await axios.get(
"https://cms-work.onrender.com/api/testimonial"
);

if(res.data){

setData(res.data);

}

}catch(error){

console.log(error);

}

};

return(

<section className="testimonial">

{/* TOP */}

<div className="testimonial-top">

<button className="testimonial-btn">

{data.tag || "Testimonial"}

</button>

<h1
style={{
color:data.headingColor,
fontSize:data.headingFontSize,
fontWeight:data.headingFontWeight,
}}
>

{data.heading || "Whats Our Clients Say"}

</h1>

<p
style={{
color:data.paragraphColor,
fontSize:data.paragraphFontSize,
fontWeight:data.paragraphFontWeight,
}}
>

{data.paragraph ||

"We value the experimentation, the reformation of the message."}

</p>

</div>

{/* CARDS */}

<div className="testimonial-wrapper">

{

data.cards?.map(
(card,index)=>(

<div

className={`testimonial-card ${
index % 2 === 0
? "left-card"
: "right-card"
}`}

key={index}

style={{
background:card.cardBg || "#fff",
}}

>

{

index % 2 === 0

? (

<>

<div className="client-info">

<h2
style={{
color:card.nameColor,
}}
>
{card.name}
</h2>

<span
style={{
color:card.nameColor,
}}
>
{card.designation}
</span>

</div>

<div className="client-review">

<p
style={{
color:card.textColor,
}}
>
{card.description}
</p>

</div>

</>

)

: (

<>

<div className="client-review">

<p
style={{
color:card.textColor,
}}
>
{card.description}
</p>

</div>

<div className="client-info">

<h2
style={{
color:card.nameColor,
}}
>
{card.name}
</h2>

<span
style={{
color:card.nameColor,
}}
>
{card.designation}
</span>

</div>

</>

)

}

</div>

)
)

}

</div>

</section>

);

};

export default Testimonial;