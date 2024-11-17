import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated: false, // Initialize totalPrice
  },
  reducers: {
   actionUser: (state, action) => {
    switch (action.payload.type) {
        case 'LOGIN_SUCCESS':

          state.user=action.payload.payload;
          state.isAuthenticated=true;
         break;
        case 'LOGOUT':
          
            state.user=null;
          state.isAuthenticated=false;
          break;
       
      }
  }
}});

export const { actionUser } = userSlice.actions;

export default userSlice.reducer;
