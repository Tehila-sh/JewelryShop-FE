
import React from 'react';
import { Typography, Button, Container } from '@mui/material';

const Checkout = () => {
  return (
    <Container>
      <Typography variant="h4">Checkout</Typography>
 
      <Button variant="contained" color="primary" fullWidth>Pay Now</Button>
    </Container>
  );
};

export default Checkout;
