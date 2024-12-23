import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (user.isAuthenticated) {
          const response = await axios.get(`http://localhost:5095/api/Order/${user.user?.userId}`);
          setOrders(response.data);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5095/api/Order/${orderId}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.orderId !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px auto', maxWidth: '800px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        Your Orders
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Order ID</b></TableCell>
              <TableCell><b>Order Date</b></TableCell>
              <TableCell><b>Order Amount</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.orderId}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)', // Apply hover effect
                  },
                  marginBottom: '8px', // Add spacing between rows
                }}
              >
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>${order.totalAmount}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDelete(order.orderId)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Orders;
