import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ContactForm from "../components/ContactForm"

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
