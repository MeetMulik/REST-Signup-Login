import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
  forgetPassword,
  resetPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);

export default router;
