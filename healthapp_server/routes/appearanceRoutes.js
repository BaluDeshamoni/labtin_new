import express from "express";
import {
  createBanner,
  createScrollmenu,
  editScrollmenu,
  getBanners,
  getScrollmenu,
  getScrollmenus,
} from "../controllers/appearanceController.js";
const router = express.Router();

router.get("/banner", getBanners);
router.post("/banner", createBanner);
router.get("/scrollmenu", getScrollmenus);
router.get("/scrollmenu/:id", getScrollmenu);
router.post("/scrollmenu", createScrollmenu);
router.put("/scrollmenu", editScrollmenu);

export default router;
