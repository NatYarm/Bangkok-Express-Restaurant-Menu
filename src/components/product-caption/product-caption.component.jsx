import addIcon from '../../assets/images/icons/plus-icon.svg';
import './product-caption.styles.scss';

const ProductCaption = ({ price, title }) => {
  return (
    <div className="caption-container">
      <span className="product-price">{price}</span>
      <span className="product-title">{title}</span>
      <div type="button" className="add-button-container">
        <img className="add-icon" src={addIcon} alt="add-icon" />
      </div>
    </div>
  );
};
export default ProductCaption;
