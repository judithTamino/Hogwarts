import type { FunctionComponent, ReactNode } from 'react';
import './HeroLayout.css';

interface HeroLayoutProps {
  children: ReactNode;
}

const HeroLayout: FunctionComponent<HeroLayoutProps> = ({ children }) => {
  return (
    <div className='hero-curved'>
      {children}
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 319'>
        <path
          fill='#f5f5f5'
          fillOpacity='1'
          d='M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,117.3C672,96,768,64,864,85.3C960,107,1056,181,1152,197.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </div>
  );
};

export default HeroLayout;
