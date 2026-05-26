import mongoose from "mongoose";

const testimonialSchema=new mongoose.Schema({

tag:{
type:String,
default:"Testimonial",
},

heading:{
type:String,
default:"Whats Our Clients Say",
},

paragraph:{
type:String,
default:"We value the experimentation...",
},

headingColor:{
type:String,
default:"#5d7659",
},

paragraphColor:{
type:String,
default:"#222222",
},

headingFontSize:{
type:String,
default:"72px",
},

paragraphFontSize:{
type:String,
default:"18px",
},

headingFontWeight:{
type:String,
default:"800",
},

paragraphFontWeight:{
type:String,
default:"400",
},

cards:[

{

name:String,

designation:String,

description:String,

cardBg:{
type:String,
default:"#ffffff",
},

nameColor:{
type:String,
default:"#08145f",
},

textColor:{
type:String,
default:"#222222",
},

}

]

});

export default mongoose.model(
"Testimonial",
testimonialSchema
);