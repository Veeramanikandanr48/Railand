// controllers/blogController.js
const BlogPost = require("../../models/BlogPost");

exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogPost.findById(id);

    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json(blogPost);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createBlogPost = async (req, res) => {
  try {
    const { title, content, author, imageUrl} = req.body;

    if (!title || !content || !author || !imageUrl) {
      return res.status(400).json({ error: "Title, content, and author are required fields." });
    }

    const newBlogPost = new BlogPost({ title, content, author, imageUrl });
    await newBlogPost.save();

    res.json({ message: "Blog post created successfully", blogPost: newBlogPost });
  } catch (error) {
    console.error("Error creating blog post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author, imageUrl} = req.body;

    if (!title || !content || !author || !imageUrl) {
      return res.status(400).json({ error: "Title, content, and author are required fields." });
    }

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedBlogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json({ message: "Blog post updated successfully", blogPost: updatedBlogPost });
  } catch (error) {
    console.error("Error updating blog post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);

    if (!deletedBlogPost) {
      return res.status(404).json({ error: "Blog post not found" });
    }

    res.json({ message: "Blog post deleted successfully", blogPost: deletedBlogPost });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
