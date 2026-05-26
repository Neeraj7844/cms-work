import mongoose from "mongoose";

const progressSchema=new mongoose.Schema({
tag:String,
heading:String,
paragraph:String,
image:String,
imageWidth:String,
imageHeight:String,
imageRadius:String,
backgroundColor:String,
headingColor:String,
paragraphColor:String,
headingFontSize:String,
paragraphFontSize:String,
headingFontWeight:String,
paragraphFontWeight:String,
progressBars:[
{
title:String,
percentage:Number,
barColor:String,
},
],
});

const Progress=mongoose.model(
"Progress",
progressSchema
);

export default Progress;