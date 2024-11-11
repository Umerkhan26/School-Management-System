const express = require("express");
const {
  getFeeStatus,
  updateFeeStatus,
} = require("../controllers/feeController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/:studentId", authMiddleware, getFeeStatus);
router.put("/:studentId", authMiddleware, updateFeeStatus);

module.exports = router;
