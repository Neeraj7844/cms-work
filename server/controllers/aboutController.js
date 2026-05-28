import AboutModel from "../models/AboutModel.js";

/* GET ABOUT */

export const getAbout =
async(req,res)=>{

try{

const data =
await AboutModel.findOne();

res.json(data);

}catch(error){

console.log(error);

res.status(500).json({

message:error.message

});

}

};

/* UPDATE ABOUT */

export const updateAbout =
async(req,res)=>{

try{

console.log("BODY =>",req.body);

console.log("FILES =>",req.files);

let data =
await AboutModel.findOne();

/* FILE FUNCTION */

const getFile=(name)=>{

if(

req.files &&
req.files[name] &&
req.files[name][0]

){

return `http://localhost:5000/uploads/${req.files[name][0].filename}`;

}

return null;

};

/* CREATE */

if(!data){

data =
new AboutModel({

heroTitle:
req.body.heroTitle || "",

heroBgImage:
getFile("heroBgFile") ||
req.body.heroBgImage ||
"",

reasonsHeading:
req.body.reasonsHeading || "",

reasonsParagraph:
req.body.reasonsParagraph || "",

reasonsImage:
getFile("reasonsImageFile") ||
req.body.reasonsImage ||
"",

sideText:
req.body.sideText || "",

serveHeading:
req.body.serveHeading || "",

serveParagraph1:
req.body.serveParagraph1 || "",

serveParagraph2:
req.body.serveParagraph2 || "",

missionImage:
getFile("missionImageFile") ||
req.body.missionImage ||
"",

missionTitle:
req.body.missionTitle || "",

missionHeading:
req.body.missionHeading || "",

missionParagraph1:
req.body.missionParagraph1 || "",

missionParagraph2:
req.body.missionParagraph2 || "",

backgroundColor:
req.body.backgroundColor || "#ffffff",

headingColor:
req.body.headingColor || "#3d5d39",

paragraphColor:
req.body.paragraphColor || "#222222",

});

}

/* UPDATE */

else{

data.heroTitle =
req.body.heroTitle || data.heroTitle;

data.heroBgImage =
getFile("heroBgFile") ||
req.body.heroBgImage ||
data.heroBgImage;

data.reasonsHeading =
req.body.reasonsHeading ||
data.reasonsHeading;

data.reasonsParagraph =
req.body.reasonsParagraph ||
data.reasonsParagraph;

data.reasonsImage =
getFile("reasonsImageFile") ||
req.body.reasonsImage ||
data.reasonsImage;

data.sideText =
req.body.sideText ||
data.sideText;

data.serveHeading =
req.body.serveHeading ||
data.serveHeading;

data.serveParagraph1 =
req.body.serveParagraph1 ||
data.serveParagraph1;

data.serveParagraph2 =
req.body.serveParagraph2 ||
data.serveParagraph2;

data.missionImage =
getFile("missionImageFile") ||
req.body.missionImage ||
data.missionImage;

data.missionTitle =
req.body.missionTitle ||
data.missionTitle;

data.missionHeading =
req.body.missionHeading ||
data.missionHeading;

data.missionParagraph1 =
req.body.missionParagraph1 ||
data.missionParagraph1;

data.missionParagraph2 =
req.body.missionParagraph2 ||
data.missionParagraph2;

data.backgroundColor =
req.body.backgroundColor ||
data.backgroundColor;

data.headingColor =
req.body.headingColor ||
data.headingColor;

data.paragraphColor =
req.body.paragraphColor ||
data.paragraphColor;

}

/* SAVE */

await data.save();

res.json({

success:true,
message:"About Updated Successfully"

});

}catch(error){

console.log(
"ABOUT ERROR =>",
error
);

res.status(500).json({

success:false,
message:error.message

});

}

};