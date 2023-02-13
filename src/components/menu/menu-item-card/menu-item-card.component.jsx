import './menu-item-card.styles.scss';
import AddButton from '../../button/button.component';

const MenuItemCard = ({ product }) => {
  const { name, image, price } = product;
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
        <AddButton />
      </div>
    </div>
  );
};
export default MenuItemCard;
