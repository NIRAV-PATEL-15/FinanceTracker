const expensesController = require("../controller/expense.controller");
const router = require('express').Router()
// Expenses Routes
router.post('/api/expenses/add', expensesController.add);
router.get('/api/expenses/list', expensesController.list);
router.get('/api/expenses/:categories', expensesController.categories);
router.get('/api/expenses/:id', expensesController.particularExpense);
router.put('/api/expenses/:id', expensesController.updateExpense);
router.delete('/api/expenses/:id', expensesController.deleteExpense);
module.exports = router

