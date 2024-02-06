const investmentsController = require("../controller/investment.controller");
const router = require('express').Router()
// Investment Routes
router.post("/api/investments/add", investmentsController.add);

module.exports = router