import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { type FunctionComponent } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

interface NavbarProps {}

const navLinks: Record<string, string>[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Academic',
    link: '/academics',
  },
  {
    name: 'News',
    link: '/news',
  },
  {
    name: 'School Life',
    link: '/school',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <AppBar component={'nav'}>
      <Toolbar>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            component={'img'}
            sx={{ maxWidth: 40 }}
            alt='Hogwarts logo'
            src='logo.png'
          />

          {isMobile ? (
            <NavMobile navLinks={navLinks} />
          ) : (
            <NavDesktop navLinks={navLinks} />
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
