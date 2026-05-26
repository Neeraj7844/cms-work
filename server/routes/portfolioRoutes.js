// routes/portfolioRoutes.js

import express from "express";

import {
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/", getPortfolio);

router.post("/", createPortfolio);

router.put("/:id", updatePortfolio);

router.delete("/:id", deletePortfolio);

export default router;