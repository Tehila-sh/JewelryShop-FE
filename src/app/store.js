import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../states/cartSlice';
import loaderReducer from '../states/loaderSlice';
import itemReducer from '../states/itemSlice';
import userReducer from '../states/userSlice';

export  const store = configureStore({
  reducer: {
    cart: cartReducer,
    loader: loaderReducer, 
    popup: itemReducer,
    user:userReducer,
   

  },

  
});


