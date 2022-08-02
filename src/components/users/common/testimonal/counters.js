import React from "react";
import './counters.css'
import {Container,Row,Col,Card} from 'react-bootstrap'

const Counters = () => {
  return (
    <Container className="counters">
      <Row className="g-3">
        <Col lg={6}>
          <Card>
            <Card.Body>
                <h2>350+</h2>
                <p>Cars for rent</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
        <Card>
            <Card.Body>
                <h2>6500+</h2>
                <p>Happy Clients</p>
            </Card.Body>
          </Card> 
        </Col>
        <Col lg={6}>
        <Card>
            <Card.Body>
                <h2>5000+</h2>
                <p>Positive Reviews</p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
        <Card>
            <Card.Body>
                <h2>600+</h2>
                <p>Drivers</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Counters;
