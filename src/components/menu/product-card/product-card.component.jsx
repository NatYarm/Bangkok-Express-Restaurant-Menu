import './product-card.styles.scss';
import AddButton from '../../button/button.component';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  const { addItemToCart } = useContext(ProductsContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="card-container">
      <div className="card-top">
        <img
          className="card-image"
          src={require(`../../../assets/images/products/${image}`)}
          alt={`${name}`}
        />
      </div>
      <div className="card-caption">
        <span className="card-price">{`€${price.toFixed(2)}`}</span>
        <span className="card-name">{name}</span>
        <AddButton onClick={addProductToCart} />
      </div>
    </div>
  );
};
export default ProductCard;
