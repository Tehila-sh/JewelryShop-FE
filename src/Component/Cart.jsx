import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Button, Grid, Paper, TextField, Box, Typography as MuiTypography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import { loginUser, registerUser } from '../services/userActions';
import axios from 'axios';
import { actionUser } from '../states/userSlice';

const Cart = () => {
  window.scrollTo(0, 0);
  const cartItems = useSelector((state) => state.cart.items);
  const isUserAuthenticated = useSelector((state) => state.isAuthenticated);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for login/register form toggle
  const [isLogin, setIsLogin] = useState(true); // true for login, false for register

  // State for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // Step 6: Check if the user is already logged in when the component mounts
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     try {
  //       const user = JSON.parse(storedUser);
  //       dispatch({ type: 'LOGIN_SUCCESS', payload: user });
  //     } catch (error) {
  //       console.error('Error parsing user from localStorage:', error);
  //     }
  //   }
  // }, [dispatch]);

  // Save cart to localStorage when cart items change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'LOAD_CART', payload: JSON.parse(storedCart) });
    }
  }, [dispatch]);

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
     
    const userData = { email, password };

    try {
      const response = await axios.post('http://localhost:5095/api/Users/login', userData);
      // Assuming the response contains user data
      dispatch(actionUser({ type: 'LOGIN_SUCCESS', payload: response.data }));// Dispatch login action
      // After successful login or registration
    // const user = { email, username, password };  // Replace with actual response data from your API
    // localStorage.setItem('user', JSON.stringify(user));

       
      // navigate('/payment');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  // Handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // const userData = JSON.parse(localStorage.getItem('user'));

    const userData = { username,email, password };

    try {
      await dispatch(registerUser(userData)); // Dispatch register action
      // After successful login or registration
//      const user = { email, username, password};  // Replace with actual response data from your API
//      localStorage.setItem('user', JSON.stringify(user));
// // 
    
     
      navigate('/payment');
    } catch (error) {
      setError('Registration failed. Please try again.');
    }
  };

  // Retrieve user details from localStorage to display on the page
  // const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} sx={{ mt: 6 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#013754' }}>
          Shopping Cart
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        {cartItems.length === 0 ? (
          <Typography variant="body1" align="center">
            Your cart is empty.
          </Typography>
        ) : (
          cartItems.map((item, index) => <CartItem key={index} item={item} />)
        )}
      </Grid>

      {cartItems.length > 0 && (
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 2, bgcolor: '#f5f5f5', mt: 2 }}>
            <Typography variant="h6" align="center" gutterBottom>
              Total: {totalPrice.toFixed(2)}$
            </Typography>

            {/* User Info Display */}
            
              {!isUserAuthenticated&&
           
            <Box
              component="form"
              onSubmit={isLogin ? handleLogin : handleRegister}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                margin: 'auto',
                mt: 4,
              }}
            >
              <MuiTypography variant="h6" align="center" sx={{ mb: 2 }}>
                {isLogin ? 'Login' : 'Register'} to Proceed
              </MuiTypography>

              {/* Conditional fields */}
              {!isLogin && (
                <TextField
                  label="User Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ mb: 2 }}
                />
              )}

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ mb: 2 }}
              />

              {/* Error message */}
              {error && (
                <MuiTypography color="error" align="center" sx={{ mb: 2 }}>
                  {error}
                </MuiTypography>
              )}

              {/* Submit Button */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                {isLogin ? 'Sign In' : 'Register'}
              </Button>
            </Box>}

            {/* Toggle between Login and Register */}
            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Button
                variant="text"
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null); // Reset error when switching forms
                }}
                sx={{ color: '#013754' }}
              >
                {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
              </Button>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              component="Link"
              to="/jewelryList"
              sx={{ mt: 2, bgcolor: '#013754' }}
            >
              Return to the Jewelry List
            </Button>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Cart;
