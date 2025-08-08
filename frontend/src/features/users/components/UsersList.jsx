// UsersList.jsx
import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import UserCard from './UsersCard';

const UsersList = ({ users, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!users.length) {
    return (
      <Typography variant="body1" align="center" mt={4}>
        No users found.
      </Typography>
    );
  }

  return (
    <Box>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Box>
  );
};

export default UsersList;
