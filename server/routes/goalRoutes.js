const goalsController = require("../controller/goal.controller");
const router = require('express').Router()
// Financial Goals Routes
router.post("/api/goals/set", goalsController.set);
router.get("/api/goals/list", goalsController.list);
router.get("/api/goals/:id", goalsController.get);
router.put('/api/goals/:id', goalsController.updateGoal);
router.delete('/api/goals/:id', goalsController.deleteGoal);

module.exports = router