const transactionsController = require("../controller/transaction.controller");
const router = require('express').Router()
// Transactions Routes
router.get("/api/transactions/list", transactionsController.list);
router.get("/api/transactions/:id", transactionsController.getTransactionDetails);
module.exports = router