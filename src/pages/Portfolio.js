import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Coding from "../components/Coding";
import AdTech from "../components/AdTech";
import Resume from "../components/Resume";
import Design from "../components/Design";

function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-6 lg-6 sm-6">
            <Resume />
            <Coding />
          </Col>
          <Col size="md-6 lg-6 sm-6">
            <AdTech />
            <Design />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
