const express = require("express");
const {
  markAttendance,
  getAttendanceByStudent,
} = require("../controllers/attendanceController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, markAttendance);
router.get("/:studentId", authMiddleware, getAttendanceByStudent);

module.exports = router;
