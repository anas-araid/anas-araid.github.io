import { FunctionComponent } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { useThemeContext } from '../../hooks/useThemeContext';
import { useTrackLink } from '../../hooks/useTrackLink';
import { concatClassNames } from '../../utils/tailwind';

const Home: FunctionComponent = () => {
  const { isDark, theme } = useThemeContext();
  const openLink = useTrackLink();

  return (
    <div className='mt-20'>
      <h1 className='text-4xl font-normal'>Anas Araid</h1>
      <h3 className='text-xl mt-12 mb-8 font-normal'>
        Multidisciplinary frontend developer, <RoughNotation type="crossed-off" animationDuration={1500} show={true}>designer</RoughNotation> and firefighter based in{' '}
        <a
          onClick={() => openLink('https://goo.gl/maps/6fnYAANFEEsi1Mce7')}
          className={concatClassNames('cursor-pointer font-medium text-gradient bg-gradient-to-br', theme.gradientText)}
        >
          <b className='font-medium'>Trento</b>
        </a>
        .
      </h3>
      <h3 className='text-xl font-normal'>
        Crafting digital products at{' '}
        <a onClick={() => openLink('https://belkadigital.com')} className='cursor-pointer font-medium 0'>
          <b className={concatClassNames('font-medium underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </h3>
    </div>
  );
};

export default Home;
