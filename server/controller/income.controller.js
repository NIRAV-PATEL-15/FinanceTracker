// Import the Income model
const Income = require('../models/income.model');

// Add income
exports.add = async (req, res) => {
  req.body.userId = req.user.id;
  try {
    const income = new Income(req.body);
    await income.save();
    res.status(201).json({ message: 'Income added successfully', income });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding income' });
  }
};

// Get a list of income entries
exports.list = async (req, res) => {
  try {
    const incomes = await Income.find({ user: req.user.id });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching income entries' });
  }
};

