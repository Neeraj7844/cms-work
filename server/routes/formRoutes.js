import express from "express";

const router = express.Router();

import {
  createForm,
  getAllForms,
} from "../controllers/formController.js";



// CREATE FORM

router.post("/create", createForm);



// GET ALL FORMS

router.get("/all", getAllForms);



export default router;