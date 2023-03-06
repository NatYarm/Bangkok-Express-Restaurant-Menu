import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import deliveryImg from '../../../assets/images/delivery.gif';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const SuccessfulOrder = () => {
  const { orderSuccessful, setOrderSuccessful } = useContext(ProductsContext);

  const closeSuccessfulOrder = setOrderSuccessful(false);

  return (
    <Dialog open={orderSuccessful} onClose={closeSuccessfulOrder}>
      <DialogTitle>Thanks for your order!</DialogTitle>
      <p>
        Order successful! Your order is being cooked :) <br />
        We’ll notify you about delivery time shortly.
        <br />
      </p>
      <img src={deliveryImg} alt="Delivery gif" />
    </Dialog>
  );
};

export default SuccessfulOrder;
