import slides from './slides';
import Button from '../../small-components/button/button.component';
import React, { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import {
  ProductCaption,
  ProductName,
  ProductPriceCarousel,
} from '../../menu-components/product-card/product-card.styles';
import Box from '@mui/material/Box';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const CarouselComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const slide = slides[activeStep];

  const { addItemToCart } = useContext(ProductsContext);
  const addProductToCart = () => {
    addItemToCart(slide);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Carousel
      height={400}
      autoPlay={false}
      cycleNavigation={false}
      indicators={false}
      animation="slide"
      duration={1000}
      next={handleNext}
      prev={handlePrev}
      navButtonsAlwaysVisible="true"
      navButtonsProps={{
        style: { backgroundColor: 'unset' },
      }}
      NextIcon={<ArrowForwardIosIcon sx={{ fontSize: '40px' }} />}
      PrevIcon={<ArrowBackIosNewIcon sx={{ fontSize: '40px' }} />}
      navButtonsWrapperProps={{ style: { height: '80%' } }}
    >
      {slides.map((slide) => (
        <div key={slide.id}>
          <Box
            component="img"
            sx={{
              height: 300,
              display: 'block',
              minWidth: '100%',
              overflow: 'hidden',
            }}
            src={require(`../../../assets/images/carousel/${slide.image}`)}
            alt={slide.name}
          />

          <ProductCaption>
            <ProductPriceCarousel>{`€${slide.price.toFixed(
              2
            )}`}</ProductPriceCarousel>
            <ProductName>{slide.name}</ProductName>
            <Button onClick={addProductToCart} />
          </ProductCaption>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;

///////////////////// React, JS, TransitionGroup Carousel ////////////////
// import React, { useState, useContext } from 'react';
// import { ProductsContext } from '../../../contexts/products.context';
// import slides from './slides';
// import Arrow from '../../small-components/arrow/arrow.component';
// import AddButton from '../../small-components/button/button.component';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import './carousel.styles.scss';

// const Carousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slideDirection, setSlideDirection] = useState('slideRight');
//   const slide = slides[currentSlide];
//   const numSlides = slides.length;
//   const { addItemToCart } = useContext(ProductsContext);
//   const addProductToCart = () => {
//     addItemToCart(slide);
//   };

//   const onArrowClick = (arrowDirection) => {
//     const increment = arrowDirection === 'left' ? -1 : 1;
//     const newCurrentSlide = (currentSlide + increment + numSlides) % numSlides;
//     setCurrentSlide(newCurrentSlide);
//     arrowDirection === 'left'
//       ? setSlideDirection('slideLeft')
//       : setSlideDirection('slideRight');
//   };

//   const childFactory = (slideDirection) => (child) =>
//     React.cloneElement(child, { classNames: slideDirection });

//   return (
//     <div className="carousel-container">
//       {currentSlide !== 0 ? (
//         <Arrow
//           arrowType="carousel"
//           currentSlide={currentSlide}
//           arrowDirection="left"
//           handleClick={() => onArrowClick('left')}
//         />
//       ) : null}

//       <TransitionGroup childFactory={childFactory(slideDirection)}>
//         <CSSTransition
//           classNames={slideDirection}
//           timeout={1000}
//           key={slide.id}
//         >
//           <div className="carousel-inner">
//             <img
//               className="carousel-image"
//               src={require(`../../../assets/images/carousel/${slide.image}`)}
//               alt="slide.name"
//             />

// <div className="carousel-caption">
//   <span className="carousel-price">{`€${slide.price.toFixed(
//     2
//   )}`}</span>
//   <span className="carousel-title">{slide.name}</span>
//   <AddButton onClick={addProductToCart} />
// </div>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>

//       {currentSlide !== numSlides - 1 ? (
//         <Arrow
//           arrowType="carousel"
//           numSlides={numSlides}
//           arrowDirection="right"
//           handleClick={() => onArrowClick('right')}
//         />
//       ) : null}
//     </div>
//   );
// };

// export default Carousel;

// Arrow For JS Carousel Component

// const Arrow = (props) => {
//   const { arrowDirection, arrowType, handleClick } = props;
//   const icon =
//     arrowDirection === 'left' ? (
//       <ArrowLeft className="arrow-icon" />
//     ) : (
//       <ArrowRight className="arrow-icon" />
//     );

//   return (
//     <div
//       className='arrow-container'
//       onClick={handleClick}
//     >
//       {icon}
//     </div>
//   );
// };

// export default Arrow;
