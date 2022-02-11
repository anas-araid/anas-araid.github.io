import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className='mt-20'>
      <h1 className='text-4xl font-medium'>Anas Araid</h1>
      <h3 className='text-xl mt-12 mb-8 font-light'>
        Frontend developer, <span className='line-through'>designer</span> and firefighter based in{' '}
        <a
          onClick={() => window.open('https://goo.gl/maps/6fnYAANFEEsi1Mce7', '_blank')}
          className={concatClassNames('cursor-pointer font-bold text-gradient bg-gradient-to-br', theme.gradientText)}
        >
          <b className='font-bold'>Trento</b>
        </a>
        .
      </h3>
      <h3 className='text-xl font-light'>
        Crafting digital products at{' '}
        <a onClick={() => window.open('https://belkadigital.com', '_blank')} className='cursor-pointer font-bold 0'>
          <b className={concatClassNames('font-bold underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </h3>
    </div>
  );
};

export default Home;
