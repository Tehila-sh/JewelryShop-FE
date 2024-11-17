// redux/reducers/userReducer.js
const initialState = {
    user: null,
    isAuthenticated: false,
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: action.payload,  // Store user data
          isAuthenticated: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  