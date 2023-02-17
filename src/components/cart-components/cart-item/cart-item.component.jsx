import './cart-item.styles.scss';
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
    <div className="cart-item-container">
      <div className="cart-item-image">
        <img
          src={require(`../../../assets/images/products/${image}`)}
          alt={`${name}`}
        />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-name">{name}</div>
        <div className="price-group">
          <div className="cart-counter">
            <IconButton onClick={addItemHandler}>
              <AddCircleIcon sx={{ color: '#b6b4a2', fontSize: 28 }} />
            </IconButton>
            <span className="cart-quantity">{quantity}</span>
            <IconButton onClick={removeItemHandler}>
              <RemoveCircleIcon sx={{ color: '#b6b4a2', fontSize: 28 }} />
            </IconButton>
          </div>
          <div className="cart-item-total">€{itemTotal}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
