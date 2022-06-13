// import { useState } from "react";

// import TextField from '@mui/material/TextField';
import { Container, Paper, Typography } from "@mui/material";
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import UserDetails from "./UserDetails/UserDetails";
import classes from './Entry.module.css';

const Entry = () => {

  // const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

  return(
    <Container>
      <Paper elevation={3} className={classes.number} >
        <Typography variant="h3" >
          MH 43 Tw 1212
        </Typography>
      </Paper>

      <div>
        <UserDetails />
        <Paper>
       
        </Paper>
      </div>
      
    </Container>
  );
};

export default Entry;