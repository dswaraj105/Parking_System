import Typography from '@mui/material/Typography';
import FortIcon from '@mui/icons-material/Fort';

import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <FortIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        ParkSpark
      </Typography>
    </div>
  )
};

export default Logo;