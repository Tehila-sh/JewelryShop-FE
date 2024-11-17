import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Box, Paper } from '@mui/material';

const HomePage = () => {
  window.scrollTo(0, 0)
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
    if (videoRef2.current) {
      videoRef2.current.play();
    }
    if (videoRef3.current) {
      videoRef3.current.play();
    }
    if (videoRef4.current) {
      videoRef4.current.play();
    }
  }, []);

  const videoStyle = {
    display: 'block',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '0.5cm', // Reduce margin between items
  };

  const captionStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderRadius: '0 0 8px 8px',
  };

  const outerContainerStyle = {
    marginLeft: '4cm', // Margin from the left side
    marginRight: '4cm', // Margin from the right side
  };

  return (
    
    <Box>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} style={{ marginTop: '10px' }}>
          <Typography variant="h5" align="center" style={{ fontFamily: 'Playfair Display', color: '#8C7C77', fontStyle: 'italic', marginTop: '30px', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '20px' }}>
            Discover our <span style={{ fontWeight: 'bold' }}>exquisite collection</span> of jewelry pieces that will add <span style={{ fontWeight: 'bold' }}>elegance and sparkle</span> to any occasion.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            {/* Add any additional content here if needed */}
          </Paper>
        </Grid>
      </Grid>

      <Box style={outerContainerStyle}>
        <Grid container spacing={1} justifyContent="center">
          {/* First Row */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList">
              <div style={{ ...containerStyle, width: '100%' , height:'500px',marginTop:'40px' }}>
                <video ref={videoRef1} loop autoPlay muted playsInline style={videoStyle}>
                  <source src="/assets/video/allJewelry (3).mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography variant="subtitle1" sx={captionStyle}>ALL JEWELRY</Typography>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
            <Link to="/jewelryList?type=Necklaces">
              <div style={{ ...containerStyle, width: '100%' ,height:'500px' , marginTop:'90px' ,  }}>
                <img src="/assets/chains/chains.jpg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="subtitle1" sx={captionStyle}>NECKLACES</Typography>
              </div>
            </Link>
          </Grid>
          {/* Second Row */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Gifts">
              <div style={{ ...containerStyle, width: '100%',  height:'500px',marginTop:'40px'}}>
                <video ref={videoRef2} loop autoPlay muted playsInline style={videoStyle}>
                  <source src="/assets/video/gifts.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography variant="subtitle1" sx={captionStyle}>GIFTS</Typography>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Rings" >
              <div style={{ ...containerStyle, width: '100%' ,marginTop:'-60PX',height:'500px'}}>
                <img src="/assets/rings/rings.jpg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="subtitle1" sx={captionStyle}>RINGS</Typography>
              </div>
            </Link>
          </Grid>
          {/* Third Row */}
          <Grid item xs={12} sm={6} md={4}>
          
              <div style={{width: '100%',marginTop:'40px',height:'300px'}}>
                <img src="/assets/backgrounds/SparkleLogo.gif" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
              </div>
           
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Bracelets">
              <div style={{ ...containerStyle, width: '100%',marginTop:'-60px',height:'500px'}}>
                <img src="/assets/bracelets/bracelets.jpg" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="subtitle1" sx={captionStyle}>BRACELETS</Typography>
              </div>
            </Link>
          </Grid>
          {/* Fourth Row */}
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Earrings">
              <div style={{ ...containerStyle, width: '100%',marginTop:'-20px',height:"400px" }}>
                <video ref={videoRef3} loop autoPlay muted playsInline style={videoStyle}>
                  <source src="/assets/video/earrings2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography variant="subtitle1" sx={captionStyle}>EARRINGS</Typography>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Sets">
              <div style={{ ...containerStyle, width: '100%',marginTop:'-60px',height:'450px'}}>
                <img src="/assets/sets/sets.PNG" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                <Typography variant="subtitle1" sx={captionStyle}>SETS</Typography>
              </div>
            </Link>
          </Grid>
        
          <Grid item xs={12} sm={6} md={4}>
            <Link to="/jewelryList?type=Watches">
              <div style={{ ...containerStyle, width: '100%' , marginTop:'-20px',height:'400px'}}>
                <video ref={videoRef4} loop autoPlay muted playsInline style={videoStyle}>
                  <source src="/assets/video/watches.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Typography variant="subtitle1" sx={captionStyle}>WATCHES</Typography>
              </div>
            </Link>
          </Grid> 
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
