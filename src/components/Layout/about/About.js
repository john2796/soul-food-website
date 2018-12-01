import React, { Component } from 'react';
import styled from 'styled-components';
import aboutImage1 from '../../../assets/about-us-1.png';
import aboutImage2 from '../../../assets/about-us-2.png';
import aboutImage3 from '../../../assets/about-us-3.png';

const AboutWrapper = styled.section`
  background: gray;
  padding-bottom: 86vh;
  

`

const images = [
  { src: aboutImage1 },
  { src: aboutImage2 },
  { src: aboutImage3 },
]

// 1042 width screen size i'm first working on 
//font-family: 'Great Vibes', cursive;

class About extends Component {
  state = {}
  render() {

    return (
      <AboutWrapper id="about" >
        <div className="about_title">
          <h1>about us</h1>
          <p>We love restaurants as much as you do. That’s why we’ve been helping them fill tables since 1999. Welcome to elixir restaurant</p>
        </div>

        <div className="about_history">
          <div className="about_history-content">
            <p>The <span className="gold">History of Kitchens</span> and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword</p>
            <p>According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in <span className="gold">Boulanger</span> dates back to a history of food seminar in Paris in the mid-1990s</p>
          </div>
          <div className="about_history-images">
            <img src={images.src} alt="about-history" />
          </div>
        </div>
      </AboutWrapper>
    );
  }
}

export default About;