import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Sunga Ting</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic"/>
            <h3>Ting Guy</h3>
            <p>This ting go braaaaaap and dat ting go BRAAAAAPPPPPP SKIDDY BAP</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic"/>
            <h3>Ting Girl</h3>
            <p>This ting go braaaaaap and dat ting go BRAAAAAPPPPPP SKIDDY BAP</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic"/>
            <h3>Ting Dude</h3>
            <p>This ting go braaaaaap and dat ting go BRAAAAAPPPPPP SKIDDY BAP</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
