import './App.css';
import Carousel from './components/carousel/carousel.component';
import RibbonMenu from './components/ribbon-menu/ribbon-menu.component';
import Filters from './components/filters/filters.component';
import ProductsGrid from './components/products-grid/products-grid.component';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <header className="header">
          <h1 className="heading logo">Bangkok Express</h1>
          <h3 className="subheading">Great food・Free delivery・Fair price</h3>
        </header>
        <Carousel />
        <RibbonMenu />
        <Filters />
        <ProductsGrid />
      </Container>
    </div>
  );
}

export default App;
