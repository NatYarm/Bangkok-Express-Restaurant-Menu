import { useContext, useEffect, useState, useRef } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import Cart from '../cart/cart.component';

import {
  CartIconContainer,
  ShoppingIcon,
  ItemsCount,
  ItemsPrice,
} from './cart-icon.styles';

const CartIcon = () => {
  const {
    cartItems,
    itemsCount,
    cartTotal,
    cartOpen,
    setCartOpen,
    headerContainerWidth,
  } = useContext(ProductsContext);

  const handleOpen = () => {
    setCartOpen(true);
  };

  const [fixedPosition, setFixedPosition] = useState(false);

  const cartIconRef = useRef();

  const cartIconWidth = cartIconRef.current?.getBoundingClientRect().width;

  const leftIndent =
    Math.min(
      headerContainerWidth + 20,
      document.documentElement.clientWidth - cartIconWidth - 10
    ) + 'px';

  useEffect(() => {
    const cartIconTop = cartIconRef.current?.getBoundingClientRect().top;

    const handleScroll = () => {
      setFixedPosition(window.scrollY > cartIconTop);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  });

  return (
    <>
      {cartItems.length !== 0 ? (
        <CartIconContainer
          ref={cartIconRef}
          fixed={fixedPosition}
          leftIndent={leftIndent}
        >
          <ShoppingIcon type="button" onClick={handleOpen}>
            <ItemsCount>{itemsCount}</ItemsCount>
            <ItemsPrice>{`€${cartTotal.toFixed(2)}`}</ItemsPrice>
          </ShoppingIcon>
        </CartIconContainer>
      ) : null}
      <Cart open={cartOpen} onClick={handleOpen} />
    </>
  );
};

export default CartIcon;
