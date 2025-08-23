// src/features/calendar/components/Reminders.jsx
import { useState } from 'react'; // Import useState
import { Box, Typography } from '@mui/material';
import { ReminderForm } from './ReminderForm';

export const Reminders = () => {
  // Use state to manage the list of reminders
  const [reminders, setReminders] = useState(['Check email', 'Call John', 'Buy groceries']);

  const handleAddReminder = (reminderText) => {
    // Add the new reminder to the state
    setReminders([...reminders, reminderText]);
    console.log('New Reminder Added:', reminderText);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Reminders
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {reminders.map((reminder, index) => (
          <Box
            key={index}
            component="li"
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid',
              borderColor: 'divider',
              p: 1,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {reminder}
            </Typography>
          </Box>
        ))}
      </Box>
      <ReminderForm onAddReminder={handleAddReminder} />
    </Box>
  );
};