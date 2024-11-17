// ProductDetailsPopup.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, DialogContent, Typography, Button } from '@mui/material';
import { closeProductDetails } from '../states/itemSlice';
import { useNavigate } from 'react-router-dom';

const ProductDetailsPopup = () => {
  const isOpen = useSelector(state => state.popup.isOpen);
  const selectedProduct = useSelector(state => state.popup.selectedProduct);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        dispatch(closeProductDetails());
      }, 5000); // Adjust the duration as needed (e.g., 5000 milliseconds = 5 seconds)
      
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or isOpen changes
    }
  }, [isOpen, dispatch]);

  const handleClose = () => {
    dispatch(closeProductDetails());
  };

  const handleProductClick = () => {
    // Programmatically navigate to the jewelry page
    // window.location.href = `/jewelryList/${selectedProduct.name}`;
    navigate(`/jewelryList/${selectedProduct.name}`)
    dispatch(closeProductDetails());
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogContent>
        {selectedProduct && (
          <>
            <Typography variant="h6">{selectedProduct.name}</Typography>
            <Typography>Price: ${selectedProduct.price}</Typography>
            {/* Add more details here */}
            <Button onClick={handleProductClick} color="primary" variant="contained">View Details</Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsPopup;
