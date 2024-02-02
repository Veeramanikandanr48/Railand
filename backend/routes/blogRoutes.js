// routes/blogRoutes.js
const express = require("express");
const router = express.Router();
const blogController = require("./controllers/blogController");

// Define routes
router.get("/", blogController.getAllBlogPosts);
router.get("/:id", blogController.getBlogPostById);
router.post("/", blogController.createBlogPost);
router.put("/:id", blogController.updateBlogPost);
router.delete("/:id", blogController.deleteBlogPost);

module.exports = router;
