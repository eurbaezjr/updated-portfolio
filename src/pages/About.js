import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://cdn.wallpapersafari.com/6/73/AJevQG.jpg">
        <h1>Eduardo Urbaez</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to My Portfolio Page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am a driven, creative and bilingual software engineer with leadership experience
            in the field of data-driven programmatic advertising. 
            </p>
            <p>
            Currently seeking product leadership roles with a focus on automation, algorithms, and efficiency solutions. 
             Proven ability to research, market, and manage multiple types of projects for local and international clients. 
            </p>
            <p>
            I'm currently employed at Horizon Media and my primary client is a movie studio called STX Entertainment. 
            My main aspiration is to mix my experience in data, marketing, design, and coding into synergetic solution on behalf of your organization. 
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
