import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Card, CardContent, Grid, TextField } from '@mui/material';
import { PersonOutline, Phone, LocationOn, MailOutline, CreditCard, CreditCardTwoTone, DateRange, LockOutlined } from '@mui/icons-material';
import OrderSummary from './OrderSummary';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../states/cartSlice';

const Payment = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    postalCode: '',
    cardNumber: '',
    cvv: '',
    cardholderName: '',
    expiryDate: '',
  });
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    const validate = () => {
      let tempErrors = {};
      tempErrors.name = formData.name ? "" : "Name is required.";
      tempErrors.address = formData.address ? "" : "Address is required.";
      tempErrors.phoneNumber = formData.phoneNumber ? "" : "Phone number is required.";
      tempErrors.postalCode = formData.postalCode ? "" : "Postal code is required.";
      tempErrors.cardNumber = formData.cardNumber ? "" : "Credit card number is required.";
      tempErrors.cvv = formData.cvv ? "" : "CVV is required.";
      tempErrors.cardholderName = formData.cardholderName ? "" : "Cardholder name is required.";
      tempErrors.expiryDate = formData.expiryDate ? "" : "Expiration date is required.";

      setErrors(tempErrors);
      setIsFormValid(Object.values(tempErrors).every(x => x === ""));
    };

    validate();
  }, [formData]);

  return (
    <Grid container spacing={2}>
      {/* Left side: Payment details form */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom color='#013754'>Payment</Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              InputProps={{ startAdornment: <PersonOutline /> }}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              InputProps={{ startAdornment: <LocationOn /> }}
              error={!!errors.address}
              helperText={errors.address}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              InputProps={{ startAdornment: <Phone /> }}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Postal Code"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              InputProps={{ startAdornment: <MailOutline /> }}
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Credit Card Number"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              InputProps={{ startAdornment: <CreditCard /> }}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              InputProps={{ startAdornment: <LockOutlined /> }}
              error={!!errors.cvv}
              helperText={errors.cvv}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Cardholder Name"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              InputProps={{ startAdornment: <CreditCardTwoTone /> }}
              error={!!errors.cardholderName}
              helperText={errors.cardholderName}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Expiration Date"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              InputProps={{ startAdornment: <DateRange /> }}
              error={!!errors.expiryDate}
              helperText={errors.expiryDate}
              sx={{ mb: 2 }}
            />
          </CardContent>
        </Card>
      </Grid>
      {/* Right side: Order summary */}
      <Grid item xs={12} md={6}>
        <OrderSummary isFormValid={isFormValid} />
      </Grid>
    </Grid>
  );
};

export default Payment;
