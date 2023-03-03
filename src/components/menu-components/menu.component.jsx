import CategoriesMenu from './categories-menu/categories-menu.component';
import SliderFilter from './slider/slider.component';
import CheckboxesFilter from './checkbox/checkbox.component';
import MenuGrid from './menu-grid/menu-grid.component';
import {
  MenuContainer,
  Filters,
  FiltersInner,
  SliderGroup,
  SliderLabel,
} from './menu.styles';

const Menu = () => {
  return (
    <MenuContainer>
      <h2>Our Menu</h2>
      <CategoriesMenu />
      <Filters>
        <FiltersInner>
          <SliderGroup>
            <SliderLabel>Max spiciness</SliderLabel>
            <SliderFilter />
          </SliderGroup>
          <CheckboxesFilter />
        </FiltersInner>
      </Filters>
      <MenuGrid />
    </MenuContainer>
  );
};

export default Menu;
