import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import ProductCard from '../product-card/product-card.component';

import { ProductsGridContainer } from './menu-grid.styles';

const MenuGrid = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ProductsGridContainer>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </ProductsGridContainer>
  );
};

export default MenuGrid;
