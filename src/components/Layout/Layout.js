import React, { Component } from 'react';
import Header from './Header/Header';
import Carousel from './Carousel.js/Carousel/Carousel';




class Layout extends Component {
  state = {}
  render() {
    return (
      <>
        <Header />
        <Carousel />
      </>
    );
  }
}

export default Layout;