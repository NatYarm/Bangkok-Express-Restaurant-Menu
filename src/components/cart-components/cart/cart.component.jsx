import './cart.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CartItem from '../cart-item/cart-item.component';
import Form from '../../small-components/form/form.component';
import { IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 854,
  width: '100%',
  height: '100vh',
  overflowY: 'auto',
  bgcolor: '#000',

  outline: 0,
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const { cartItems, cartOpen, setCartOpen } = useContext(ProductsContext);

  const toggleCartOpen = () => setCartOpen(!cartOpen);
  return (
    <div>
      <Modal
        open={cartOpen}
        onClose={toggleCartOpen}
        slotProps={{
          backdrop: { style: { backgroundColor: '#918f79', opacity: 0.9 } },
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            sx={{
              fontFamily: 'var(--font-secondary), sans-serif',
              textShadow: '3px 3px var(--color-pink)',
              marginBottom: '30px',
            }}
          >
            Your order
          </Typography>
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={toggleCartOpen}
          >
            <CloseIcon
              sx={{
                fontSize: '40px',
                color: '#6e6a51',
              }}
            />
          </IconButton>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item} />
            ))}
          </div>
          <Form />
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
