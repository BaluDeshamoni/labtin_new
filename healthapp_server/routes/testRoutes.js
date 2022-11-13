import express from "express";

import {
  getTests,
  createTest,
  editTest,
  addHighlightTest,
} from "../controllers/TestsController.js";

const router = express.Router();

router.get("/", getTests);
router.post("/", createTest);
router.put("/", editTest);
router.put("/highlight", addHighlightTest);

export default router;
