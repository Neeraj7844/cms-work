import Form from "../models/Form.js";



// CREATE FORM

export const createForm = async (req, res) => {

  try {

    const {
      name,
      email,
      phone,
      service,
      message,
    } = req.body;



    if (
      !name ||
      !email ||
      !phone ||
      !service ||
      !message
    ) {

      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    }



    const newForm = new Form({
      name,
      email,
      phone,
      service,
      message,
    });

    await newForm.save();



    res.status(201).json({
      success: true,
      message: "Form Submitted Successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};




// GET ALL FORMS

export const getAllForms = async (req, res) => {

  try {

    const forms = await Form.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      forms,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};