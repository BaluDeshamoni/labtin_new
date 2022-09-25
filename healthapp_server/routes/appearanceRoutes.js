import express from "express";
import {
  createBanner,
  createScrollmenu,
  getBanners,
  getScrollmenus,
} from "../controllers/appearanceController.js";
const router = express.Router();

router.get("/banner", getBanners);
router.post("/banner", createBanner);
router.get("/scrollmenu", getScrollmenus);
router.post("/scrollmenu", createScrollmenu);

export default router;
