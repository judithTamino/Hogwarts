import type { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Academics from '../pages/Academics';
import News from '../pages/News';
import SchoolLife from '../pages/SchoolLife';
import Contact from '../pages/Contact';

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/academics' element={<Academics />} />
      <Route path='/news' element={<News />} />
      <Route path='/school' element={<SchoolLife />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
