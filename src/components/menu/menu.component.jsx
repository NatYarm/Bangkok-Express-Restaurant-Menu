import CategoriesMenu from './categories-menu/categories-menu.component';
import SliderFilter from './slider/slider.component';
import CheckboxesFilter from './checkbox/checkbox.component';
import MenuGrid from './menu-grid/menu-grid.component';
import './menu.styles.scss';

const Menu = () => {
  return (
    <div>
      <h2 className="section-heading">Our Menu</h2>
      <div className="categories">
        <CategoriesMenu />
      </div>

      <div className="filters">
        <div className="filters-inner">
          <div className="filters-group">
            <label className="slider-label">Max spiciness</label>
            <div className="filters-slider">
              <SliderFilter />
            </div>
          </div>

          <div className="filters-group">
            <CheckboxesFilter />
          </div>
        </div>
      </div>

      <div className="menu-grid">
        <MenuGrid />
      </div>
    </div>
  );
};

export default Menu;
