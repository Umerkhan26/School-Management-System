const db = require("../config/db");

exports.markAttendance = (req, res) => {
  const { student_id, date, status } = req.body;
  const sql = `INSERT INTO attendance (student_id, date, status) VALUES (?, ?, ?)`;
  db.query(sql, [student_id, date, status], (err, result) => {
    if (err) return res.status(500).send("Error marking attendance");
    res.send("Attendance marked successfully");
  });
};

exports.getAttendanceByStudent = (req, res) => {
  const { studentId } = req.params;
  const sql = `SELECT * FROM attendance WHERE student_id = ?`;
  db.query(sql, [studentId], (err, results) => {
    if (err) return res.status(500).send("Error fetching attendance");
    res.json(results);
  });
};
