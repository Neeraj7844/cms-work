import About from "../models/AboutModel.js";

export const getAbout=async(req,res)=>{

try{

let data=await About.findOne();

if(!data){

data=await About.create({

/* HERO */

heroTitle:"ABOUT US",

heroBgImage:
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

heroOverlayColor:"#375237",

heroOpacity:"0.72",

heroBgHeight:"650px",

heroBgWidth:"100%",

heroBgSize:"cover",

heroBgRepeat:"no-repeat",

heroBgPosition:"center",

/* REASONS */

reasonsHeading:
"THERE ARE MANY REASONS TO CHOICE US",

reasonsParagraph:
"We blend creativity, strategy, and dependability to deliver design solutions that truly make an impact.",

reasonsImage:
"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",

reasonsImageRadius:"0px",

sideText:
"CRAVING FOR EXCELLENCE",

serveHeading:
"We are here to serve you!",

serveParagraph1:
"Established in 2018, Design U Crave Technologies is a Gurgaon, India based organization.",

serveParagraph2:
"A one-stop-shop for all your web needs.",

/* SKILLS */

skills:[
{
title:"UI/UX DESIGN",
percentage:70,
barColor:"#7ed321",
},
{
title:"MARKETING",
percentage:90,
barColor:"#7ed321",
},
{
title:"WEB DEVELOPMENT",
percentage:75,
barColor:"#7ed321",
},
],

/* COUNTERS */

counters:[
{
icon:"📄",
number:"2.205",
text:"Completed Projects",
},
{
icon:"👥",
number:"54+",
text:"Active Members",
},
{
icon:"🏆",
number:"14+",
text:"Award Winning",
},
{
icon:"🎖️",
number:"100%",
text:"Satisfaction Rate",
},
],

counterBgColor:"#456b42",

/* MISSION */

missionImage:
"https://images.unsplash.com/photo-1552664730-d307ca884978",

missionTitle:"OUR MISSON",

missionHeading:
"OUR COMPANY IS BUILT ON PEOPLE",

missionParagraph1:
"We provide premium technology services.",

missionParagraph2:
"Our goal stands to help businesses operating on all parallels.",

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

}

res.json(data);

}catch(error){

res.status(500).json({
message:error.message,
});

}

};

export const updateAbout=async(req,res)=>{

try{

const updated=
await About.findOneAndUpdate(
{},
req.body,
{
new:true,
upsert:true,
}
);

res.json(updated);

}catch(error){

res.status(500).json({
message:error.message,
});

}

};