import {
  CheckoutForm,
  FormGroup,
  FormGroupRow,
  FormTitle,
  FormButtonGroup,
  FormInput,
  FormButtonInfo,
  InfoText,
  InfoPrice,
} from './form.styles';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import { Button } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Form = () => {
  const { cartTotal } = useContext(ProductsContext);
  return (
    <CheckoutForm>
      <FormTitle>Delivery</FormTitle>
      <FormGroupRow>
        <FormInput name="name" type="text" placeholder="Name" />
        <FormInput name="email" type="email" placeholder="Email" />
        <FormInput name="tel" type="tel" placeholder="Phone" />
      </FormGroupRow>
      <FormGroup>
        <FormInput name="address" type="text" placeholder="Address" />
      </FormGroup>
      <FormButtonGroup>
        <FormButtonInfo>
          <InfoText>total</InfoText>
          <InfoPrice>{`€${cartTotal.toFixed(2)}`}</InfoPrice>
        </FormButtonInfo>
        <Button type="submit" sx={formBtnStyle}>
          order
          <KeyboardArrowRightRoundedIcon sx={{ fontSize: '30px' }} />
        </Button>
      </FormButtonGroup>
    </CheckoutForm>
  );
};

const formBtnStyle = {
  backgroundColor: 'var(--color-yellow)',
  borderRadius: 0,
  fontFamily: 'Lato',
  fontStyle: 'italic',
  fontWeight: 600,
  fontSize: '18px',
  color: 'var(--color-black)',
  '&:hover': { bgcolor: 'var(--color-yellow-dark)' },
};

export default Form;
