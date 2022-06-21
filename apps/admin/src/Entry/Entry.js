import { useState } from 'react';

// import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Container, Paper, Typography } from "@mui/material";


import UserDetails from "../components/UserDetails/UserDetails";
import classes from './Entry.module.css';

const Entry = () => {

  const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());

  let timeChangedHandler = (e) => {
    console.log(e.target.value);

  }

  const dateChangedHandler = (e) => {
    console.log(e.target.value);

  }

  return (
    <Container>
      <Paper elevation={3} className={classes.number} >
        <Typography variant="h3" >
          MH 43 Tw 1212
        </Typography>
      </Paper>

      {/* <div className={classes.box}>
        <UserDetails />
        <Card sx={{ width: 500 }}>

        <label>Exit Time:</label>
        <input type="date" name="birthday" value={date} onChange={dateChangedHandler} />

        <label>Entry Time</label>
        <input type="time" name="appt" />

        </Card>
      </div> */}

      <Card>
        
      </Card>

    </Container>
  );
};

export default Entry;