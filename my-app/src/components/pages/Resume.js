import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/Resume.css';

const Resume = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center" style={{color: 'white'}}>Resume</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                <strong>Full Stack Web Development Bootcamp</strong>
                <br />
                University of Central Florida, 2023
                </Card.Text>
              <Card.Text>
                <strong>Associate in Arts</strong>
                <br />
                Chain of Lakes Collegiate High School, 2014 - 2016
              </Card.Text>
                <Card.Text>
                    <strong>High School Diploma</strong>
                    <br />
                    Chain of Lakes Collegiate High School, 2014 - 2016
                </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4" style={{width: '250px'}}>
            <Card.Body>
              <Card.Title>Skills</Card.Title>
              <Card.Text>
                <ul>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>HTML/CSS</li>
                  <li>Git/GitHub</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Card.Body>
              <Card.Title>Experience</Card.Title>
              <Card.Text>
                <strong>Software Engineer Intern</strong>
                <br />
                Company XYZ, Summer 2023
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-4" style={{width: '250px'}}>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                <ul>
                  <li>Project 1</li>
                  <li>Project 2</li>
                  <li>Project 3</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
