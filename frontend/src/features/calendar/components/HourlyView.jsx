import { Box, Typography } from '@mui/material';

export const HourlyView = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Hourly Schedule
      </Typography>
      {hours.map((hour) => (
        <Box
          key={hour}
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid',
            borderColor: 'divider',
            p: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              minWidth: '60px',
              mr: 2,
              fontWeight: 'bold',
            }}
          >
            {hour}:00
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Placeholder for events or tasks */}
            No events scheduled
          </Typography>
        </Box>
      ))}
    </Box>
  );
};