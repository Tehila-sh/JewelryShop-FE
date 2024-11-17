
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
const dispatch = useDispatch();

 // App.js or root component
useEffect(() => {
  const user = localStorage.getItem('user');
  
  // Ensure user data exists and is valid
  if (user && user !== 'undefined') {
    try {
      const parsedUser = JSON.parse(user);  // Parse only if data is valid
      dispatch({ type: 'LOGIN_SUCCESS', payload: parsedUser });
    } catch (error) {
      console.error('Error parsing user data:', error);
    }
  }
}, [dispatch]);


  return (
    <div > 
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;
