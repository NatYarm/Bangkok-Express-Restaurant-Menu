import * as React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const CheckboxesFilter = () => {
  const [state, setState] = useState({
    noNuts: false,
    vegetarianOnly: false,
  });

  const { updateFilters } = useContext(ProductsContext);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    updateFilters({ name: [event.target.name], value: event.target.checked });
  };

  const { noNuts, vegetarianOnly } = state;

  const checkboxStyle = {
    '& .MuiSvgIcon-root': {
      color: '#b6b4a2',
      fontSize: '1.1rem',

      '&.Mui-checked': {
        color: '#b6b4a2',
      },
    },
  };

  const labelStyle = {
    '& .MuiFormControlLabel-label': {
      fontSize: '0.9rem',
      fontFamily: 'Lato',
      color: '#b6b4a2',
    },
  };

  return (
    <Box>
      <FormGroup row={true}>
        <FormControlLabel
          control={
            <Checkbox
              checked={noNuts}
              onChange={handleChange}
              name="noNuts"
              disableRipple
              sx={{ ...checkboxStyle }}
            />
          }
          sx={{ ...labelStyle }}
          label="No nuts"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={vegetarianOnly}
              onChange={handleChange}
              name="vegetarianOnly"
              disableRipple
              sx={{ ...checkboxStyle }}
            />
          }
          sx={{ ...labelStyle }}
          label="Vegetarian only"
        />
      </FormGroup>
    </Box>
  );
};

export default CheckboxesFilter;
