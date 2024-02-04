import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform client-side validation here if needed

    // Send form data to the server
    const formData = { name, email, message };

    try {
      const response = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Handle the response from the server
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="contact-container mt-5">
      <Row>
        <Col md={12} lg={6} className="landing-contact-container p-5">
          <div className="landing-contact-details-container">
            <h1 className="landing-contact-heading">CONTACT US</h1>
            <p className="landing-contact-para">
              Whether you are looking for help with strategy, search engine
              optimization, content marketing, or something else, we would love
              to help. Send us a message, and we will get back to you as soon as
              possible.
            </p>
            <ul className="address-list" type="none">
              <li className="address-detials">
                <div>
                  <h1 className="address-heading">Address</h1>
                  <p className="">
                    12th floor Brooklyn Tower, Next to YMCA club, SG Highway,
                    Ahmedabad 380015
                  </p>
                </div>
              </li>
              <li className="address-detials">
                <div>
                  <h1 className="address-heading">Email</h1>
                  <p className="common-text">
                    <a
                      href="mailto:info@digitalpulsemarketing.com"
                      className="mail"
                    >
                      testnodemailerrai@gmail.com
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12} lg={6} className="contact-landing-image-container p-0">
          {/* Add your image component here */}
          <img
            src="https://res.cloudinary.com/dkmnh0kwl/image/upload/v1706959718/search_engine_advertising-1_kupncz.jpg"
            className="contact-landing-image img-fluid"
            alt="Contact Landing"
          />
        </Col>
      </Row>

      <Form
        className="form-submission p-5"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}
      >
        <h1 className="form-heading">GET IN TOUCH</h1>
        <hr className="horizontal-line" />
        <Row className="name-and-mail-container">
          <Col xs={12} sm={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows="7"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <div className="form-button-container">
          <Button
            type="submit"
            className="form-button"
            style={{ backgroundColor: "#007bff", borderColor: "#007bff" }}
          >
            SUBMIT MESSAGE
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default ContactUsForm;
