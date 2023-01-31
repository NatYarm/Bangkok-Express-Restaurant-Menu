import './App.css';
import Carousel from './components/carousel/carousel.component';
import RibbonMenu from './components/ribbon-menu/ribbon-menu.component';
import ProductsGrid from './components/products-grid/products-grid.component';

function App() {
  return (
    <div className="App">
      <header className="header container">
        <h1 className="heading logo">Bangkok Express</h1>
        <h3 className="subheading">Great food・Free delivery・Fair price</h3>
      </header>
      <Carousel />
      <RibbonMenu />
      <ProductsGrid />
    </div>
  );
}

export default App;
