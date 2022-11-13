import express from "express";
import {
  authUser,
  registerUser,
  getUsers,
  addUser,
  addAddress,
  getDetails,
  createComplaint,
  getComplaints,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.put("/newUser", protect, addUser);
router.put("/address", protect, addAddress);
router.get("/details", protect, getDetails);
router
  .route("/complaint")
  .post(protect, admin, createComplaint)
  .get(getComplaints);

export default router;
