import React from 'react';
import { Box, Typography } from '@mui/material';
import PostsCard from './PostsCard';
import LoadingSkeleton from '../../../components/LoadingSkeleton';

const PostsList = ({ posts, loading }) => {
  if (loading) {
    return <LoadingSkeleton count={3} height={150} />;
  }

  if (!posts || !posts.length) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          No posts found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          There are no posts available at the moment.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {posts.map((post) => (
        <PostsCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default PostsList;
