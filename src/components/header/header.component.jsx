import Carousel from './carousel/carousel.component';
import './header.styles.scss';

const Header = () => {
  return (
    <header>
      <div className="header-details">
        <h1 className="heading">Bangkok Express</h1>
        <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      </div>
      <Carousel />
    </header>
  );
};
export default Header;
