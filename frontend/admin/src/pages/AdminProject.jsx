import React,{
useEffect,
useState,
} from "react";

import axios from "axios";

const AdminProject=()=>{

const [data,setData]=useState({
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

const handleImageChange=(
index,
field,
value
)=>{

const updated=[
...data.projectImages,
];

updated[index][field]=value;

setData({
...data,
projectImages:updated,
});

};

const addProjectImage=()=>{

setData({
...data,
projectImages:[
...data.projectImages,
{
image:"",
category:"ALL",
cardSize:"large-card",
imageWidth:"500px",
imageHeight:"400px",
borderRadius:"0px",
},
],
});

};

const deleteProjectImage=(index)=>{

const updated=
data.projectImages.filter(
(_,i)=>i!==index
);

setData({
...data,
projectImages:updated,
});

};

const updateProject=async()=>{

try{

await axios.put(
"http://localhost:5000/api/project",
data
);

alert("Project Updated Successfully");

}catch(error){

console.log(error);

}

};

return(

<div style={{
padding:"40px",
}}>

<h1>
Project CMS
</h1>

<h3>
Portfolio Heading
</h3>

<input
type="text"
name="portfolioHeading"
value={data.portfolioHeading||""}
onChange={handleChange}
/>

<h3>
Portfolio Paragraph
</h3>

<textarea
name="portfolioParagraph"
value={data.portfolioParagraph||""}
onChange={handleChange}
/>

<hr />

{
data.projectImages?.map(
(item,index)=>(

<div
key={index}
style={{
border:"1px solid #ccc",
padding:"20px",
marginBottom:"20px",
}}
>

<h2>
Project Image {index+1}
</h2>

<h4>
Image URL
</h4>

<input
type="text"
value={item.image||""}
onChange={(e)=>
handleImageChange(
index,
"image",
e.target.value
)
}
/>

<h4>
Category
</h4>

<select
value={item.category||"ALL"}
onChange={(e)=>
handleImageChange(
index,
"category",
e.target.value
)
}
>

<option value="ALL">
ALL
</option>

<option value="BUSINESS">
BUSINESS
</option>

<option value="E-COMMERCE">
E-COMMERCE
</option>

</select>

<h4>
Card Size
</h4>

<select
value={item.cardSize||"large-card"}
onChange={(e)=>
handleImageChange(
index,
"cardSize",
e.target.value
)
}
>

<option value="large-card">
Large Card
</option>

<option value="medium-card">
Medium Card
</option>

<option value="wide-card">
Wide Card
</option>

</select>

<h4>
Image Width
</h4>

<input
type="text"
placeholder="500px"
value={item.imageWidth||""}
onChange={(e)=>
handleImageChange(
index,
"imageWidth",
e.target.value
)
}
/>

<h4>
Image Height
</h4>

<input
type="text"
placeholder="400px"
value={item.imageHeight||""}
onChange={(e)=>
handleImageChange(
index,
"imageHeight",
e.target.value
)
}
/>

<h4>
Border Radius
</h4>

<input
type="text"
placeholder="20px"
value={item.borderRadius||""}
onChange={(e)=>
handleImageChange(
index,
"borderRadius",
e.target.value
)
}
/>

<br /><br />

<button
onClick={()=>
deleteProjectImage(index)
}
>
Delete
</button>

</div>

)
)
}

<button onClick={addProjectImage}>
Add Image
</button>

<br /><br />

<button onClick={updateProject}>
Update Project
</button>
<h3>
Brands Heading
</h3>

<input
type="text"
name="brandsHeading"
value={data.brandsHeading||""}
onChange={handleChange}
/>

<h3>
Brands Background Color
</h3>

<input
type="color"
name="brandsBgColor"
value={data.brandsBgColor||"#d8c1c1"}
onChange={handleChange}
/>
</div>

);

};

export default AdminProject;