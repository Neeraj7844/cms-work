import React,{
useState
} from "react";

import axios from "axios";

import "../styles/adminBlog.css";

const AdminBlog=()=>{

const [form,setForm]=
useState({

heading:"",
paragraph:"",

category1:"",
date1:"",
title1:"",
buttonColor1:"#004cff",

category2:"",
date2:"",
title2:"",
buttonColor2:"#ff3366",

category3:"",
date3:"",
title3:"",
buttonColor3:"#5dbb28",

});

const [files,setFiles]=
useState({});

const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:
e.target.value

});

};

const handleFile=(e)=>{

setFiles({

...files,
[e.target.name]:
e.target.files[0]

});

};

const handleSubmit=
async(e)=>{

e.preventDefault();

try{

const data=
new FormData();

Object.keys(form).forEach((key)=>{

data.append(
key,
form[key]
);

});

Object.keys(files).forEach((key)=>{

data.append(
key,
files[key]
);

});

await axios.post(

"https://cms-work.onrender.com/api/blog",
data

);

alert("Blog Updated");

}catch(error){

console.log(error);

}

};

return(

<div className="admin-blog">

<h1>Admin Blog Panel</h1>

<form onSubmit={handleSubmit}>

<input
type="text"
name="heading"
placeholder="Main Heading"
onChange={handleChange}
/>

<textarea
name="paragraph"
placeholder="Paragraph"
onChange={handleChange}
/>

{/* BLOG 1 */}

<h2>Blog 1</h2>

<input
type="file"
name="image1"
onChange={handleFile}
/>

<input
type="file"
name="contentBg1"
onChange={handleFile}
/>

<input
type="text"
name="category1"
placeholder="Category"
onChange={handleChange}
/>

<input
type="text"
name="date1"
placeholder="Date"
onChange={handleChange}
/>

<input
type="text"
name="title1"
placeholder="Title"
onChange={handleChange}
/>

<input
type="color"
name="buttonColor1"
onChange={handleChange}
/>

{/* BLOG 2 */}

<h2>Blog 2</h2>

<input
type="file"
name="image2"
onChange={handleFile}
/>

<input
type="file"
name="contentBg2"
onChange={handleFile}
/>

<input
type="text"
name="category2"
placeholder="Category"
onChange={handleChange}
/>

<input
type="text"
name="date2"
placeholder="Date"
onChange={handleChange}
/>

<input
type="text"
name="title2"
placeholder="Title"
onChange={handleChange}
/>

<input
type="color"
name="buttonColor2"
onChange={handleChange}
/>

{/* BLOG 3 */}

<h2>Blog 3</h2>

<input
type="file"
name="image3"
onChange={handleFile}
/>

<input
type="file"
name="contentBg3"
onChange={handleFile}
/>

<input
type="text"
name="category3"
placeholder="Category"
onChange={handleChange}
/>

<input
type="text"
name="date3"
placeholder="Date"
onChange={handleChange}
/>

<input
type="text"
name="title3"
placeholder="Title"
onChange={handleChange}
/>

<input
type="color"
name="buttonColor3"
onChange={handleChange}
/>

<button type="submit">
Save Blog
</button>

</form>

</div>

);

};

export default AdminBlog;