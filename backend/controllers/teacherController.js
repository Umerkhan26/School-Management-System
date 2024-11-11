const db = require("../config/db");

exports.getAllTeachers = (req, res) => {
  db.query("SELECT * FROM teachers", (err, results) => {
    if (err) return res.status(500).send("Error fetching teachers");
    res.json(results);
  });
};

exports.createTeacher = (req, res) => {
  const { name, email, password, subject } = req.body;
  const sql = `INSERT INTO teachers (name, email, password, subject) VALUES (?, ?, ?, ?)`;
  db.query(sql, [name, email, password, subject], (err, result) => {
    if (err) return res.status(500).send("Error creating teacher");
    res.send("Teacher created successfully");
  });
};
