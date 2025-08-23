import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const ReminderForm = ({ onAddReminder }) => {
  const [reminderText, setReminderText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reminderText.trim() !== '') {
      onAddReminder(reminderText);
      setReminderText('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Add Reminder"
        variant="outlined"
        value={reminderText}
        onChange={(e) => setReminderText(e.target.value)}
        sx={{ mb: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Reminder
      </Button>
    </Box>
  );
};