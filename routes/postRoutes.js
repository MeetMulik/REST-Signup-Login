import express from "express";
import protectRoute from "../middlewares/authMiddleware.js";
import {
  addComment,
  createPost,
  deleteComment,
  deletePost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  updatePost,
  likeUnlikePost,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/user/:userId", protectRoute, getPostsByUserId);
router.get("/:postId", getPostById);
router.post("/create", protectRoute, createPost);
router.patch("/update/:postId", protectRoute, updatePost);
router.delete("/:postId", protectRoute, deletePost);
router.post("/comment/:postId", protectRoute, addComment);
router.delete("/:postId/comment/:commentId", protectRoute, deleteComment);
router.put("/like/:postId", protectRoute, likeUnlikePost);

export default router;
