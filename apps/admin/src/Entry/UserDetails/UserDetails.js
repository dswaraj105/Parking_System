import * as React from 'react';
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
  return (
    <Card sx={{ maxWidth: 500, width: '45%' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User Details
        </Typography>
        <Typography variant="h5" component="div">
          MH 43 Tw 1212
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
          : Swaraj Das
        </Typography>
        <Typography variant="body2">
          <Box
            component="span"
            sx={{ display: 'inline-block', width: '65px' }}
          >
            Phone 
          </Box>
          : 6239918133
        </Typography>
        <Typography variant="body2">
        <Box
            component="span"
            sx={{ display: 'inline-block', width: '65px' }}
          >
            Email 
          </Box>
          : swaraj@gmail.com
        </Typography>
        <Typography variant="body2">
        <Box
            component="span"
            sx={{ display: 'inline-block', width: '65px' }}
          >
            Address 
          </Box>
          : Bangalore, India
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit Details</Button>
      </CardActions>
    </Card>
  );
}
