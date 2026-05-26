import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

import "../styles/testimonialAdmin.css";

const AdminTestimonial=()=>{

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
"https://cms-3tty.onrender.com/api/testimonial"
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

const handleCardChange=(
index,
field,
value
)=>{

const updated=[...data.cards];

updated[index][field]=value;

setData({
...data,
cards:updated,
});

};

const addCard=()=>{

setData({
...data,
cards:[
...data.cards,
{
name:"",
designation:"",
description:"",
cardBg:"#ffffff",
nameColor:"#08145f",
textColor:"#222222",
},
],
});

};

const deleteCard=(index)=>{

const updated=
data.cards.filter(
(_,i)=>i!==index
);

setData({
...data,
cards:updated,
});

};

const updateData=async()=>{

try{

await axios.put(
"https://cms-3tty.onrender.com/api/testimonial",
data
);

alert("Updated");

}catch(error){

console.log(error);

}

};

return(

<div className="testimonial-admin-page">

<div className="testimonial-admin-container">

<h1>
Testimonial CMS
</h1>

<div className="testimonial-field">

<h3>Tag</h3>

<input
type="text"
name="tag"
value={data.tag||""}
onChange={handleChange}
/>

</div>

<div className="testimonial-field">

<h3>Main Heading</h3>

<input
type="text"
name="heading"
value={data.heading||""}
onChange={handleChange}
/>

</div>

<div className="testimonial-field">

<h3>Paragraph</h3>

<textarea
name="paragraph"
value={data.paragraph||""}
onChange={handleChange}
/>

</div>

<div className="testimonial-grid">

<div className="testimonial-field">

<h3>Heading Color</h3>

<input
type="color"
name="headingColor"
value={data.headingColor||"#5d7659"}
onChange={handleChange}
/>

</div>

<div className="testimonial-field">

<h3>Paragraph Color</h3>

<input
type="color"
name="paragraphColor"
value={data.paragraphColor||"#222222"}
onChange={handleChange}
/>

</div>

</div>

<div className="testimonial-grid">

<div className="testimonial-field">

<h3>Heading Font Size</h3>

<input
type="text"
name="headingFontSize"
value={data.headingFontSize||""}
onChange={handleChange}
/>

</div>

<div className="testimonial-field">

<h3>Paragraph Font Size</h3>

<input
type="text"
name="paragraphFontSize"
value={data.paragraphFontSize||""}
onChange={handleChange}
/>

</div>

</div>

<div className="testimonial-grid">

<div className="testimonial-field">

<h3>Heading Font Weight</h3>

<input
type="text"
name="headingFontWeight"
value={data.headingFontWeight||""}
onChange={handleChange}
/>

</div>

<div className="testimonial-field">

<h3>Paragraph Font Weight</h3>

<input
type="text"
name="paragraphFontWeight"
value={data.paragraphFontWeight||""}
onChange={handleChange}
/>

</div>

</div>

<hr />

{
data.cards?.map(
(card,index)=>(

<div
key={index}
className="testimonial-admin-card"
>

<h2>
Card {index+1}
</h2>

<input
type="text"
placeholder="Client Name"
value={card.name||""}
onChange={(e)=>
handleCardChange(
index,
"name",
e.target.value
)
}
/>

<input
type="text"
placeholder="Designation"
value={card.designation||""}
onChange={(e)=>
handleCardChange(
index,
"designation",
e.target.value
)
}
/>

<textarea
placeholder="Description"
value={card.description||""}
onChange={(e)=>
handleCardChange(
index,
"description",
e.target.value
)
}
/>

<h4>Card BG</h4>

<input
type="color"
value={card.cardBg||"#ffffff"}
onChange={(e)=>
handleCardChange(
index,
"cardBg",
e.target.value
)
}
/>

<h4>Name Color</h4>

<input
type="color"
value={card.nameColor||"#08145f"}
onChange={(e)=>
handleCardChange(
index,
"nameColor",
e.target.value
)
}
/>

<h4>Text Color</h4>

<input
type="color"
value={card.textColor||"#222222"}
onChange={(e)=>
handleCardChange(
index,
"textColor",
e.target.value
)
}
/>

<button
onClick={()=>
deleteCard(index)
}
>
Delete Card
</button>

</div>

)
)
}

<div className="testimonial-admin-buttons">

<button onClick={addCard}>
Add Card
</button>

<button onClick={updateData}>
Update Testimonial
</button>

</div>

</div>

</div>

);

};

export default AdminTestimonial;