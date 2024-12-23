import axios from 'axios';
import { actionUser } from '../states/userSlice';
import { useNavigate } from 'react-router-dom';


// Action to handle login
export const loginUser  = (userData) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5095/api/Users/${userData.email}/${userData.password}`); 
    // Assuming the response contains user data
    dispatch(actionUser({ type: 'LOGIN_SUCCESS', payload: response.data }));
  } catch (error) {
    throw new Error('Login failed.');
  }
};


// Action to handle logout
export const logoutUser  =  (userData) => (dispatch) => {
  try {
  
    // Assuming the response contains user data
    dispatch(actionUser({ type: 'LOGOUT'}));
  } catch (error) {
    throw new Error('Logout failed.');
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


export const editUser = (id, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5095/api/Users/${id}`, userData); 

    const { token, user } = response.data;

    // Save the token and user in localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch register success action
    dispatch(actionUser({ type: 'LOGIN_SUCCESS', payload: response.data }));

  } catch (error) {
    // Dispatch register fail action if there's an error
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.message });
    throw error;
  }
};


