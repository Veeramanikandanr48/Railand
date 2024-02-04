import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import api from '../../config';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const YourServiceCardComponent = ({ service }) => {
  return (
    <Col xs={12} sm={6} md={6} lg={4} className="mb-4">
      <Link to={`/services/${service._id}`} className="nav-link">
        <Card className="service-card" style={{ minHeight: '280px' }}>
          <Card.Body>
            <h1 className="services-page-heading" style={{ fontSize: '1.5rem' }}>{service.serviceType}</h1>
            <p className="services-page-para" style={{ fontSize: '1rem' }}>{service.serviceOuterDescription}</p>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};



const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch services from the API
    fetch(`${api}/services`)
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5 min-vh-100">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="text-center">
        <ClipLoader color="#36D7B7" loading={loading} css={override} size={100} />
      </div>
      {!loading && (
        <Row>
          {services.map((service) => (
            <YourServiceCardComponent key={service._id} service={service} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ServicesPage;
