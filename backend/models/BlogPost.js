// models/BlogPost.js
const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  imageUrl: String, // Add this line for the featured image URL
});

const BlogPost = mongoose.model("blogPosts", blogPostSchema);

module.exports = BlogPost;
