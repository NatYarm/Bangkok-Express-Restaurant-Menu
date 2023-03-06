import {
  CheckoutForm,
  FormGroup,
  FormTitle,
  FormButtonGroup,
  FormInput,
  FormButtonInfo,
  InfoText,
  InfoPrice,
  ErrorMsg,
} from './form.styles';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import { Button } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { cartTotal, submitForm } = useContext(ProductsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const handleError = (errors) => {};
  const onFormSubmit = () => submitForm();

  const formInputs = {
    name: { required: '*Name is required' },
    email: { required: '*Email is required' },
    phone: { required: '*Phone is required' },
    address: { required: '*Address is required' },
  };

  return (
    <CheckoutForm onSubmit={handleSubmit(onFormSubmit)}>
      <FormTitle>Delivery</FormTitle>
      <FormGroup>
        <FormInput
          name="name"
          type="text"
          placeholder="Name"
          {...register('name', formInputs.name)}
        />
        <ErrorMsg>{errors?.name && errors.name.message}</ErrorMsg>
      </FormGroup>
      <FormGroup>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          {...register('email', formInputs.email)}
        />
        <ErrorMsg>{errors?.email && errors.email.message}</ErrorMsg>
      </FormGroup>
      <FormGroup>
        <FormInput
          name="tel"
          type="tel"
          placeholder="Phone"
          {...register('phone', formInputs.phone)}
        />
        <ErrorMsg>{errors?.phone && errors.phone.message}</ErrorMsg>
      </FormGroup>
      <FormGroup>
        <FormInput
          name="address"
          type="text"
          placeholder="Address"
          {...register('address', formInputs.address)}
        />
        <ErrorMsg>{errors?.address && errors.address.message}</ErrorMsg>
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
