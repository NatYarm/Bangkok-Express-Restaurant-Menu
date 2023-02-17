import Carousel from './carousel/carousel.component';
import CartIcon from '../cart-components/cart-icon/cart-icon.component';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="header container">
      <div className="header-details" style={{ marginBottom: '36px' }}>
        <h1 className="heading">Bangkok Express</h1>
        <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      </div>
      <CartIcon />
      <Carousel />
    </div>
  );
};
export default Header;
