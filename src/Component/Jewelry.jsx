import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography, Button, Card, CardContent, CardMedia, Grid, Box, IconButton,Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { AddShoppingCart, ArrowBack } from '@mui/icons-material';
import getAllJewelries from '../services/jewelries';
import { useDispatch } from 'react-redux';
import { addToCart } from '../states/cartSlice';

const Jewelry = () => {
  window.scrollTo(0, 0)
  const [jewelry, setJewelry] = useState(null);
  const { name } = useParams();

  const dispatch = useDispatch();




  const [amount, setAmount] = useState(1);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const jewelries = await getAllJewelries();
      const foundJewelry = jewelries.find(j => j.name === name);
      if (foundJewelry) {
        
        setJewelry(foundJewelry);
       
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log("Some Error occurred on data fetching", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [name]);

  
  
  const handleAddToCart = () => {
    dispatch(addToCart({ name: jewelry.name, degem: jewelry.degem, price: jewelry.price, img: jewelry.img, amount }));
    navigate('/cart'); 
  };
 

  return (
    <div>
      {jewelry && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate('/jewelryList')}
              style= {{ marginBottom: '20px', color: '#013754' }}
            >
              Return to the jewelry list
            </Button>
          </Grid>
          <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ maxWidth: 320 ,marginLeft:'200px',marginTop:'-40px'}}>
              <Card   sx={{ borderRadius: 8 }}>
                <CardMedia
                  component="img"
                  height="400px"
                  width="500px"
                  image={jewelry.img}
                  alt={jewelry.name}
                
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" gutterBottom sx={{ color: '#013754' }}>
              {jewelry.Name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
            model:{jewelry.Degem}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              color: {jewelry.Color}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
             price: {jewelry.Price}$
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
            amount:
            </Typography>
            <FormControl  sx={{ marginBottom: 2 ,width:'80px' }}>
              <InputLabel id="amount-label"></InputLabel>
              <Select
                labelId="amount-label"
                id="amount"
                value={amount}
                onChange={handleAmountChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
            <br></br>
            <Button
  variant="contained"
  color="primary"
  onClick={handleAddToCart}
  startIcon={<AddShoppingCart />}
  sx={{ bgcolor: '#013754', color: 'white', marginTop: '20px' }}
>
  Add to cart
</Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Jewelry;
