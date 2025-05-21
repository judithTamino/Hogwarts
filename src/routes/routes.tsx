import { lazy, Suspense, type FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Academics = lazy(() => import('../pages/Academics/Academics'));
const News = lazy(() => import('../pages/News/News'));
const SchoolLife = lazy(() => import('../pages/SchoolLife/SchoolLife'));
const Contact = lazy(() => import('../pages/Contact/Contact'));

interface AppRoutesProps {}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/news' element={<News />} />
        <Route path='/school' element={<SchoolLife />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
