import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../product-card/product-card.component';
import './products-grid.styles.scss';

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
