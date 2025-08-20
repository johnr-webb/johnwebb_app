// AddUserForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const AddUserForm = ({createUser}) => {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleAddUser = () => {
    createUser({ username: newUsername, email: newEmail });
    setNewUsername('');
    setNewEmail('');
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        label="Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <TextField
        label="Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <Button variant="contained" onClick={handleAddUser}>
        Add User
      </Button>
    </Box>
  );
};

export default AddUserForm;