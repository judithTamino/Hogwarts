import 'remixicon/fonts/remixicon.css';
import {
  Container,
  Drawer,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinksSx } from './NavbarStyles';

interface NavMobileProps {
  navLinks: Record<string, string>[];
}

const NavMobile: FunctionComponent<NavMobileProps> = ({ navLinks }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor='top'
      >
        <Container sx={{ position: 'relative' }}>
          <List>
            {navLinks.map((navLink, index) => (
              <ListItem
                key={index}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  textAlign: 'center',
                }}
              >
                <ListItemText>
                  <Typography
                    key={index}
                    variant='body1'
                    sx={navLinksSx}
                    component={NavLink}
                    to={`${navLink.link}`}
                  >
                    {navLink.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <IconButton
            onClick={() => setOpenDrawer(false)}
            color='secondary'
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
          >
            <Icon className='ri-close-line' />
          </IconButton>
        </Container>
      </Drawer>

      <IconButton onClick={() => setOpenDrawer(true)} color='secondary'>
        <Icon className='ri-menu-line' />
      </IconButton>
    </>
  );
};

export default NavMobile;
