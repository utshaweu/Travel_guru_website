import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import pageNotFound from '../../Assets/images/page-not-found.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container className="not-found">
      <Row>
        <Col lg={9} className="m-auto">
          <img src={pageNotFound} alt="" className="w-100"/>
          <h1>Page not found</h1>
          <p>404</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;