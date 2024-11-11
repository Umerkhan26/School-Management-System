const express = require("express");
const {
  getAllStudents,
  createStudent,
} = require("../controllers/studentController");
const authMiddleware = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.get("/", authMiddleware, getAllStudents);
router.post("/", authMiddleware, createStudent);

module.exports = router;
