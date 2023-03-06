import CarouselComponent from './carousel/carousel.component';
import CartIcon from '../cart-components/cart-icon/cart-icon.component';
import { HeaderContainer, Heading, Subheading } from './header.styles';
import { useContext, useRef } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import { useEffect } from 'react';

const Header = () => {
  const { setHeaderContainerWidth } = useContext(ProductsContext);
  const containerRef = useRef();

  useEffect(() => {
    const headerWidth = containerRef.current.getBoundingClientRect().right;
    setHeaderContainerWidth(headerWidth);
  }, [setHeaderContainerWidth]);

  return (
    <>
      <HeaderContainer ref={containerRef}>
        <CartIcon />
        <Heading>Bangkok Express</Heading>
        <Subheading>Great food・Free delivery・Fair price</Subheading>
      </HeaderContainer>
      <CarouselComponent />
    </>
  );
};
export default Header;
