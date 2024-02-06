require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const {IsAuth} = require("./config/middleware")
const {connectDB} = require("./config/database")
const PORT = process.env.PORT || 8000;


// Database setup
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const isLoginOrRegisterRoute = req.path === "/api/login" || req.path === "/api/register" || req.path === "/api/auth/reset-password";
  if (!isLoginOrRegisterRoute) {
    IsAuth(req, res, next);
  } else {
    next();
  }
});

// Include route files
app.use(require('./routes/authRoutes'));
app.use(require('./routes/incomeRoutes'));
app.use(require('./routes/expenseRoutes'));
app.use(require('./routes/goalRoutes'));
app.use(require('./routes/investmentRoutes'));
app.use(require('./routes/transactionRoutes'));
app.use(require('./routes/dashboardRoutes'));

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
