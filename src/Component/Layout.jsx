import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Typography, Button, IconButton, AppBar, Toolbar, Badge, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreDetails from './StoreDetails';
import { useSelector } from 'react-redux';
import ProductDetailsPopup from '../app/ProductDetailsPopup';

const Layout = () => {
  window.scrollTo(0, 0)
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.amount, 0);
   
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      <AppBar position="static" sx={{ backgroundColor: '#013754', color: '#FFFFFF' }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="center">
          
            <Grid item>
              <Typography variant="h6" component="div" sx={{ fontFamily: 'Arial',marginTop:'10px' }}>
                
                <img src="/assets/backgrounds/sparkleOnly.gif" height={'50px'} ></img>
              </Typography>
            </Grid>
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
            <Grid item>
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={cartItemCount} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item>
              Hello, {user.user?.name}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Typography variant="h3" align="center" gutterBottom style={{ marginTop: '40px' }}>
        <img src='/assets/backgrounds/sparkleLogo.gif' style={{ width: '400px' }} alt="Logo" />
      </Typography>
      <Outlet />
      <div style={{ backgroundColor: '#013754', padding: '60px', marginTop: '60px' }}>
        <StoreDetails />
      </div>
      <ProductDetailsPopup/>
    </div>
  );
};

export default Layout;
