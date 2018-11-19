import React, { Component } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import arrow from '../../../assets/arrow.png'
import carousel from '../../../assets/carousel.png'




// styling 
const HeaderWrapper = styled.header`
/* font:  font-family: 'Libre Baskerville', serif; */

position: relative;
  .carousel__image { 
    height: 100vh;
    object-fit: cover;
  }
  .carousel__carousel-item { 
    height: 100%;
  }
  .carousel__content { 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:rgba(0,0,0,0.5);
  text-align: center;
  color: #fff;
  border: 1px solid red;
}
  .carousel__h3 { 
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    font-weight: 100;
  }
 .carousel__mainImage { 
   margin-top: 250px;
 }
 .carousel__caption { 
  font-size: 3.5rem;
  text-transform: uppercase;
  padding-top: 80px;
  letter-spacing: 4px;
  font-family: 'Oswald', sans-serif;
  font-weight: 200;


  }
 .carousel__arrow { 
   margin: 19px 0;
 }

`



const items = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 1',
    caption: 'elixir exclusively food'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 2',
    caption: 'welcome to restaurant'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 3',
    caption: 'the soul food & bistro'
  }
];

class Header extends Component {
  state = { activeIndex: 0 };


  // onExiting = () => {
  //   this.animating = true;
  // }

  // onExited = () => {
  //   this.animating = false;
  // }

  // next = () => {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
  //   this.setState({ activeIndex: nextIndex });
  // }

  // previous = () => {
  //   if (this.animating) return;
  //   const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
  //   this.setState({ activeIndex: nextIndex });
  // }

  // goToIndex = (newIndex) => {
  //   if (this.animating) return;
  //   this.setState({ activeIndex: newIndex });
  // }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="carousel__carousel-item"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="carousel__image" />
          <div className="carousel__content">
            <img src={carousel} alt="dinning" className="carousel__mainImage" />
            <h1 className="carousel__caption">{item.caption}</h1>
            <img src={arrow} alt="arrow" className="carousel__arrow" />
            <h3 className="carousel__h3">The Chef creates divine combinations</h3>
          </div>
        </CarouselItem>
      );
    });

    return (
      <>
        <HeaderWrapper className="header__carousel__wrapper">
          <Navbar />
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </HeaderWrapper>
      </>
    );
  }
}


export default Header;