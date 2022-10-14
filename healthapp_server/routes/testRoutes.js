import express from "express";

import {
  getTests,
  createTest,
  editTest,
} from "../controllers/TestsController.js";

const router = express.Router();

router.get("/", getTests);
router.post("/", createTest);
router.put("/", editTest);

export default router;
