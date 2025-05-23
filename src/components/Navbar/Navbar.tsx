import { useState, type FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

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
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className='header'>
      <nav className='nav container'>
        <img className='nav-logo' src='./logo.png' alt='school logo' />

        <div className={`nav-menu ${showMenu && 'show-menu'}`}>
          <ul className='nav-list'>
            {navLinks.map((page, index) => (
              <li key={index} className='nav-item'>
                <NavLink
                  to={`${page.link}`}
                  className={({ isActive }) =>
                    isActive ? 'active-link' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* <-- close button --> */}
          <div className='nav-close' onClick={closeMenu}>
            <i className='ri-close-line' />
          </div>
        </div>

        <div className='nav-toggle' onClick={() => setShowMenu(true)}>
          <i className='ri-menu-line' />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
