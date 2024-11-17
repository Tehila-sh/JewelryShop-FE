import axios from 'axios';
import { actionUser } from '../states/userSlice';

// Action to handle login
export const loginUser  = async (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5095/api/Users/login', userData);
    // Assuming the response contains user data
    dispatch(actionUser({ type: 'LOGIN_SUCCESS', payload: response.data }));
  } catch (error) {
    throw new Error('Login failed.');
  }
};

// Action to handle registration
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5095/api/Users', userData); 

    const { token, user } = response.data;

    // Save the token and user in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch register success action
    dispatch({ type: 'REGISTER_SUCCESS', payload: { user, token } });

  } catch (error) {
    // Dispatch register fail action if there's an error
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    throw error;
  }
};
