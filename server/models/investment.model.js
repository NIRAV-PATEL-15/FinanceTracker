const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }
});

module.exports = mongoose.model('Investment', InvestmentSchema);
