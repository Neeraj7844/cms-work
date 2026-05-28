import mongoose from "mongoose";

const neabSchema =
new mongoose.Schema({

tag:String,

heading:String,

paragraph:String,

headingSize:String,

paragraphSize:String,

image1:String,

image2:String,

card1Title:String,
card2Title:String,
card3Title:String,
card4Title:String,

card1Icon:String,
card2Icon:String,
card3Icon:String,
card4Icon:String,

});

export default mongoose.model(
"Neab",
neabSchema
);