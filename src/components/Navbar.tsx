import { AppBar, Box, Container, Stack, Toolbar } from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import 'remixicon/fonts/remixicon.css';

interface NavbarProps {}

const pages: Record<string, string>[] = [{ name: 'Home', id: '' }];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleToggleMenu = () => setMobileOpen((prevState) => !prevState);

  return (
    // <Box sx={{ display: 'flex' }}>
    //   <AppBar component='nav'>
    //     <Toolbar>
    //       <IconButton
    //         color='inherit'
    //         aria-label='open menu'
    //         edge='start'
    //         onClick={handleToggleMenu}
    //         sx={{ mr: 2, display: { sm: 'none' } }}
    //       >
    //         <Icon className='ri-menu-line' />
    //       </IconButton>

    //       <Box
    //         component='img'
    //         sx={{
    //           width: 20,
    //           flexGrow: 1,
    //           display: {
    //             xs: 'none',
    //             sm:'block'
    //           }
    //         }}
    //         alt='Hogwarts logo'
    //         src='logo.png'
    //       ></Box>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <AppBar>
      <Container>
        <Toolbar>
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            width='100%'
          >
            <Box
              component='img'
              sx={{
                width: 50,
                cursor: 'pointer',
              }}
              alt='Hogwarts logo'
              src='logo.png'
            ></Box>
            <Stack direction='row' gap={3}></Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
