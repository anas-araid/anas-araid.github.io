import { FunctionComponent } from 'react';
import { concatClassNames } from '../../utils';

interface IHomeProps {
  isDarkMode: boolean;
}

const Home: FunctionComponent<IHomeProps> = ({ isDarkMode }) => (
  <div className='mt-20'>
    <h1 className='text-5xl font-bold'>Anas Araid</h1>
    <h3 className='text-xl mt-12 mb-8'>
      Frontend developer, <span className='line-through'>designer</span> and firefighter based in{' '}
      <a
        onClick={() => window.open('https://goo.gl/maps/6fnYAANFEEsi1Mce7', '_blank')}
        className={concatClassNames(
          'cursor-pointer font-bold text-gradient bg-gradient-to-br',
          isDarkMode ? ' from-pink-300 via-purple-300 to-indigo-400' : 'from-pink-500 via-red-500 to-yellow-500'
        )}
      >
        <b>Trento</b>
      </a>
      .
    </h3>
    <h3 className='text-xl'>
      Crafting amazing products at{' '}
      <a onClick={() => window.open('https://belkadigital.com', '_blank')} className='cursor-pointer font-bold 0'>
        <b className={concatClassNames(isDarkMode ? 'underline--magical underline--dark' : 'underline--magical underline--light')}>Belka</b>
      </a>
      .
    </h3>
  </div>
);

export default Home;
