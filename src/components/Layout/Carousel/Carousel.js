import React, { Component } from 'react';
import styled from 'styled-components'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Header from '../Header/Header';


// styling 
const CarouselWrapper = styled.div`

  .carousel__image { 
    height: 91vh;
    object-fit: cover;
  }
  .carousel__carousel-item { 
    height: 100%;
  }
  .overlay {
    position: relative;
    transition: all 1s;
}

.overlay:after {
    content: '\A';
    position: absolute;
    width: 100%; 
    height:100%;
    top:0; 
    left:0;
    background:rgba(0,0,0,0.5);
    opacity: 1;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
   -moz-transition: all 0.5s;
}
.overlay:hover:after {
    opacity: 0;
}

`



const items = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&h=1000',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class MainHeader extends Component {
  state = { activeIndex: 0 };


  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

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
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <>
        <Header />
        <CarouselWrapper className="header__carousel__wrapper overlay">
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
        </CarouselWrapper>
      </>
    );
  }
}


export default MainHeader;