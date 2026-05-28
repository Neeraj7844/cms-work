import express from "express";

import multer from "multer";

import Blog from "../models/Blog.js";

const router = express.Router();

/* STORAGE */

const storage =
multer.diskStorage({

  destination:(req,file,cb)=>{

    cb(null,"uploads/");
  },

  filename:(req,file,cb)=>{

    cb(
      null,
      Date.now()+"-"+file.originalname
    );
  }

});

const upload = multer({storage});

/* GET */

router.get(
"/",
async(req,res)=>{

  try{

    const data =
    await Blog.findOne();

    res.json(data);

  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});

/* POST */

router.post(

"/",

upload.fields([

  {name:"image1"},
  {name:"image2"},
  {name:"image3"},

  {name:"contentBg1"},
  {name:"contentBg2"},
  {name:"contentBg3"},

]),

async(req,res)=>{

  try{

    const getFile=(name)=>{

      if(
        req.files &&
        req.files[name] &&
        req.files[name][0]
      ){

        return `http://localhost:5000/uploads/${req.files[name][0].filename}`;
      }

      return "";
    };

    let data =
    await Blog.findOne();

    const blogs=[

      {

        image:getFile("image1"),

        contentBg:getFile("contentBg1"),

        category:req.body.category1,

        date:req.body.date1,

        title:req.body.title1,

        buttonColor:req.body.buttonColor1,

      },

      {

        image:getFile("image2"),

        contentBg:getFile("contentBg2"),

        category:req.body.category2,

        date:req.body.date2,

        title:req.body.title2,

        buttonColor:req.body.buttonColor2,

      },

      {

        image:getFile("image3"),

        contentBg:getFile("contentBg3"),

        category:req.body.category3,

        date:req.body.date3,

        title:req.body.title3,

        buttonColor:req.body.buttonColor3,

      }

    ];

    if(!data){

      data = new Blog({

        heading:req.body.heading,

        paragraph:req.body.paragraph,

        blogs,

      });

    }else{

      data.heading =
      req.body.heading;

      data.paragraph =
      req.body.paragraph;

      data.blogs = blogs;

    }

    await data.save();

    res.json({
      success:true
    });

  }catch(error){

    console.log(error);

    res.status(500).json({
      message:error.message
    });

  }

});

export default router;