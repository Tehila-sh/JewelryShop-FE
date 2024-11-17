import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="/assets/backgrounds/SparkleLogo.gif"
        alt="Loading..."
        style={{ width: '100%', height: 'auto', borderRadius: '8px', position: 'absolute', zIndex: -1 }}
      />
      <CircularProgress color="primary" size={80} thickness={4} />
    </div>
  );
};

export default Loader;
