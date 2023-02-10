import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';

import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#6e6a51',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#b6b4a2',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontFamily: 'Lato',
    fontStyle: 'italic',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(18),
    marginRight: theme.spacing(1),
    color: '#b6b4a2',
    '&.Mui-selected': {
      color: '#fff',
    },
  })
);

const CategoriesMenu = () => {
  const [value, setValue] = useState(0);
  const { allCategories, updateFilters } = useContext(ProductsContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: '100%',
        bgcolor: '#2d2c25',
        marginBottom: '28px',
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="categories menu"
      >
        {allCategories.map((category) => (
          <StyledTab
            label={category.name}
            key={category.id}
            onClick={() =>
              updateFilters({ name: 'category', value: category.id })
            }
          />
        ))}
      </StyledTabs>
    </Box>
  );
};

export default CategoriesMenu;
