const db = require("../config/db");

exports.getAllExams = (req, res) => {
  db.query("SELECT * FROM exams", (err, results) => {
    if (err) return res.status(500).send("Error fetching exams");
    res.json(results);
  });
};

exports.createExam = (req, res) => {
  const { exam_name, exam_date } = req.body;
  const sql = `INSERT INTO exams (exam_name, exam_date) VALUES (?, ?)`;
  db.query(sql, [exam_name, exam_date], (err, result) => {
    if (err) return res.status(500).send("Error creating exam");
    res.send("Exam created successfully");
  });
};
