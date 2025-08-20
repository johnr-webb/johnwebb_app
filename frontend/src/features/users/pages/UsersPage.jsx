import React from 'react';
import { Box, Typography } from '@mui/material';
// Import hooks
import { useUsers } from '../hooks/useUsers';
// Import components
import AddUserForm from '../components/AddUserForm';
import UsersList from '../components/UsersList';

const UsersPage = () => {
  const { users, createUser, loading, error } = useUsers();
  console.log('Users in render outside:', users);
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      {console.log('Users in render inside:', users)}
      <UsersList users={users} loading={loading} error={error} />
      <AddUserForm createUser={createUser}/>
    </Box>
  );
};

export default UsersPage;