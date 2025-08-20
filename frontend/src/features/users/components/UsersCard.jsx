// UserCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {user.username}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          {user.email}
        </Typography>
        {user.created_at && (
          <Typography variant="body2" color="text.secondary">
            Joined: {new Date(user.created_at).toLocaleDateString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCard;