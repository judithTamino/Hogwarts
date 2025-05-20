import { type FunctionComponent } from 'react';


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
  return (
   <></>
  );
};

export default Navbar;
