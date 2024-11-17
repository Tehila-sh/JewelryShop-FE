import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/userActions';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  
  const handleRegister = async (e) => {
    e.preventDefault();


    const userData = { firstName, email, password };

    try {
    
      await dispatch(registerUser(userData)); 

   
      navigate('/login'); 
    } catch (error) {
  
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Register
      </Typography>


      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ mb: 2 }}
      />


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
        Register
      </Button>
    </Box>
  );
};

export default Register;
