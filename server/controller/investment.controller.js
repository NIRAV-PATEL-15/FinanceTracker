const Investment = require("../models/investment.model")


exports.add = async (req, res) => {
    try {
      const investment = new Investment(req.body);
      await investment.save();
      res.status(201).json({ message: "Investment added successfully", investment });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while adding Investment" });
    }
  };
  
  // Get a list of income entries
  exports.list = async (req, res) => {
    try {
      const investments = await Investment.find({ user: req.params.id });
      res.status(200).json(investments);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching Investment entries" });
    }
  };
  

  
  exports.particularInvestment = async (req, res) => {
    let query = req.params.id;
    try {
      const Investment = await Investment.find({ userId: query });
      res.status(200).json(Investment);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching Investment detail" });
    }
  };
  
