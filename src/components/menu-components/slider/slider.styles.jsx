import pepperSvg from '../../../assets/images/icons/pepper-icon.svg';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

export const CustomizedSlider = styled(Slider)(({ theme }) => ({
  height: 7,

  '& .MuiSlider-rail': {
    backgroundColor: '#414036',
  },
  '& .MuiSlider-track': {
    position: 'relative',
    border: 'none',
    backgroundImage:
      'linear-gradient(90deg, #f3e273 0%, #dd6428 52%, #d31c34 100%)',
  },
  '& .MuiSlider-thumb': {
    height: 16,
    width: 16,
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

  '&::before': {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '16px',
      height: '16px',
      left: -24,
      top: 1,
      backgroundImage: `url('${pepperSvg}')`,
    },
  },

  '&::after': {
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'block',
      content: '""',
      position: 'absolute',
      width: '48px',
      height: '16px',
      right: -58,
      top: 10,
      backgroundImage: `url('${pepperSvg}')`,
    },
  },
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: '280px',
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '20px',

  [theme.breakpoints.down('md')]: {
    width: '260px',
    marginLeft: 0,
  },
}));
