import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import api from "../../config";

const LandingPage = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from the API
    fetch(`${api}/blogs`)
      .then((response) => response.json())
      .then((data) => setLatestBlogs(data.slice(0, 3)))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const handleScroll = () => {
    const targetElement = document.getElementById('blogs');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Top Section */}
      <section id="intro" className="home-intro">
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <h1 className="intro-title title">
                Identify. <span className="text-overlay">Create.</span> Disrupt.
              </h1>
              <div className="intpro-content">
                <p>
                  In other words, we help your brand get the traction and reach
                  it deserves. Find more customers, unearth new opportunities
                  for growth.
                </p>
                <Button className="btn btn-contact btn-pill btn-blue btn-lg">
                  Let's Talk
                </Button>
              </div>
            </Col>
            <Col md={1}></Col>
            <Col md={6} className="hero-img">
              <img
                src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1706954714/uploads/rai/cygmbowumcgiihfqj7vq.png"
                width="90%"
                alt="web-img"
              />
            </Col>
          </Row>
          <div
            id="scrollDown"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            <span className="icon"></span>
            <span className="text">Scroll down</span>
          </div>
        </Container>
      </section>

      <section id="whatWeDo" className="what-we-do-section text-center py-5">
        <Container>
          <h2 className="mb-5">What We Do</h2>
          <Row className="justify-content-center">
            {/* Service Card 1 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Search Engine Optimization</h3>
                <p>
                  We help you improve your Google ranking and increase your
                  organic (non-paid) website traffic. SEO is more than just
                  incorporating keywords and we can help to optimize all elements.
                </p>
              </div>
            </Col>

            {/* Service Card 2 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Search Engine Advertising</h3>
                <p>
                  Search engine advertising, also known as pay-per-click
                  advertising, helps you reach new customers and guarantees a
                  consistent traffic flow to your website.
                </p>
              </div>
            </Col>

            {/* Service Card 3 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Web Development & Design</h3>
                <p>
                  Websites are the essence of your online presence. We will create
                  a functional website that is customized for your business and
                  drives results. All of our websites include SEO and lead
                  generation tools.
                </p>
              </div>
            </Col>

            {/* Service Card 4 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Social Media Marketing</h3>
                <p>
                  We help you with social media management and advertising to
                  help you grow your business and reach new clients.
                </p>
              </div>
            </Col>

            {/* Service Card 5 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Content Marketing</h3>
                <p>
                  Content marketing helps you increase online visibility, traffic,
                  and brand awareness. We offer effective SEO-copywriting that
                  resonates with your target audience.
                </p>
              </div>
            </Col>

            {/* Service Card 6 */}
            <Col md={4} className="mb-4">
              <div className="service-card">
                <h3>Digital Marketing Strategy</h3>
                <p>
                  Get your own digital marketing strategy built from scratch.
                  Schedule a free consultation to get started.
                </p>
              </div>
            </Col>

          </Row>

          {/* "Show More" Button */}
          <Button variant="outline-primary" className="mt-4">
            Explore Our Services
          </Button>
        </Container>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="blog-section text-center py-5">
        <Container>
          <h2 className="text-center mb-4">Latest Blogs</h2>
          <Row className="mb-4">
            {latestBlogs.map((blog, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                xs={12}
              >
                <Card className="blog-card" style={{ minHeight: "350px" }}>
                  <Card.Img
                    variant="top"
                    src={blog.imageUrl}
                    className="blog-img"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{blog.title}</Card.Title>
                    <Link to="/blog">
                      <Button variant="primary">Read More</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
