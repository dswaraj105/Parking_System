import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

import classes from './Form.module.css';

const Input = styled('input')({
  display: 'none',
});

export default function Form() {
  return (
    <Paper elevation={2} className={classes.paper}>
      <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center' }}>
        Upload an Image to Start
      </Typography>
      <form noValidate autoComplete="off" className={classes.form} >
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload an Image
          </Button>
        </label>
        <ButtonGroup variant="contained"  aria-label="outlined primary button group" >
          <Button>Chcekin</Button>
          <Button>Checkout  </Button>
        </ButtonGroup>
      </form>
    </Paper>
  );
}
