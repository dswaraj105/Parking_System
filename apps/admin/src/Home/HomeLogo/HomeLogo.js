import Typography from '@mui/material/Typography';
import FortIcon from '@mui/icons-material/Fort';

import classes from './logo.module.css';

const HomeLogo = () => {
  return (
    <div className={classes.logo}>
        <FortIcon sx={{ display: { md: 'flex' }, mr: 1, fontSize: 50 }} />
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { md: 'flex' },
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
  );
};

export default HomeLogo;