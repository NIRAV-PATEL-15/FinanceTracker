const jwt = require("jsonwebtoken");
const IsAuth = function IsAuth(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  // console.log(token)
  if (!token) {
    return res.status(401).json({ message: "Missing authentication token" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid authentication token" });
    }

    req.user = decoded;
    next();
  });
};

module.exports = {IsAuth}
