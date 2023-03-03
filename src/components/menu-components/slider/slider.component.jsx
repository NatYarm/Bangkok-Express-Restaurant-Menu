import * as React from 'react';
import { useState, useContext } from 'react';
import { ProductsContext } from '../../../contexts/products.context';
import { CustomizedSlider, SliderContainer } from './slider.styles';

const SliderFilter = () => {
  const [value, setValue] = useState(3);
  const { updateFilters } = useContext(ProductsContext);

  const changeValue = (event, value) => {
    setValue(value);
    updateFilters({ name: 'maxSpiciness', value });
  };

  return (
    <SliderContainer>
      <CustomizedSlider
        min={0}
        max={4}
        step={1}
        marks
        value={value}
        onChange={changeValue}
        valueLabelDisplay="on"
      />
    </SliderContainer>
  );
};

export default SliderFilter;
