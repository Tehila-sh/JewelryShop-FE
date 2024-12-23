import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Typography, Button, IconButton, AppBar, Toolbar, Badge, Grid, Menu, MenuItem } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreDetails from './StoreDetails';
import { useDispatch, useSelector } from 'react-redux';
import ProductDetailsPopup from '../app/ProductDetailsPopup';
import { logoutUser } from '../services/userActions';

const Layout = () => {
  window.scrollTo(0, 0);
  const [anchorEl, setAnchorEl] = useState(null);
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
const dispach= useDispatch()
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.amount, 0);

  // Handle opening and closing the profile menu
  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  // Handle "Log Out"
  const  handleLogout = () => {

   dispach(logoutUser()); 
    alert('You have been logged out.');
    navigate('/login'); // Redirect to login page
    handleProfileClose(); // Close menu
  };

  const  handleLogin = () => {
     navigate('/login'); // Redirect to login page
     handleProfileClose(); // Close menu
   };

  // Handle "View My Details"
  const handleViewDetails = () => {
    console.log(JSON.stringify(user))
    if(user.isAuthenticated){
      navigate('/userDetails'); // Navigate to details page 
    } else {
      navigate('/login'); // Navigate to details page 
    }
    handleProfileClose(); // Close menu
  };

  const handleViewOrders = () => {
    console.log(JSON.stringify(user))
   
      navigate('/myOrders'); // Navigate to details page 
    
     handleProfileClose(); // Close menu
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <AppBar position="static" sx={{ backgroundColor: '#013754', color: '#FFFFFF' }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="center">
            {/* Logo Section */}
            <Grid item>
              <Typography variant="h6" component="div" sx={{ fontFamily: 'Arial', marginTop: '10px' }}>
                <img src="/assets/backgrounds/sparkleOnly.gif" height={'50px'} alt="Logo" />
              </Typography>
            </Grid>
            {/* Navigation Buttons */}
            <Grid item xs={6} md={8}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color="inherit" component={Link} to="/" sx={{ mr: 2 }}>Home</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Rings" sx={{ mr: 2 }}>Rings</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Earrings" sx={{ mr: 2 }}>Earrings</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Bracelets" sx={{ mr: 2 }}>Bracelets</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Necklaces" sx={{ mr: 2 }}>Necklaces</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Watches" sx={{ mr: 2 }}>Watches</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Sets" sx={{ mr: 2 }}>Sets</Button>
                <Button color="inherit" component={Link} to="/jewelryList?type=Gifts" sx={{ mr: 2 }}>Gifts</Button>
                <Button color="inherit" component={Link} to="/jewelryList">All Jewelry</Button>
              </div>
            </Grid>
            {/* Cart Icon */}
            <Grid item>
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Grid>
            {/* Profile Section */}
            <Grid item>
              <Button
                color="inherit"
                onClick={handleProfileClick}
                sx={{ ml: 2 }}
              >
                Hello, {user.user?.username || 'Guest'}
              </Button>
              {/* Profile Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
              >
                <MenuItem onClick={handleViewDetails}>View My Details</MenuItem>
                <MenuItem onClick={user.isAuthenticated? handleLogout : handleLogin}>{user.isAuthenticated? "log out": "log in"}</MenuItem>
                {
                  user.isAuthenticated&& <MenuItem onClick={handleViewOrders}>View My Orders</MenuItem>
                }
               
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* Main Content */}
      <Typography variant="h3" align="center" gutterBottom style={{ marginTop: '40px' }}>
        <img src='/assets/backgrounds/sparkleLogo.gif' style={{ width: '400px' }} alt="Logo" />
      </Typography>
      <Outlet />
      {/* Footer */}
      <div style={{ backgroundColor: '#013754', padding: '60px', marginTop: '60px' }}>
        <StoreDetails />
      </div>
      <ProductDetailsPopup />
    </div>
  );
};

export default Layout;
