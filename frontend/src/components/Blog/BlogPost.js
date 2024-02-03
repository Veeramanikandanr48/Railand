import React, { useState, useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import { useParams } from 'react-router-dom';
import moment from 'moment'; // Import moment for date formatting
import './Blog.css'; // Import a custom CSS file for additional styling
import api from '../../config';

const BlogPostDetail = () => {
  const [blogPost, setBlogPost] = useState({});
  const { id } = useParams();
  console.log(blogPost);

  useEffect(() => {
    // Fetch the specific blog post based on the id parameter
    fetch(`${api}/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data))
      .catch((error) => console.error('Error fetching blog post details:', error));
  }, [id]); // Include id in the dependency array to re-fetch when the id changes

  return (
    <Container className="attach mt-5 min-vh-100">
      <Card className="blog-detail-card mt-5 border-0">
        {/* Image styling with a responsive class */}
        <div className='d-flex justify-content-center'>
        <Card.Img variant="top" src={blogPost.imageUrl} className="blog-detail-img img-fluid" /></div>
        <Card.Body>
          <Card.Title className="mb-3">
            {/* Title styling with text-uppercase */}
            {blogPost.title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {/* Author and date styling */}
            by {blogPost.author} | {moment(blogPost.createdAt).format('MMM D, YYYY h:mm A')}
          </Card.Subtitle>
          <div className="blog-content">
            {/* Content styling with additional class for customization */}
            <ReactQuill
              readOnly
              theme="snow"
              value={blogPost.content || ''}
              modules={{
                toolbar: false, // Disable the toolbar for read-only mode
              }}
              className="border-0" // Apply a border-0 class to override default styles
            />
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BlogPostDetail;
