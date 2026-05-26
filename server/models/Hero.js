import mongoose from "mongoose";

const heroSchema =
  new mongoose.Schema({

    // TEXT
    heading: {
      type: String,
      default: "",
    },



    paragraph: {
      type: String,
      default: "",
    },




    // HEADING STYLE
    headingSize: {
      type: String,
      default: "70",
    },



    headingWeight: {
      type: String,
      default: "700",
    },



    headingColor: {
      type: String,
      default: "#ffffff",
    },





    // PARAGRAPH STYLE
    paragraphSize: {
      type: String,
      default: "20",
    },



    paragraphWeight: {
      type: String,
      default: "400",
    },



    paragraphColor: {
      type: String,
      default: "#ffffff",
    },

  },

  {
    timestamps: true,
  }

);

const Hero = mongoose.model(
  "Hero",
  heroSchema
);

export default Hero;