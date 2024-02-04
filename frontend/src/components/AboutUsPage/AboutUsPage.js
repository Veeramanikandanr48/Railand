import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AboutUsPage = () => {
  return (
    <Container className="mt-5 text-center">
      <Row>
        <Col>
          <h2 className="mb-4">About Digital Pulse Marketing</h2>
          <p>
            Welcome to Digital Pulse Marketing, an award-winning digital marketing company dedicated to delivering exceptional results and cultivating enduring relationships with our clients. Our mission is to empower businesses across diverse industries, elevate their marketing strategies, and achieve unparalleled success in the digital realm.
          </p>
          <p>
            At Digital Pulse Marketing, every pulse resonates with the promise of unparalleled success. We take pride in being the trusted partner for businesses seeking to thrive in the digital landscape, whether you're a burgeoning startup or a well-established franchise.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Who We Are</h2>
          <p className="lead">Your Trusted Digital Marketing Partner</p>
          <p>
            Digital Pulse Marketing Agency is an award-winning digital marketing company that offers a full spectrum of data-driven web marketing services. We develop growth-oriented online marketing campaigns that make a positive impact on businesses.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Dedicated to Your Success</h2>
          <p>
            Founded in 2024 by Veeramanikandan, Digital Pulse Marketing is deeply committed to empowering businesses across diverse industries to elevate their marketing strategies and achieve unparalleled success in the digital realm. What began as a solitary endeavor has evolved into a dynamic full-service digital marketing agency, catering to the needs of countless enterprises worldwide.
          </p>
          <p>
            As we expand our horizons, we remain steadfast in our commitment to innovation and excellence. Join us at Digital Pulse Marketing, where every pulse resonates with the promise of unparalleled success.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Your Premier Digital Marketing Partners</h2>
          <p>
            At Digital Pulse Marketing, we take pride in our team of seasoned digital marketing experts who excel in every aspect of web marketing: strategic planning, creative innovation, and technical mastery. As pioneers in the digital marketing realm, Digital Pulse Marketing boasts a dedicated team of over 10 highly skilled professionals. Our collaborative approach ensures seamless campaign development and execution for our esteemed clients.
          </p>
          <p>
            Trust us to craft bespoke web solutions that align perfectly with your strategic objectives, driving long-term success for your business.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Our History</h2>
          <p>
            Digital Pulse Marketing was founded by Veeramanikandan. Veeramanikandan's journey into entrepreneurship was ignited by a deep-seated passion for business and technology. Recognizing the transformative power of technology, he sought to harness its potential to drive positive change and innovation.
          </p>
          <p>
            The Digital Marketing Pulse was started in 2024 as a startup with a small team with high passion and skills solving problems and increasing customer satisfaction as their key goal. In the future, we are planning to expand our service to other countries.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Meet Our Team</h2>
          <p>
            Our dedicated team consists of over 10 highly skilled professionals who are passionate about digital marketing. Each team member brings a unique set of skills and expertise to ensure the success of your digital marketing campaigns.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Looking to Increase your Business?</h2>
          <p>
            Whether you're seeking assistance with strategy, content marketing, search engine optimization, or any other aspect, we're here to lend a hand. Let us know your needs, and we'll promptly respond to help you elevate your business to new heights.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Empower Your Business</h2>
          {/* Use Bootstrap Button component */}
          <Button variant="primary" size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
