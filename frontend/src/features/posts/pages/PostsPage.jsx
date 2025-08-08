import React from 'react';
import { Box, Typography } from '@mui/material';
// Import hooks
import { usePosts } from '../hooks/usePosts';
// Import components
import PostsList from '../components/PostsList';
import AddPostForm from '../components/AddPostForm';

const PostsPage = () => {
  const { posts, createPost, loading, error } = usePosts();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <PostsList posts={posts} loading={loading} error={error} />
      <AddPostForm createPost={createPost} />
    </Box>
  );
};

export default PostsPage;