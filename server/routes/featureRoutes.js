import express from "express";

import {

  getFeatureData,

  updateFeatureData,

} from "../controllers/featureController.js";

const router =
  express.Router();




// GET
router.get(
  "/",
  getFeatureData
);




// UPDATE
router.put(
  "/",
  updateFeatureData
);




export default router;