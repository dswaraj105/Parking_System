import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

import classes from './User.module.css';

const User = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleNo, setvehicleNo] = useState('');
  const [address, setAddress] = useState('');

  const {id} = useParams();

  useEffect(() => {
    if(id === "new"){
      console.log('Creating a user');
    } else {
      fetch(`/userid/${id}`)  
        .then(res => res.json())
        .then(res => {
          setName(res.name);
          setEmail(res.email);
          setPhone(res.phone);
          setvehicleNo(res.vehicleNo);
          setAddress(res.address);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangedHandler = (e) => {
    setEmail(e.target.value);
  }

  const phoneChangedHandler = (e) => {
    setPhone(e.target.value);
  }

  const addressChangedHandler = (e) => {
    setAddress(e.target.value);
  }

  const vehicleNoChangedHandler = (e) => {
    setvehicleNo(e.target.value);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if(id === "new"){

      if(name.trim() === "" || email.trim() === "" || address.trim() === "" || vehicleNo.trim === ""){
        console.log('Empty Fields');
        return;
      }
      
      let data = {
        name,
        email,
        phone,
        vehicleNo,
        address
      }
      console.log(data);
  
      fetch('/createuser', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          console.log("user created", res);
          setName('');
          setAddress('');
          setPhone('');
          setvehicleNo('');
          setEmail('');
        })
        .catch(err => console.log("User vreation error",err));
    
    } else {
      // updating the user
      if(name.trim() === "" || email.trim() === "" || address.trim() === "" || vehicleNo.trim === ""){
        console.log('Empty Fields');
        return;
      }

      let data = {
        name,
        email,
        phone,
        vehicleNo,
        address
      }
      console.log('Updating a user', data);

      console.log(data);
      fetch(`/user/${id}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({user: data})
      })
        .then(res => res.json())
        .then(res => {
          console.log('User Updated', res);
        })
        .catch(err => console.log(err));

    }
  }

  return (
    <Container>
      <Paper elivation={2} className={classes.User}>
        <Typography variant='h4' >User Details</Typography>
        <form noValidate autoComplete="off" onSubmit={formSubmitHandler} >
          <Stack direction="column" spacing={2}>
            <TextField value={name} onChange={nameChangedHandler} id="standard-basic" label="Name" variant="standard" required/>
            <TextField value={email} onChange={emailChangedHandler} id="standard-basic" label="Email" variant="standard" />
            <TextField value={phone} type="number" onChange={phoneChangedHandler} id="standard-basic" label="Phone Number" variant="standard" required/>
            <TextField value={vehicleNo} onChange={vehicleNoChangedHandler} id="standard-basic" label="Vehicle Number" variant="standard" required/>
            <TextField value={address} onChange={addressChangedHandler} id="standard-basic" label="Address" variant="standard" required/>
          </Stack>

          <Button variant="contained" type="submit" sx={{marginTop: 5}} className={classes.submit}>Create User</Button>
        </form>
      </Paper>
    </Container>
  );
};

export default User;