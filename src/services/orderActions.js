import axios from 'axios';
import { actionUser } from '../states/userSlice';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../states/cartSlice';


// Action to handle login
export const order  = (orderData) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:5095/api/Order/`,orderData); 
    // Assuming the response contains user data
    dispatch(clearCart());
  } catch (error) {
    throw new Error('failed to order .');
  }
};


