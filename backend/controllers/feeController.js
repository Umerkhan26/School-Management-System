const db = require("../config/db");

exports.getFeeStatus = (req, res) => {
  const { studentId } = req.params;
  const sql = `SELECT * FROM fee_management WHERE student_id = ?`;
  db.query(sql, [studentId], (err, results) => {
    if (err) return res.status(500).send("Error fetching fee status");
    res.json(results);
  });
};

exports.updateFeeStatus = (req, res) => {
  const { studentId } = req.params;
  const { fee_status } = req.body;
  const sql = `UPDATE fee_management SET fee_status = ? WHERE student_id = ?`;
  db.query(sql, [fee_status, studentId], (err, result) => {
    if (err) return res.status(500).send("Error updating fee status");
    res.send("Fee status updated successfully");
  });
};
