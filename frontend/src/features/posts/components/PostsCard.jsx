import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostsCard = ({ post }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {post.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 1.5 }}>
          {post.content}
        </Typography>
        {post.created_at && (
          <Typography variant="body2" color="text.secondary">
            Created: {new Date(post.created_at).toLocaleDateString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PostsCard;