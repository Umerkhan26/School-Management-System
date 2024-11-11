const express = require("express");
const router = express.Router();

// Define the login route
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Add login logic here (authentication, token generation, etc.)
  res.json({ message: "Login successful", user: { username, password } });
});

module.exports = router; // Export the router properly
