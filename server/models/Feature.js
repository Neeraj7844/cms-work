import mongoose from "mongoose";

const featureSchema =
  new mongoose.Schema({

    heading: String,

    description: String,



    cards: [

      {

        icon: String,

        image: String,



        title: String,

        text: String,



        titleSize: String,

        titleWeight: String,

        titleColor: String,



        textSize: String,

        textWeight: String,

        textColor: String,

      },

    ],

  });

const Feature = mongoose.model(
  "Feature",
  featureSchema
);

export default Feature;