// src/theme.js
import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#284B46',
    },
    secondary: {
      main: '#61dafb',
    },
    error: {
      main: '#ef4444',
    },
    success: {
      main: '#22c55e',
    },
    warning: {
      main: '#f59e0b',
    },
    background: {
      default: '#F0EBDE',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#213547',
      secondary: '#888',
    },
    custom: {
      borderColor: '#e5e7eb',
      primaryHover: '#535bf2',
    },
  },
  typography: {
    // These fonts are from your default.css file
    fontFamily: [
      'Merriweather',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
  spacing: 8, // Corresponds to your --spacing-unit
  shape: {
    borderRadius: 8, // Corresponds to your --border-radius
  },
  transitions: {
    duration: {
      // Corresponds to your --transition-speed of 0.3s
      standard: 300,
    },
  },
});

export default appTheme;