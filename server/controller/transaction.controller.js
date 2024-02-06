// Assuming you have Expense and Income models
const Expense = require('../models/expense.model');
const Income = require('../models/income.model');

// Function to list all transactions (merged expenses and incomes)
exports.list = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Fetch expenses and incomes based on the user ID
    const expenses = await Expense.find({ userId });
    const incomes = await Income.find({ userId });

    // Merge the transactions
    const transactions = [...expenses, ...incomes];

    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to get details of a specific transaction
exports.getTransactionDetails = async (req, res) => {
    try {
      // Assuming transactionId is a parameter in the request
      const transactionId = req.params.transactionId;
  
      // Fetch details of the specific transaction
      const expense = await Expense.findById(transactionId);
      const income = await Income.findById(transactionId);
  
      if (expense) {
        res.json(expense);
      } else if (income) {
        res.json(income);
      } else {
        // If no transaction found, return an error
        res.status(404).json({ error: 'Transaction not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };