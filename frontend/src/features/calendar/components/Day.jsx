import { Box, Paper, Typography } from '@mui/material';
import { HourlyView } from './HourlyView'; // Import the new component
import { Reminders } from './Reminders';

export const DayDetails = ({ date }) => {
  if (!date) {
    return null; // Don't render if no date is selected
  }

  return (
    <Paper sx={{ mt: 2, p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Details for {date.toLocaleDateString()}
      </Typography>

      {/* This is a simple section for notes or a summary */}
      <Box sx={{ my: 2 }}>
        <Typography variant="body1">
          This is where you can display general notes or a daily summary.
        </Typography>
      </Box>

      <Reminders />
      <HourlyView />
    </Paper>
  );
};