import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import Loader from './Loader';
import { showLoader, hideLoader } from '../states/loaderSlice';
import getAllJewelries from '../services/jewelries';
import { openProductDetails } from '../states/itemSlice'; // Import the action from the correct slice

const JewelryList = () => {
  window.scrollTo(0, 0)
  const location = useLocation();
  const [jewelries, setJewelries] = useState([]);
  const [filterType, setFilterType] = useState('');
  const isLoading = useSelector(state => state.loader.isLoading);

  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      dispatch(showLoader());
      await new Promise(resolve => setTimeout(resolve, 2000));
      const res = await getAllJewelries();
      setJewelries(res)
      ;
      const searchParams = new URLSearchParams(location.search);
      const type = searchParams.get('type');
      setFilterType(type || '');
    } catch (error) {
      console.log("Some Error occurred on data fetching", error.message);
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    fetchData();
  }, [location.search]);

  const filterJewelriesByType = (type) => {
    setFilterType(type);
  };

  const filteredJewelries = filterType ? jewelries.filter(jewelry => jewelry.type === filterType) : jewelries;

  const handleProductClick = (jewelry) => {
    dispatch(openProductDetails(jewelry));
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
          <Grid container spacing={3}>
            {filteredJewelries.map(jewelry => (
            
              <Grid item key={jewelry.name} xs={12} sm={6} md={4} lg={4}>
                <Card style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', transition: '0.3s', '&:hover': { boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' } }}>
                  <CardActionArea onClick={() => handleProductClick(jewelry)}> {/* Changed to onClick event */}
                    <CardMedia

                      component="img"
                      style={{ height: '300px', objectFit: 'cover' }}
                       
                      image={jewelry.img}
                      alt={jewelry.name}
                    />
                    <Typography variant="body1" align="center" style={{ padding: '10px' }}>
                      {jewelry.name}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default JewelryList;
