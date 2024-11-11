const express = require("express");
const { getAllExams, createExam } = require("../controllers/examController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllExams);
router.post("/", authMiddleware, createExam);

module.exports = router;
