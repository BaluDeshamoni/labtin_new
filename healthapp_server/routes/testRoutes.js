import express from "express";

import {
  getTests,
  createTest,
  editTest,
  addHighlightTest,
  getPackagesTests,
} from "../controllers/TestsController.js";

const router = express.Router();

router.get("/", getTests);
router.post("/", createTest);
router.put("/", editTest);
router.put("/highlight", addHighlightTest);
router.get("/filter/:keyword", getPackagesTests);

export default router;
