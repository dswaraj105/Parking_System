import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { TextField } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

import classes from './Form.module.css';

const Input = styled('input')({
  display: 'none',
});

export default function Form() {

  const [carNumber, setCarNumber] = useState('') ;  
  const [file, setFile] = useState('');

  // react router dom navigator 
  const navigate = useNavigate();

  const carNumberChangeHandler = (event) => {
    setCarNumber(event.target.value);
  }

  const fileInputChangeHandler = (event) => {
    setFile(event.target.files[0]);
    console.log('File attached', event.target.files[0]);
  }

  const checkinHandler = () => {
    console.log('Checking In', carNumber);

    fetch(`/user/${carNumber}`) 
      .then(res => res.json())
      .then(res => {
        console.log("got responce from server");
        if(res.data){
          localStorage.setItem('user', JSON.stringify(res.data.user));
          localStorage.setItem('userExists', res.data.userExists? 'yes' : 'no');
          navigate(`/entry/${carNumber}`);
        }
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  };

  const checkOutHandler  = () => {
    console.log('Checking Out');
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData()

    formData.append('carNumber', carNumber);
    formData.append('image', file);

    try{
      const res = await axios.post('/findNumber', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res);
    } catch(err) {
      console.log(err);
    }

  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }}>
        Upload an Image to Start
      </Typography>
      <form noValidate autoComplete="off" className={classes.form} >
        { file !== "" ? <p>{file.name}</p> : ''}
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={fileInputChangeHandler} />
          <Button variant="contained" component="span">
            Upload an Image
          </Button>
        </label>
        <TextField id="outlined-basic" value={carNumber} onChange={carNumberChangeHandler} label="Outlined" variant="outlined" />
        <ButtonGroup variant="contained"  aria-label="outlined primary button group" >
          <Button onClick={checkinHandler} >Chcekin</Button>
          <Button onClick={checkOutHandler}>Checkout  </Button>
        </ButtonGroup>
      </form>
    </Paper>
  );
}
