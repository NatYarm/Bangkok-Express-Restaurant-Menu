import * as React from 'react';

import './filters.styles.scss';
import CheckboxesGroup from '../checkbox/checkbox.component';
import FilterSlider from '../slider/slider.component';

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters-inner">
        <div className="filters-group">
          <label className="slider-label">Max spiciness</label>
          <div className="filters-slider">
            <FilterSlider />
          </div>
        </div>

        <div className="filters-group">
          <CheckboxesGroup />
        </div>
      </div>
    </div>
  );
};
export default Filters;
