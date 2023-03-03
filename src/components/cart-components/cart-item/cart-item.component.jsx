import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  PriceGroup,
  CartCounter,
  CartItemTotal,
} from './cart-item.styles';
import { IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const CartItem = ({ cartItem }) => {
  const { name, image, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(ProductsContext);

  const [itemTotal, setItemTotal] = useState(0);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  useEffect(() => {
    const calcItemTotal = () => {
      const newItemTotal = price * quantity;
      setItemTotal(newItemTotal.toFixed(2));
    };
    calcItemTotal();
  }, [price, quantity]);

  return (
    <CartItemContainer>
      <CartItemImage>
        <img
          src={require(`../../../assets/images/products/${image}`)}
          alt={`${name}`}
        />
      </CartItemImage>
      <CartItemInfo>
        <CartItemName>{name}</CartItemName>
        <PriceGroup>
          <CartCounter>
            <IconButton onClick={addItemHandler}>
              <AddCircleIcon sx={btnStyle} />
            </IconButton>
            <span>{quantity}</span>
            <IconButton onClick={removeItemHandler}>
              <RemoveCircleIcon sx={btnStyle} />
            </IconButton>
          </CartCounter>
          <CartItemTotal>€{itemTotal}</CartItemTotal>
        </PriceGroup>
      </CartItemInfo>
    </CartItemContainer>
  );
};

const btnStyle = { color: '#b6b4a2', fontSize: 28 };

export default CartItem;
