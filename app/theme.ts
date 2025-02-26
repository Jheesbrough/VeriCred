'use client';
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Dark Blue
    },
    secondary: {
      main: '#006699', // Blue
    },
    background: {
      default: '#f4f4f4', // Light Grey
    },
    warning: {
      main: '#ffcc00', // Yellow
    },
    info: {
      main: '#3399ff', // Light Blue
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
