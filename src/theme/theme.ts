import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
palette: {
  mode: 'light',
  background: {
     default: '#F5F5F5',
      paper: '#FFFFFF',
  },
  primary: {
    main: '#1F232C'
  },
  secondary: {
    main: '#eeba30'
  }
}
});