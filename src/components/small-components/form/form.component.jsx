import './form.styles.scss';

import { ReactComponent as ArrowIcon } from '../../../assets/images/icons/angle-sm-icon.svg';
import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';

const Form = () => {
  const { cartTotal } = useContext(ProductsContext);
  return (
    <form className="checkout-form">
      <h5 className="form-title">Delivery</h5>
      <div className="form-group row">
        <input
          name="name"
          type="text"
          className="form-input"
          placeholder="Name"
        />
        <input
          name="email"
          type="email"
          className="form-input"
          placeholder="Email"
        />
        <input
          name="tel"
          type="tel"
          className="form-input"
          placeholder="Phone"
        />
      </div>
      <div className="form-group">
        <input
          name="address"
          type="text"
          className="form-input"
          placeholder="Address"
        />
      </div>
      <div className="form-button-group">
        <div className="form-button-info">
          <span className="info-text">total</span>
          <span className="info-price">{`€${cartTotal.toFixed(2)}`}</span>
        </div>
        <button type="submit" className="form-button ">
          order
          {<ArrowIcon className="form-arrow" />}
        </button>
      </div>
    </form>
  );
};

export default Form;
