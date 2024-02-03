import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../config';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the API
    fetch(`${api}/blogs`)
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  const getFirstSentence = (text) => {
    const sanitizedContent = text.replace(/<\/?p>/,/<\/?h3>/g, "");
    const sentences = sanitizedContent.split(/[.!?]/);
    return sentences[0];
  };

  return (
    <Container className="p-4 min-vh-100">
      <h2 className="text-center mb-4">Latest Blogs</h2>
      <Row>
        {blogPosts.map((post) => (
          <Col key={post._id} md={4}>
            <Card className="blog-card m-2 p-2" style={{ minHeight: '350px' }}>
              <Card.Img variant="top" src={post.imageUrl} className="blog-img" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{getFirstSentence(post.content)}</Card.Text>
                <Link to={`/blog/${post._id}`}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogPage;
