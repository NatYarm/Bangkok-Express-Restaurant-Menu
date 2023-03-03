import { IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const Button = (props) => {
  return (
    <IconButton
      sx={{
        minWidth: '72px',
        height: '100%',
        bgcolor: '#ecd41a',
        borderRadius: 0,
        '&:hover': { bgcolor: '#c8b416' },
      }}
      {...props}
    >
      <AddRoundedIcon
        sx={{ fontSize: '50px', color: 'var(--color-black)' }}
        alt="add-icon"
      />
    </IconButton>
  );
};
export default Button;
