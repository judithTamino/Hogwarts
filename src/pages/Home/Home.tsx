import type { FunctionComponent } from 'react';
import Layout from '../../layout/Layout';
import HeroLayout from '../../layout/HeroLayout/HeroLayout';

interface HomeProps {}
const Home: FunctionComponent<HomeProps> = () => {
  return (
    <Layout>
      <HeroLayout>
        <section className='home'>
          <div className='home-container container grid'>
            <div className='home-img'>
              <img src='/home/home.jpg' alt='Hogwarts castle' />
            </div>

            <div className='home-data'>
              <h1 className='hero-title'>
                Hogwarts: School of Witchcraft <br/> and Wizardry
              </h1>
              <p className='hero-description'>
                For over a thousand years, we have nurtured the brightest young
                witches and wizards, guiding them through a world of
                enchantment, learning, and discovery.
              </p>
              <a href="#" className="button">Learn More</a>
            </div>
          </div>
        </section>
      </HeroLayout>
    </Layout>
  );
};

export default Home;
