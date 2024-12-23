import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import HomePage from './Component/HomePage';
import Layout from './Component/Layout';
import JewelryList from './Component/JewelryList';
import Jewelry from './Component/Jewelry';
import NotFound from './Component/NotFound';
import Cart from './Component/Cart';
import Payment from './Component/Payment';
import PostOrder from './Component/PostOrder';

import Register from './Component/Register';
import Login from './Component/Login';
import UserDetails from './Component/UserDetails';
import Orders from './Component/Orders';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
     { path: '/cart',
        element: <Cart />
      }, 
  
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      
      
      {
        path: '/payment',
        element:  <Payment />
      },
      {
        path: '/postorder',
        element:  <PostOrder />
      },
      {
        path: '/jewelryList',
        children: [
          {
            index: true,
            element: <JewelryList />,
          },
          {
            path: ':name',
            element: <Jewelry />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound/>,
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
      {
        path: '/userDetails',
        element: <UserDetails/>,
      },{
        path: '/myOrders',
        element: <Orders/>,
      },
      
    ],
  },
]);

export default router;