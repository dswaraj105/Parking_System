import TextField from '@mui/material/TextField';
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import classes from './User.module.css';

const User = () => {
  return (
    <Container>
      <Paper elivation={2} className={classes.User}>
      <Typography variant='h4' >User Details</Typography>
      <form noValidate autoComplete="off" >
        <Stack direction="column" spacing={2}>
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField id="standard-basic" label="Phone Number" variant="standard" />
          <TextField id="standard-basic" label="Address" variant="standard" />
        </Stack>

        <Button variant="contained" className={classes.submit}>Create</Button>
      </form>
      </Paper>
    </Container>
  );
};

export default User;