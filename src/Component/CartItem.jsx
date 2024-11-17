import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, IconButton, Box, Divider } from '@mui/material';
import { removeFromCart, addToCart } from '../states/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item }) => {
  window.scrollTo(0, 0)
  console.log(item);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(item.amount);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ name: item.name }));
  };

  const handleIncreaseAmount = () => {
    setAmount(prevAmount => prevAmount + 1);
    dispatch(addToCart({ ...item, amount: amount + 1 }));
  };

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount(prevAmount => prevAmount - 1);
      dispatch(addToCart({ ...item, amount: amount - 1 }));
    }
  };

  

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={item.img} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '8px', marginRight: '16px' }} />
          <Box>
            <Typography variant="h6">{item.name}</Typography>
            <Typography>Model: {item.degem}</Typography>
            <Typography>Price: {item.price}$</Typography>
            
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center'   }}>
          <IconButton onClick={handleDecreaseAmount} ><RemoveIcon /></IconButton>
          <Typography variant="body1">{amount}</Typography>
          <IconButton onClick={handleIncreaseAmount}><AddIcon /></IconButton>
          <Button onClick={handleRemoveFromCart}sx={{ color: '#013754' }} startIcon={<DeleteIcon />}>Remove</Button>
        </Box>
      </Box>
      <Divider />
    </>
  );
};

export default CartItem;
