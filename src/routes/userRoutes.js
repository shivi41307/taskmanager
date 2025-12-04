import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
     getProfile,
  updateProfile,
  changePassword,
  updateAvatar,
  deleteAccount
} from "../controllers/userController.js";

const router = express.Router();

router.get("/me", auth, getProfile);
router.put("/update", auth, updateProfile);
router.put("/password", auth, changePassword);
router.put("/avatar", auth, updateAvatar);
router.delete("/delete", auth, deleteAccount)
export default router;
