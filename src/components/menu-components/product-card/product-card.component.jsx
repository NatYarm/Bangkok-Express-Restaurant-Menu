import {
  ProductCardContainer,
  CardTop,
  ProductCaption,
  ProductName,
  ProductPrice,
} from './product-card.styles';
import Button from '../../small-components/button/button.component';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  const { addItemToCart } = useContext(ProductsContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <CardTop>
        <img
          className="card-image"
          src={require(`../../../assets/images/products/${image}`)}
          alt={`${name}`}
        />
      </CardTop>
      <ProductCaption>
        <ProductPrice>{`€${price.toFixed(2)}`}</ProductPrice>
        <ProductName>{name}</ProductName>
        <Button onClick={addProductToCart} />
      </ProductCaption>
    </ProductCardContainer>
  );
};
export default ProductCard;
