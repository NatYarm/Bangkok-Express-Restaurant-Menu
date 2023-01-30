import './ribbon-menu.styles.scss';
import CATEGORIES from './categories';
import Arrow from '../arrow/arrow.component';

const RibbonMenu = () => {
  return (
    <div className="container">
      <h2 className="section-heading">Our Menu</h2>
      <div className="ribbon">
        <div className="ribbon-arrow-container">
          <Arrow arrowDirection="right" arrowType="ribbon" />
        </div>
        <div className="ribbon-inner">
          {CATEGORIES.map((category) => (
            <button key={category.id} className="ribbon-item">
              {category.name}
            </button>
          ))}
        </div>
        <div className="ribbon-arrow-container">
          <Arrow arrowDirection="left" arrowType="ribbon" />
        </div>
      </div>
    </div>
  );
};

export default RibbonMenu;
