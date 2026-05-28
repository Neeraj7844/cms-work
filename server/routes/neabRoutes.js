import express from "express";
import multer from "multer";

import Neab from "../models/Neab.js";

const router = express.Router();

/* =========================================
   STORAGE
========================================= */

const storage = multer.diskStorage({

destination: (req, file, cb) => {

cb(null, "uploads");

},

filename: (req, file, cb) => {

cb(

null,

Date.now() +
"-" +
file.originalname

);

},

});

const upload = multer({
storage,
});

/* =========================================
   GET
========================================= */

router.get(

"/",

async (req, res) => {

try {

const data =
await Neab.findOne();

res.json(data);

} catch (error) {

console.log(error);

res.status(500).json({
message: error.message,
});

}

}

);

/* =========================================
   POST / UPDATE
========================================= */

router.post(

"/",

upload.fields([

{
name: "image1",
maxCount: 1,
},

{
name: "image2",
maxCount: 1,
},

{
name: "card1Icon",
maxCount: 1,
},

{
name: "card2Icon",
maxCount: 1,
},

{
name: "card3Icon",
maxCount: 1,
},

{
name: "card4Icon",
maxCount: 1,
},

]),

async (req, res) => {

try {

console.log(
"BODY =>",
req.body
);

console.log(
"FILES =>",
req.files
);

let data =
await Neab.findOne();

/* FILE FUNCTION */

const getFile = (name) => {

if (

req.files &&
req.files[name] &&
req.files[name][0]

) {

return `https://cms-3tty.onrender.com/uploads/${req.files[name][0].filename}`;

}

return "";

};

/* CREATE */

if (!data) {

data = new Neab({

tag:
req.body.tag || "",

heading:
req.body.heading || "",

paragraph:
req.body.paragraph || "",

headingSize:
req.body.headingSize || "68",

paragraphSize:
req.body.paragraphSize || "20",

image1:
getFile("image1"),

image2:
getFile("image2"),

card1Title:
req.body.card1Title || "",

card1Icon:
getFile("card1Icon"),

card2Title:
req.body.card2Title || "",

card2Icon:
getFile("card2Icon"),

card3Title:
req.body.card3Title || "",

card3Icon:
getFile("card3Icon"),

card4Title:
req.body.card4Title || "",

card4Icon:
getFile("card4Icon"),

});

}

/* UPDATE */

else {

data.tag =
req.body.tag ||
data.tag;

data.heading =
req.body.heading ||
data.heading;

data.paragraph =
req.body.paragraph ||
data.paragraph;

data.headingSize =
req.body.headingSize ||
data.headingSize;

data.paragraphSize =
req.body.paragraphSize ||
data.paragraphSize;

/* IMAGE 1 */

if (getFile("image1")) {

data.image1 =
getFile("image1");

}

/* IMAGE 2 */

if (getFile("image2")) {

data.image2 =
getFile("image2");

}

/* CARD 1 */

data.card1Title =
req.body.card1Title ||
data.card1Title;

if (getFile("card1Icon")) {

data.card1Icon =
getFile("card1Icon");

}

/* CARD 2 */

data.card2Title =
req.body.card2Title ||
data.card2Title;

if (getFile("card2Icon")) {

data.card2Icon =
getFile("card2Icon");

}

/* CARD 3 */

data.card3Title =
req.body.card3Title ||
data.card3Title;

if (getFile("card3Icon")) {

data.card3Icon =
getFile("card3Icon");

}

/* CARD 4 */

data.card4Title =
req.body.card4Title ||
data.card4Title;

if (getFile("card4Icon")) {

data.card4Icon =
getFile("card4Icon");

}

}

await data.save();

res.json({

success: true,

message:
"NEAB Updated Successfully",

data,

});

} catch (error) {

console.log(
"NEAB ERROR =>",
error
);

res.status(500).json({

success: false,

message:
error.message,

});

}

}

);

export default router;