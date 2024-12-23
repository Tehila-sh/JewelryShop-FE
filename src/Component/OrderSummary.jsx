import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Card, CardContent, Divider, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Snackbar } from '@mui/material';
import { CheckCircle, Paid } from '@mui/icons-material';
import { clearCart } from '../states/cartSlice';
import { useNavigate } from 'react-router-dom';
import { order } from '../services/orderActions';

const OrderSummary = ({ isFormValid }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.amount), 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 


  const handlePay =  async() => {
    
    if (isFormValid) {
      const orderData={
        "userId":user.user.userId,
        "orderDate": new Date(),
        "totalAmount": totalPrice,
       "paymentStatus": "Paid"
      }
      
     await dispatch(order(orderData));
      setTimeout(() => {
        navigate('/postorder');
      }, 2000);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom color='#013754'>Order Summary</Typography>
        <Divider />
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.img} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={`Price: $${(typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A')}`} />
              <ListItemText primary={`Quantity: ${item.amount}`} />
              <ListItemText primary={`Total Price: $${(item.price * item.amount).toFixed(2)}`} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePay}
          fullWidth
          disabled={!isFormValid}
          sx={{ bgcolor: '#013754'}}
        >
          Pay ${totalPrice.toFixed(2)}
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
