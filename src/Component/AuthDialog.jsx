
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, TextField, Tabs, Tab } from '@mui/material';

const AuthDialog = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{tab === 0 ? 'Login' : 'Register'}</DialogTitle>
      <DialogContent>
        <Tabs value={tab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Register" />
        </Tabs>
        {tab === 0 ? (
          <>
 
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>Login</Button>
          </>
        ) : (
          <>
     
            <TextField label="Email" fullWidth margin="normal" />
            <TextField label="Password" type="password" fullWidth margin="normal" />
            <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
            <Button variant="contained" color="primary" fullWidth>Register</Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
