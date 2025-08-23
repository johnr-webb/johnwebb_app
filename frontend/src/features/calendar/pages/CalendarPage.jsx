// src/features/calendar/pages/CalendarPage.jsx
import { Container, Box, Typography } from '@mui/material';
import { Calendar } from '../components/Calendar';

const CalendarPage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: '1rem',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      <Box sx={{ textAlign: 'center', my: 4 }}>
        <Typography variant="h3" component="h1">
          Calendar
        </Typography>
        <Typography variant="h6">
          The view from above
        </Typography>
      </Box>
      <Calendar />
    </Container>
  );
};

export default CalendarPage;