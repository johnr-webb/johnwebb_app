// filepath: frontend/src/features/posts/components/AddPostForm.jsx
import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const AddPostForm = ({createPost}) => {
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddPost = () => {
    createPost({ title: newTitle, content: newContent });
    setNewTitle('');
    setNewContent('');
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        label="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <TextField
        label="Content"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
        sx={{ marginRight: 1 }}
      />
      <Button variant="contained" onClick={handleAddPost}>
        Add Post
      </Button>
    </Box>
  );
};

export default AddPostForm;