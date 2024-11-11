const express = require("express");
const {
  getAllTeachers,
  createTeacher,
} = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllTeachers);
router.post("/", authMiddleware, createTeacher);

module.exports = router;
