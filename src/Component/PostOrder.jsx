import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom align="center">
            <CheckCircleOutline fontSize="large" style={{ color: '#4caf50', verticalAlign: 'middle', marginRight: '8px' }} />
            Thank You!
          </Typography>
          <Typography variant="body1" align="center">
            Enjoy your jewelry. Your order will be shipped soon.
          </Typography>
        </CardContent>
      </Card>
      <Grid container justifyContent="center" style={{ marginTop: '-500px' }}>
        <Button variant="contained" color="primary" component={Link} to="/" style={{ backgroundColor: '#013754' }}>
          Back to Store
        </Button>
      </Grid>
    </Grid>
  );
};

export default ThankYouPage;
