const Goal = require("../models/goal.model");

exports.set = async (req, res) => {
  req.body.userId =  req.user.id;
  try {
    const goal = new Goal(req.body);
    await goal.save();
    res.status(201).json({ message: "Goal added successfully", goal });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while adding goal" });
  }
};

exports.list = async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.status(200).json(goals);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching goal entries" });
  }
};

exports.get = async (req, res) => {
  try {
    const goal = await Goal.findById({ _id: req.params.id });
    res.status(200).json(goal);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching goal entries" });
  }
};

exports.updateGoal = async (req, res) => {
  try {
    const updatedGoal = await Goal.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedGoal) {
      return res.status(404).json({ success: false, error: "Goal not found" });
    }

    res.status(200).json({ success: true, message: "Goal updated successfully", goal: updatedGoal });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error updating goal", errorMessage: error.message });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const deletedGoal = await Goal.findByIdAndRemove(req.params.id);

    if (!deletedGoal) {
      return res.status(404).json({ success: false, error: "Goal not found" });
    }

    res.status(200).json({ success: true, message: "Goal deleted successfully", goal: deletedGoal });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error deleting goal", errorMessage: error.message });
  }
};

