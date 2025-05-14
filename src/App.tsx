import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Navbar from './components/Navbar';
import { lightTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth='md'>
        <Router>
          <AppRoutes />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
