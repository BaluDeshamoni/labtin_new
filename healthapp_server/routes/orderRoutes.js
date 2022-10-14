import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrders,
  uploadReports,
} from "../controllers/orderController.js";

import { admin, protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createOrder).get(protect, getMyOrders);
router.get("/all", protect, admin, getOrders);
router.put("/uploadReports", protect, admin, uploadReports);

export default router;
