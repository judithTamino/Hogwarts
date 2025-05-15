import { Box } from '@mui/material';
import type { FunctionComponent } from 'react';
import Navbar from '../components/Navbar/Navbar';

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Navbar />

      <Box
        sx={{
          backgroundColor: '#1F232C',
          color: '#fff',
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        hello
      </Box>
    </Box>
  );
};

export default Layout;
