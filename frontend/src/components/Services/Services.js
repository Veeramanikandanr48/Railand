import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
import api from '../../config';

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services from the API
    fetch(`${api}/services`)
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  return (
    <Container className="mt-5 min-vh-100">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((service) => (
          <Col key={service._id} md={4} className="mb-4">
            <Card className="service-card">
              <Card.Body>
                <Card.Title className="service-title">{service.title}</Card.Title>
                <Card.Text className="service-description">{service.description}</Card.Text>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <Link to={`/services/${service._id}`}>
                  <Button variant="primary" className="service-button">Learn More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServicesPage;
