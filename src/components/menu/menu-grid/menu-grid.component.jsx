import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import MenuItemCard from '../menu-item-card/menu-item-card.component';
import './menu-grid.styles.scss';

const MenuGrid = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-grid-container">
      {products &&
        products.map((product) => (
          <MenuItemCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default MenuGrid;
