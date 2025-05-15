import { Box, Typography } from '@mui/material';
import type { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinksSx } from './NavbarStyles';

interface NavDesktopProps {
  navLinks: Record<string, string>[];
}

const NavDesktop: FunctionComponent<NavDesktopProps> = ({ navLinks }) => {
  return (
    <Box component={'nav'} sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
      {navLinks.map((page, index) => (
        <Typography
          key={index}
          variant='body1'
          sx={navLinksSx}
          component={NavLink}
          to={`${page.link}`}
        >
          {page.name}
        </Typography>
      ))}
    </Box>
  );
};

export default NavDesktop;
