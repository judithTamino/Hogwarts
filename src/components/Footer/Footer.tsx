import type { FunctionComponent } from 'react';
import navLinks from '../../data/navLinks.json';
import { NavLink } from 'react-router-dom';
import './Footer.css';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className='footer section'>
      <div className='footer-container container grid'>
        <div className='footer-logo'>
          <img src='./logo.png' alt='school logo' />
          Hogwarts
        </div>
        <div className='footer-content grid'>
          <ul className='footer-links grid'>
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink to={`${navLink.link}`} className='footer-link'>
                  {navLink.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className='footer-social'>
            <a href='#' className='footer-social--link'>
              <i className='ri-facebook-line' />
            </a>
            <a href='#' className='footer-social--link'>
              <i className='ri-twitter-x-line' />
            </a>
            <a href='#' className='footer-social--link'>
              <i className='ri-instagram-line' />
            </a>
          </ul>
        </div>
      </div>

      <div className='footer-info container'>
        <span className='footer-copy'>&#169; Judith. All rigths reserved</span>

        <div className='footer-privacy'>
          <a href='#'>Terms & Agreements</a>
          <a href='#'>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
