import { useCallback, useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
  const { cartIsEmpty } = useContext(ProductsContext);
  const [cartIconTop, setCartIconTop] = useState(undefined);
  const [cartIconWidth, setCartIconWidth] = useState(undefined);

  useEffect(() => {
    const cartIcon = document.querySelector('.cart-icon');

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
      {!cartIsEmpty ? (
        <div className="cart-icon">
          <div className="cart-icon-inner">
            <span className="items-count">1</span>
            <span className="items-price">fff</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CartIcon;
