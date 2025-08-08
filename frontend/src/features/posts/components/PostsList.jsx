import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import PostsCard from './PostsCard';

const PostsList = ({ posts, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!posts || !posts.length) {
    return (
      <Typography variant="body1" align="center" mt={4}>
        No posts found.
      </Typography>
    );
  }

  return (
    <Box>
      {posts.map((post) => (
        <PostsCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostsList;