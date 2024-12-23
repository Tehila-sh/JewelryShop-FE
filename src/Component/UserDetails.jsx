import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { editUser, registerUser } from '../services/userActions';

const UserDetails = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(user.user?.username);
  const [email, setEmail] = useState(user.user?.email);
  const [password, setPassword] = useState(user.user?.password);
  const [error, setError] = useState(null);

  
  const handleEditDetaild = async (e) => {
    e.preventDefault();


    const userData = {
        "username": firstName,
        "email": email,
        "password": password
      }

    try {
    console.log(JSON.stringify(user))
      await dispatch(editUser(user.user.userId, userData)); 

   
      navigate('/'); 
    } catch (error) {
  
      setError('editing failed. Please try again.');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleEditDetaild}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h5" align="center" sx={{ mb: 2 }}>
        Edit your Details
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
        save
      </Button>
    </Box>
  );
};

export default UserDetails;
