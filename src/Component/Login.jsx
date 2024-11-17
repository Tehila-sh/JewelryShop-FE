import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

  
    const userData = { email, password };

    try {
      
      await dispatch(loginUser(userData));

      navigate('/payment'); 
    } catch (error) {

      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Sign In
      </Typography>

 
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

     
      {error && (
        <Typography color="error" align="center" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}


      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
    </Box>
  );
};

export default Login;
