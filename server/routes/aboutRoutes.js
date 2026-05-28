import express from "express";

import multer from "multer";

import {
getAbout,
updateAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

/* STORAGE */

const storage = multer.diskStorage({

destination:(req,file,cb)=>{

cb(null,"uploads");

},

filename:(req,file,cb)=>{

cb(

null,

Date.now() +
"-" +
file.originalname

);

}

});

const upload = multer({storage});

/* GET */

router.get(
"/",
getAbout
);

/* UPDATE */

router.put(

"/",

upload.fields([

{ name:"heroBgFile" },

{ name:"reasonsImageFile" },

{ name:"missionImageFile" }

]),

updateAbout

);

export default router;