import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import Cart from '../cart/cart.component';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartItems, itemsCount, cartTotal, cartOpen, setCartOpen } =
    useContext(ProductsContext);
  const [cartIconTop, setCartIconTop] = useState(undefined);
  const [cartIconWidth, setCartIconWidth] = useState(undefined);

  const handleOpen = () => {
    setCartOpen(true);
  };

  useEffect(() => {
    const cartIcon = document.querySelector('.cart-icon');
    if (!cartIcon) return;
    const initialCoord = cartIcon.getBoundingClientRect();
    setCartIconTop(initialCoord.top);
    setCartIconWidth(initialCoord.width);
  }, []);

  const isSticky = useCallback(() => {
    const cartIcon = document.querySelector('.cart-icon');

    let leftIndent =
      Math.min(
        document.querySelector('.container').getBoundingClientRect().right + 20,
        document.documentElement.clientWidth - cartIconWidth - 10
      ) + 'px';

    if (window.pageYOffset > cartIconTop) {
      Object.assign(cartIcon.style, {
        position: 'fixed',
        top: '50px',
        zIndex: 1e3,
        right: '10px',
        left: leftIndent,
      });
    } else {
      Object.assign(cartIcon.style, {
        position: '',
        top: '',
        left: '',
        zIndex: '',
      });
    }
  }, [cartIconTop, cartIconWidth]);

  useEffect(() => {
    if (!cartIconTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [cartIconTop, isSticky]);

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="cart-icon">
          <div className="cart-icon-inner" type="button" onClick={handleOpen}>
            <span className="items-count">{itemsCount}</span>
            <span className="items-price">{`€${cartTotal.toFixed(2)}`}</span>
          </div>
        </div>
      ) : null}
      <Cart open={cartOpen} onClick={handleOpen} />
    </>
  );
};

export default CartIcon;
