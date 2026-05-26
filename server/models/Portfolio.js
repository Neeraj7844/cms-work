// models/Portfolio.js

import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },

  paragraph: {
    type: String,
    required: true,
  },

  headingStyle: {
    fontSize: {
      type: String,
      default: "24px",
    },

    fontWeight: {
      type: String,
      default: "700",
    },

    color: {
      type: String,
      default: "#000000",
    },
  },

  paragraphStyle: {
    fontSize: {
      type: String,
      default: "16px",
    },

    fontWeight: {
      type: String,
      default: "400",
    },

    color: {
      type: String,
      default: "#666666",
    },
  },

  cardNumber: {
    type: Number,
  },
});

export default mongoose.model("Portfolio", portfolioSchema);