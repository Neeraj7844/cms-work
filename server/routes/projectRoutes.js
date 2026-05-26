import express from "express";
import Project from "../models/ProjectModel.js";

const router = express.Router();

/* GET PROJECT */

router.get("/", async (req, res) => {

try {

let data = await Project.findOne();

if (!data) {

data = await Project.create({

portfolioHeading:
"SOME WORKS FROM OUR PORTFOLIO",

portfolioParagraph:
"We shows only the best websites and portfolios built completely with passion, simplicity & creativity.",

projectImages:[

{
image:
"https://images.unsplash.com/photo-1460925895917-afdab827c52f",

category:"BUSINESS",

cardSize:"large-card",

imageWidth:"100%",

imageHeight:"100%",

borderRadius:"0px",
},

{
image:
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",

category:"E-COMMERCE",

cardSize:"medium-card",

imageWidth:"100%",

imageHeight:"100%",

borderRadius:"0px",
},

],

});

}

res.json(data);

} catch (error) {

console.log(error);

res.status(500).json({
message:error.message,
});

}

});

/* UPDATE PROJECT */

router.put("/", async (req, res) => {

try {

let data = await Project.findOne();

if (!data) {

data = new Project(req.body);

} else {

data.portfolioHeading =
req.body.portfolioHeading;

data.portfolioParagraph =
req.body.portfolioParagraph;

data.projectImages =
req.body.projectImages;

}

await data.save();

res.json({
message:"Project Updated",
data,
});

} catch (error) {

console.log(error);

res.status(500).json({
message:error.message,
});

}

});

export default router;