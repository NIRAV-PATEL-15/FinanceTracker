const incomeController = require("../controller/income.controller");
const router = require('express').Router()
// Income Routes
router.post('/api/income/add', incomeController.add);
router.get('/api/income/list', incomeController.list);

module.exports = router