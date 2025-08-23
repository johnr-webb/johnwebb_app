import { useState } from 'react';
import { Box, Stack, IconButton, Typography, Paper } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DayDetails } from './Day';

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const getFirstDayOfWeek = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(currentDate);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day) => {
    if (selectedDay && day.toDateString() === selectedDay.toDateString()) {
      setSelectedDay(null); // Deselect if the same day is clicked
      return;
    }
    setSelectedDay(day);
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  console.log(firstDay);
  // Pad the days with empty strings to align the first day of the month
  const paddedDays = [...Array(firstDay).fill(''), ...daysInMonth];
  console.log("Padded Days:", paddedDays);
  return (
    <Box sx={{ maxWidth: '1800px', mx: 'auto', p: 2 }}>
      {/* Month and Year Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <IconButton onClick={handlePreviousMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography variant="h5" sx={{ textTransform: 'capitalize' }}>
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </Typography>
        <IconButton onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* Calendar layout using Stack */}
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="flex-start"
        spacing={1}
      >
        {/* Days of the week header (Fixed) */}
        {daysOfWeek.map((day) => (
          <Box
            key={day}
            sx={{
              flexBasis: 'calc(100% / 7 - 8px)',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            <Typography variant="body2">{day}</Typography>
          </Box>
        ))}
        {/* Calendar Day Cells */}
        {paddedDays.map((day, index) => (
          <Box
            key={index}
            sx={{
              flexBasis: 'calc(100% / 7 - 8px)',
              textAlign: 'center',
            }}
          >
            {day && (
              <Paper
                sx={{
                  p: 1,
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  bgcolor: day.toDateString() === new Date().toDateString() ? 'primary.main' : 'background.paper',
                  color: day.toDateString() === new Date().toDateString() ? 'primary.contrastText' : 'text.primary',
                }}
                onClick={() => handleDayClick(day)}
              >
                <Typography>{day.getDate()}</Typography>
              </Paper>
            )}
          </Box>
        ))}
      </Stack>
      {/* The DayDetails component that opens on click */}
      <DayDetails date={selectedDay} />
    </Box>
  );
};