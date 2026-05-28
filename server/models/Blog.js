import mongoose from "mongoose";

const blogSchema =
new mongoose.Schema({

  heading:String,
  paragraph:String,

  blogs:[
    {

      image:String,

      contentBg:String,

      category:String,

      date:String,

      title:String,

      buttonColor:String,

    }
  ]

});

export default mongoose.model(
  "Blog",
  blogSchema
);