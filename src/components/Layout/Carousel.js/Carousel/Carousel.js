import React, { Component } from 'react';
// import carouselProperties from '../data/carouselData';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Carousel extends Component {
  state = {}
  render() {
    return (
      // Carousel starts Here 
      <section className="slider">
        <LeftArrow />
        <RightArrow />
      </section>
    );
    // Carousel Ends Here Here 
  }
}

export default Carousel;