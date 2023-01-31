import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './carousel.styles.scss';

import slides from './slides';
//import CarouselCaption from '../carousel-caption/carousel-caption.component';
import Arrow from '../arrow/arrow.component';
import AddButton from '../button/button.component';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState('slideRight');
  const slide = slides[currentSlide];
  const numSlides = slides.length;

  const onArrowClick = (arrowDirection) => {
    const increment = arrowDirection === 'left' ? -1 : 1;
    const newCurrentSlide = (currentSlide + increment + numSlides) % numSlides;
    setCurrentSlide(newCurrentSlide);
    arrowDirection === 'left'
      ? setSlideDirection('slideLeft')
      : setSlideDirection('slideRight');
  };

  const childFactory = (slideDirection) => (child) =>
    React.cloneElement(child, { classNames: slideDirection });

  return (
    <div className="carousel-container">
      {currentSlide !== 0 ? (
        <Arrow
          arrowType="carousel"
          currentSlide={currentSlide}
          arrowDirection="left"
          handleClick={() => onArrowClick('left')}
        />
      ) : null}

      <TransitionGroup childFactory={childFactory(slideDirection)}>
        <CSSTransition
          classNames={slideDirection}
          timeout={1000}
          key={slide.id}
        >
          <div className="carousel-inner">
            <img
              className="carousel-image"
              src={require(`../../assets/images/carousel/${slide.image}`)}
              alt="slide.name"
            />

            <div className="carousel-caption">
              <span className="carousel-price">{`€${slide.price.toFixed(
                2
              )}`}</span>
              <span className="carousel-title">{slide.name}</span>
              <AddButton />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {currentSlide !== numSlides - 1 ? (
        <Arrow
          arrowType="carousel"
          numSlides={numSlides}
          arrowDirection="right"
          handleClick={() => onArrowClick('right')}
        />
      ) : null}
    </div>
  );
};

export default Carousel;
