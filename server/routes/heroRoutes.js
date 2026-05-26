import express from "express";

import {

  getHeroData,

  updateHeroData,

} from "../controllers/heroController.js";

const router =
  express.Router();




// GET HERO
router.get(
  "/",
  getHeroData
);




// UPDATE HERO
router.put(
  "/",
  updateHeroData
);




export default router;