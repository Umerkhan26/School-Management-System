const db = require("../config/db");

exports.getAllStudents = (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).send("Error fetching students");
    res.json(results);
  });
};

exports.createStudent = (req, res) => {
  const { name, roll_number, email, password } = req.body;
  const sql = `INSERT INTO students (name, roll_number, email, password) VALUES (?, ?, ?, ?)`;
  db.query(sql, [name, roll_number, email, password], (err, result) => {
    if (err) return res.status(500).send("Error creating student");
    res.send("Student created successfully");
  });
};
