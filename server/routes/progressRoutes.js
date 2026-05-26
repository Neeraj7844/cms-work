import express from "express";

import {

  getProgress,

  updateProgress,

} from "../controllers/progressController.js";

const router =
  express.Router();




router.get(
  "/",
  getProgress
);




router.put(
  "/",
  updateProgress
);




export default router;