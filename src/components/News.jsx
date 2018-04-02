import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';


export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Absolutely no pressure. You are just a whisper floating across a mountain. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. There we go.</p>
              <p>You are only limited by your imagination. Maybe we got a few little happy bushes here, just covered with snow. Put light against light - you have nothing. Put dark against dark - you have nothing.</p>
              <p>As trees get older they lose their chlorophyll.</p>
              <p>Let's put a touch more of the magic here. The more we do this - the more it will do good things to our heart.</p>
              <p>How do you make a round circle with a square knife? That's your challenge for the day. That is when you can experience true joy, when you have no fear. Sometimes you learn more from your mistakes than you do from your masterpieces.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
                <p>Absolutely no pressure. You are just a whisper floating across a mountain. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world. There we go.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
