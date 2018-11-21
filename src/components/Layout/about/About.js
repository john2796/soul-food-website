import React, { Component } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  background: gray;
  padding-bottom: 86vh;
  

`

class About extends Component {
  state = {}
  render() {
    return (
      <AboutWrapper id="about" >
        <h1>testing</h1>
      </AboutWrapper>
    );
  }
}

export default About;