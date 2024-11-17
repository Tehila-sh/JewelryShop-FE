import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0, // Initialize totalPrice
  },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, img, amount, degem } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.name === name);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].amount = amount; // Update the amount if item already exists
      } else {
        state.items.push({ name, price, img, amount, degem });
      }
      state.totalPrice += price * amount; // Update totalPrice when adding item
      console.log("add",state.items.length)
    },
    removeFromCart: (state, action) => {
      const { name } = action.payload;
      const removedItem = state.items.find(item => item.name === name);
      if (removedItem) {
        state.totalPrice -= removedItem.price * removedItem.amount; // Deduct price of removed item from totalPrice
       
        state.items = state.items.filter(item => item.name !== name);
     
      } 
        console.log("remove",state.items.length)
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0; // Reset totalPrice when clearing cart
      console.log("clear",state.items.length)
    },

    
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
