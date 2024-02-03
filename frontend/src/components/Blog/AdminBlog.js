import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Container, Form, Button, ListGroup, Modal } from "react-bootstrap";
import api from "../../config";

const BlogTitleList = ({ blogTitles, onDelete, onModify }) => {
  return (
    <ListGroup className="mt-4">
      {blogTitles.map((title, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between align-items-center"
        >
          {title}
          <div>
            <Button
              variant="danger"
              className="mx-2"
              onClick={() => onDelete(index)}
            >
              Delete
            </Button>
            <Button variant="info" onClick={() => onModify(index)}>
              Modify
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

const AdminBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    imageUrl: "",
  });

  const [blogTitles, setBlogTitles] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchBlogTitles();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      fetchBlogTitles();
      setFormData({ title: "", content: "", author: "", imageUrl: "" });
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  const fetchBlogTitles = async () => {
    try {
      const response = await fetch(`${api}/blogs`);
      const data = await response.json();
      setBlogTitles(data.map((blog) => blog.title));
    } catch (error) {
      console.error("Error fetching blog titles:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`${api}/blogs`);
      const data = await response.json();
      const blogIdToDelete = data.find(
        (blog) => blog.title === blogTitles[index]
      );

      await fetch(`${api}/blogs/${blogIdToDelete._id}`, {
        method: "DELETE",
      });

      fetchBlogTitles();
    } catch (error) {
      console.error(`Error deleting blog at index ${index}:`, error);
    }
  };

  const handleModify = async (index) => {
    try {
      const response = await fetch(`${api}/blogs`);
      const data = await response.json();
      const blogToModify = data.find(
        (blog) => blog.title === blogTitles[index]
      );

      // Set the selected blog data and open the modal
      setSelectedBlog(blogToModify);
      setFormData({
        title: blogToModify.title,
        content: blogToModify.content,
        author: blogToModify.author,
        imageUrl: blogToModify.imageUrl,
      });
      setShowModal(true);
    } catch (error) {
      console.error(`Error modifying blog at index ${index}:`, error);
    }
  };

  const handleUpdateBlog = async () => {
    try {
      // Remove <p> tags from the content
      const sanitizedContent = formData.content.replace(/<\/?p>/g, "");

      const updatedBlogData = {
        title: formData.title,
        content: sanitizedContent,
        author: formData.author,
        imageUrl: formData.imageUrl,
      };

      // Fetch the blog ID based on the selected title
      const response = await fetch(`${api}/blogs`);
      const data = await response.json();
      const blogToUpdate = data.find((blog) => blog.title === selectedBlog.title);

      // Update the blog based on the ID
      const updateResponse = await fetch(
        `${api}/blogs/${blogToUpdate._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBlogData),
        }
      );

      if (updateResponse.ok) {
        console.log("Blog updated successfully");
        // Optionally, fetch updated blog titles after updating a blog
        fetchBlogTitles();
        // Close the modal after updating
        setShowModal(false);
      } else {
        console.error("Failed to update blog");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admin Blog Panel</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            theme="snow"
            value={formData.content}
            onChange={(value) => setFormData({ ...formData, content: value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Blog
        </Button>
      </Form>

      <BlogTitleList
        blogTitles={blogTitles}
        onDelete={handleDelete}
        onModify={handleModify}
      />

      {/* Update Blog Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Include title in the modal form */}
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="content">
              <Form.Label>Blog Content</Form.Label>
              <ReactQuill
                theme="snow"
                value={formData.content || ""}
                onChange={(value) =>
                  setFormData({ ...formData, content: value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" onClick={handleUpdateBlog}>
              Update Blog
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminBlog;
