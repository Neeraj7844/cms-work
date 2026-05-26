import mongoose from "mongoose";

const AboutSchema=new mongoose.Schema({

heroTitle:{
type:String,
default:"ABOUT US",
},

heroBgImage:{
type:String,
default:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
},

heroBgWidth:{
type:String,
default:"100%",
},

heroBgHeight:{
type:String,
default:"400px",
},

heroOpacity:{
type:Number,
default:0.6,
},

heroBgSize:{
type:String,
default:"cover",
},

heroBgRepeat:{
type:String,
default:"no-repeat",
},

heroBgPosition:{
type:String,
default:"center",
},

reasonsHeading:{
type:String,
default:"THERE ARE MANY REASONS TO CHOICE US",
},

reasonsParagraph:{
type:String,
default:"We blend creativity, strategy, and dependability to deliver design solutions that truly make an impact.",
},

reasonsImage:{
type:String,
default:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
},

reasonsImageWidth:{
type:String,
default:"520px",
},

reasonsImageHeight:{
type:String,
default:"560px",
},

reasonsImageRadius:{
type:String,
default:"0px",
},

serveHeading:{
type:String,
default:"We are here to serve you!",
},

serveParagraph1:{
type:String,
default:"Established in 2018, Design U Crave Technologies is a Gurgaon, India based organization.",
},

serveParagraph2:{
type:String,
default:"A one-stop-shop for all your web needs.",
},

backgroundColor:{
type:String,
default:"#f5f5f5",
},

headingColor:{
type:String,
default:"#355235",
},

paragraphColor:{
type:String,
default:"#222222",
},

counterBgColor:{
type:String,
default:"#456b3f",
},

heroFontSize:{
type:String,
default:"78px",
},

headingFontSize:{
type:String,
default:"40px",
},

paragraphFontSize:{
type:String,
default:"15px",
},

heroFontWeight:{
type:String,
default:"700",
},

headingFontWeight:{
type:String,
default:"600",
},

paragraphFontWeight:{
type:String,
default:"400",
},

imageWidth:{
type:String,
default:"90%",
},

imageHeight:{
type:String,
default:"100%",
},

imageRadius:{
type:String,
default:"0px",
},

progressBars:[
{
title:{
type:String,
default:"UI/UX DESIGN",
},

percentage:{
type:Number,
default:70,
},

barColor:{
type:String,
default:"#7ed321",
},
},
],

/* =========================
MISSION SECTION
========================= */

missionHeading:{
type:String,
default:"OUR MISSON",
},

missionSubheading:{
type:String,
default:"OUR COMPANY IS BUILT ON PEOPLE – THOSE WHO WORK FOR US, AND THOSE WE DO BUSINESS WITH",
},

missionParagraph1:{
type:String,
default:"We, at Design U Crave Technologies, behold the primary motive of providing premium technology services at affordable rates to our clients.",
},

missionParagraph2:{
type:String,
default:"Further, our goal stands to help businesses operating on all parallels, whether it may be E-commerce, Retail, Wholesale joints or Healthcare.",
},

missionParagraph3:{
type:String,
default:"With honesty and innovation, as our light, Design U Crave Technologies is designed to help businesses.",
},

missionImage:{
type:String,
default:"https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop",
},

missionImageRadius:{
type:String,
default:"0px",
},

missionImageWidth:{
type:String,
default:"320px",
},

missionImageHeight:{
type:String,
default:"430px",
},

missionBgColor:{
type:String,
default:"#456b3f",
},

missionHeadingColor:{
type:String,
default:"#111111",
},

missionTextColor:{
type:String,
default:"#222222",
},

missionCard1Number:{
type:String,
default:"2.205",
},

missionCard1Text:{
type:String,
default:"Completed Projects",
},

missionCard1Icon:{
type:String,
default:"⚙",
},

missionCard2Number:{
type:String,
default:"54+",
},

missionCard2Text:{
type:String,
default:"Active Members",
},

missionCard2Icon:{
type:String,
default:"👥",
},

missionCard3Number:{
type:String,
default:"14+",
},

missionCard3Text:{
type:String,
default:"Award Winning",
},

missionCard3Icon:{
type:String,
default:"🏆",
},

missionCard4Number:{
type:String,
default:"100%",
},

missionCard4Text:{
type:String,
default:"Satisfaction Rate",
},

missionCard4Icon:{
type:String,
default:"🎖",
},

});

const AboutModel=mongoose.model(
"About",
AboutSchema
);

export default AboutModel;