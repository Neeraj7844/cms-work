import mongoose from "mongoose";

const achievementSchema =
  new mongoose.Schema({

    heading: {
      type: String,
      default: "",
    },



    paragraph: {
      type: String,
      default: "",
    },



    cards: [

      {

        icon: {
          type: String,
          default: "",
        },



        image: {
          type: String,
          default: "",
        },



        number: {
          type: Number,
          default: 0,
        },



        text: {
          type: String,
          default: "",
        },



        iconBg: {
          type: String,
          default:
            "linear-gradient(135deg,#ff9966,#ff3366)",
        },

      },

    ],

  });

const Achievement =
  mongoose.model(
    "Achievement",
    achievementSchema
  );

export default Achievement;