const Expense = require("../models/expense.model");

exports.add = async (req, res) => {
  req.body.userId = req.user.id;

  try {
    const expense = new Expense(req.body);
    await expense.save();
    res.status(201).json({ message: "expense added successfully", expense });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding expense" });
  }
};

// Get a list of income entries
exports.list = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.id });
    res.status(200).json(expenses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching expense entries" });
  }
};

exports.categories = async (req, res) => {
  let query = req.params.categories;
  try {
    const expenses = await Expense.find({
      category: query,
      userId: req.user.id,
    });
    res.status(200).json(expenses);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching expense entries" });
  }
};

exports.particularExpense = async (req, res) => {
  try {
    const expense = await Expense.findById({ _id: req.params.id });
    res.status(200).json(expense);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching expense detail" });
  }
};
exports.deleteExpense = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndRemove(req.params.id);

    if (!deletedExpense) {
      return res
        .status(404)
        .json({ success: false, error: "Expense not found" });
    }

    res.status(200).json({
      success: true,
      message: "Expense deleted successfully",
      expense: deletedExpense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error deleting expense",
      errorMessage: error.message,
    });
  }
};

exports.updateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedExpense) {
      return res
        .status(404)
        .json({ success: false, error: "Expense not found" });
    }

    res.status(200).json({
      success: true,
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error updating expense",
      errorMessage: error.message,
    });
  }
};
