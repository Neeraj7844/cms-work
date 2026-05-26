import express from "express";

import {
getTestimonial,
updateTestimonial,
} from "../controllers/testimonialController.js";

const router=express.Router();

router.get("/",getTestimonial);

router.put("/",updateTestimonial);

export default router;