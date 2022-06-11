import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import classes from './Controls.module.css';
import { Typography } from '@mui/material';

const Controls = () => {

  return (
    <Paper elevation={2} className={classes.controls}>
      <Stack spacing={2} direction="column">
        <Typography variant="h3" gutterBottom component="div" sx={{textAlign: 'center'}}>
          Actions
        </Typography>
        <Button variant="contained">Create a User</Button>
        <Button variant="contained">Check User Histry</Button>
        <Button variant="contained">Check entry Logs</Button>
      </Stack>
    </Paper>
  )
}

export default Controls;