import express from "express";

import {

  getAchievement,

  updateAchievement,

} from "../controllers/achievementController.js";

const router =
  express.Router();




router.get(
  "/",
  getAchievement
);




router.put(
  "/",
  updateAchievement
);




export default router;