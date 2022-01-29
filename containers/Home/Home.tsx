import { FunctionComponent } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  return (
    <div className='mt-20'>
      <h1 className='text-5xl font-bold'>Anas Araid</h1>
      <h3 className='text-xl mt-12 mb-8'>
        Frontend developer, <span className='line-through'>designer</span> and firefighter based in{' '}
        <a
          onClick={() => window.open('https://goo.gl/maps/6fnYAANFEEsi1Mce7', '_blank')}
          className={concatClassNames('cursor-pointer font-bold text-gradient bg-gradient-to-br', theme.gradientText)}
        >
          <b>Trento</b>
        </a>
        .
      </h3>
      <h3 className='text-xl'>
        Crafting digital products at{' '}
        <a onClick={() => window.open('https://belkadigital.com', '_blank')} className='cursor-pointer font-bold 0'>
          <b className={concatClassNames('underline--magical', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </h3>
    </div>
  );
};

export default Home;
