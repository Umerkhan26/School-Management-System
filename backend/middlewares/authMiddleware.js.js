const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    // Check if authorization header is provided
    const authHeader = req.headers["authorization"];

    // If no header is present, return an error
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // Ensure the format is correct (i.e., 'Bearer token')
    const token = authHeader.split(" ")[1];

    // If token is missing, return an error
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token missing from authorization header" });
    }

    // Verify token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Assign the decoded token data to req.user
    next(); // Call the next middleware
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Authentication failed", error: error.message });
  }
};

module.exports = authMiddleware;
