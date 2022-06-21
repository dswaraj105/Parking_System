import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function UserDetails() {

  const [user, setUser] = useState({});
  const [userExists, setUserExists] = useState(false);
  const {carno} = useParams();

  console.log("param - ", carno);

  useEffect(() => {
    if(localStorage.getItem('userExists') === 'yes'){
      console.log('User Exists');
      setUserExists(true);
      setUser(JSON.parse(localStorage.getItem('user')));
    } else {
      setUserExists(false);
      console.log('redirect to home page');
    }
  }, []);

  return (
    <>
    {
      userExists ?
      (<Card sx={{ maxWidth: 500, width: '45%' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            User Details
          </Typography>
          <Typography variant="h5" component="div">
            {carno}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            User Type
          </Typography>
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ display: 'inline-block', width: '65px' }}
            >
              Name 
            </Box>
            : {user.name || "-------------"}
          </Typography>
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ display: 'inline-block', width: '65px' }}
            >
              Phone 
            </Box>
            : {user.phone || "-------------"}
          </Typography>
          <Typography variant="body2">
          <Box
              component="span"
              sx={{ display: 'inline-block', width: '65px' }}
            >
              Email 
            </Box>
            : {user.email || "-------------"}
          </Typography>
          <Typography variant="body2">
          <Box
              component="span"
              sx={{ display: 'inline-block', width: '65px' }}
            >
              Address 
            </Box>
            : {user.address || "-------------"}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/user/${user._id}`} style={{textDecoration: 'none'}}>
            <Button size="small">Edit Details</Button>
          </Link>
        </CardActions>
      </Card>)
      : 
      (
        <p>Create User</p>
      )
    }
    </>
  );
}
