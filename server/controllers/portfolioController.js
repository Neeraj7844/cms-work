// controllers/portfolioController.js

import Portfolio from "../models/Portfolio.js";


// GET ALL
export const getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.find();

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// CREATE
export const createPortfolio = async (req, res) => {
  try {
    const count = await Portfolio.countDocuments();

    const portfolio = new Portfolio({
      ...req.body,
      cardNumber: count + 1,
    });

    await portfolio.save();

    res.status(201).json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// UPDATE
export const updatePortfolio = async (req, res) => {
  try {
    const updated = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// DELETE
export const deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);

    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};