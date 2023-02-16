import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainPage from '../MainPage/MainPage.js';
import '../MainPage/MainPage.css';
import SidePage from '../SidePage/SidePage.js';
import { FaCircleUser, FaBell } from 'react-icons';

const Common = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} style={{ backgroundColor: '#3b3b42', color: 'white' }}>
          <SidePage />
        </Col>
        <Col lg={10} style={{ backgroundColor: '#f0f2f5', height: '110vh' }}>
          <MainPage />
        </Col>
      </Row>
    </Container>
  );
};

export default Common;
