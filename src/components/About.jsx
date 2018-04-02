import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
            <h3>Ting da Bing</h3>
              <p>We don't want to set these clouds on fire. You can create the world you want to see and be a part of. You have that power. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul.</p>
              <p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. That's what painting is all about. It should make you feel good when you paint. So often we avoid running water, and running water is a lot of fun.</p>
              <p>Everybody's different. Trees are different. Let them all be individuals. Everything is happy if you choose to make it that way. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone.</p>
              <p>And right there you got an almighty cloud. It's hard to see things when you're too close. Take a step back and look. This is the way you take out your flustrations.</p>
          </Col>
        </Grid>
      </div>
    );
  }
}
