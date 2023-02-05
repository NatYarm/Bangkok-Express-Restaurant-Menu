import * as React from 'react';
import { useState } from 'react';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const CustomizedSlider = styled(Slider)({
  height: 7,

  '& .MuiSlider-rail': {
    backgroundColor: '#414036',
  },
  '& .MuiSlider-track': {
    border: 'none',
    backgroundImage:
      'linear-gradient(90deg, #f3e273 0%, #dd6428 52%, #d31c34 100%)',
  },
  '& .MuiSlider-thumb': {
    height: 17,
    width: 17,
    backgroundColor: '#fff',
    borderRadius: '20%',

    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-mark': {
    backgroundColor: '#414036',
    height: 8,
    width: 1,
  },

  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    backgroundColor: 'unset',
    top: 45,
    color: '#fff',
  },
});

const FilterSlider = () => {
  const [value, setValue] = useState(3);

  const changeValue = (event, value) => {
    setValue(value);
  };

  return (
    <Box width={280} display="flex" justifyContent="center">
      <CustomizedSlider
        aria-label="Max spiciness"
        min={0}
        max={4}
        step={1}
        marks
        value={value}
        onChange={changeValue}
        valueLabelDisplay="on"
      />
    </Box>
  );
};

export default FilterSlider;
