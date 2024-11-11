// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const db = require("../config/db");

// // Admin Registration
// exports.adminRegister = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const sql = `INSERT INTO admins (email, password) VALUES (?, ?)`; // Use consistent table name

//     db.query(sql, [email, hashedPassword], (err, result) => {
//       if (err) {
//         console.error("Error registering admin:", err); // Log the error
//         return res.status(500).json({ message: "Error registering admin" });
//       }
//       console.log("Registration successful:", result); // Log success
//       res
//         .status(201)
//         .json({ message: "Admin registered successfully", result });
//     });
//   } catch (error) {
//     console.error("Error hashing password:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Admin Login
// exports.adminLogin = async (req, res) => {
//   const { email, password } = req.body;

//   db.query(
//     `SELECT * FROM admins WHERE email = ?`, // Ensure this matches your table
//     [email],
//     async (err, result) => {
//       if (err) {
//         console.error("Error logging in:", err); // Log the error
//         return res.status(500).json({ message: "Error logging in" });
//       }
//       if (result.length === 0) {
//         return res.status(400).json({ message: "Admin not found" });
//       }

//       const admin = result[0];
//       const isMatch = await bcrypt.compare(password, admin.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: "Invalid Credentials" });
//       }

//       const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
//         expiresIn: "1h",
//       });
//       res.json({ token });
//     }
//   );
// };

exports.adminLogin = async (req, res) => {
  const { email, password } = req.body;

  db.query(
    `SELECT * FROM admins WHERE email = ?`,
    [email],
    async (err, result) => {
      if (err) return res.status(500).send("Error logging in");
      if (result.length === 0) return res.status(400).send("Admin not found");

      const admin = result[0];
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) return res.status(400).send("Invalid Credentials");

      // Generate a JWT token
      const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });

      // Return only the token
      res.json({ message: "Login successful", token });
    }
  );
};
