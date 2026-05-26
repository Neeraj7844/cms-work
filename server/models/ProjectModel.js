import mongoose from "mongoose";

const ProjectSchema=new mongoose.Schema({

portfolioHeading:{
type:String,
default:"SOME WORKS FROM OUR PORTFOLIO",
},

portfolioParagraph:{
type:String,
default:"We shows only the best websites and portfolios built completely with passion, simplicity & creativity.",
},

projectImages:[
{

image:{
type:String,
default:"",
},

category:{
type:String,
default:"ALL",
},

cardSize:{
type:String,
default:"large-card",
},

imageWidth:{
type:String,
default:"500px",
},

imageHeight:{
type:String,
default:"400px",
},

borderRadius:{
type:String,
default:"0px",
},

},
],
brandsHeading:{
type:String,
default:"BRANDS WE’VE COLLABORATED WITH TEAM.",
},

brandsBgColor:{
type:String,
default:"#d8c1c1",
},
});

const ProjectModel=mongoose.model(
"Project",
ProjectSchema
);

export default ProjectModel;