import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F5F5F5',
      paper: '#1F232C',
    },
    primary: {
      main: '#1F232C',
    },
    secondary: {
      main: '#eeba30',
    },
  }
});
