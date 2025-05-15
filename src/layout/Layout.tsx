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
      }}
    >
      <Navbar />
    </Box>
  );
};

export default Layout;
