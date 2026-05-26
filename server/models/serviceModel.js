import mongoose from "mongoose";

const serviceSchema =
  new mongoose.Schema({

    tag: String,

    heading: String,

    paragraph: String,



    cards: [

      {

        icon: String,

        image: String,



        title: String,

        text: String,



        iconBg: String,

      },

    ],

  });

const Service =
  mongoose.model(
    "Service",
    serviceSchema
  );

export default Service;