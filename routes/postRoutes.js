import express from "express";
import protectRoute from "../middlewares/authMiddleware.js";
import {
  createPost,
  deletePost,
  getAllPosts,
  updatePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.post("/create", protectRoute, createPost);
router.patch("/update/:postId", protectRoute, updatePost);
router.delete("/:postId", protectRoute, deletePost);

export default router;
