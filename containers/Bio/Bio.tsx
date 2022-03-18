import { useEffect, useState } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils/tailwind';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import Sparkles from '../../components/Sparkles/Sparkles';

const EXPLOSION_DURATION = 3000;

const Bio = (): JSX.Element => {
  const { isDark } = useThemeContext();
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    if (isExploding) {
      setTimeout(() => {
        setIsExploding(false);
      }, EXPLOSION_DURATION);
    }
  }, [isExploding]);

  return (
    <div className='mt-20'>
      {isExploding && (
        <div>
          <div className='absolute top-1/2 left-1/2  z-50'>
            <ConfettiExplosion duration={EXPLOSION_DURATION} floorWidth={document.documentElement.offsetWidth} />
          </div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 z-50'>
            <img className='doge h-80' src='/assets/doge.png' />
          </div>
          <div className='w-1/2 nyan absolute left-0 top-1/3 z-50'>
            <img className='h-24' src='/assets/nyan.gif' />
          </div>
        </div>
      )}
      <p className='text-xl mt-8 font-font-normal'>
        Well, I’m a non-award winning frontend developer, HCI undergraduate and maker of dad jokes without being a dad.
      </p>
      <p className='text-xl mt-8 font-normal'>
        Currently I’m working with good people and pushing pixels at{' '}
        <a onClick={() => window.open('https://belkadigital.com', '_blank')} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </p>
      <h2 className='text-2xl mt-10 font-medium'>What else?</h2>
      <p className='text-xl mt-8 font-normal'>
        I was born and raised in <span className='font-medium'>Trento</span>, a small city in the heart of the Italian Alps.{' '}
      </p>
      <p className='text-xl mt-8 font-normal'>In my spare time I enjoy </p>
      <ul className='list-disc pl-8'>
        <li>
          <p className='text-xl font-normal'>
            Building things using <span className='font-medium'>React</span> and <span className='font-medium'>TypeScript</span>.
          </p>
        </li>
        <li>
          <p className='text-xl font-normal'>Hiking and playing football.</p>
        </li>
        <li>
          <p className='text-xl font-normal'>
            Designing{' '}
            <span onClick={() => setIsExploding(true)} className='underline--magical rainbow-gradient-bg pt-1 cursor-pointer hover:text-white'>
              <Sparkles>memes</Sparkles>
            </span>
            .
          </p>
        </li>
        <li>
          <p className='text-xl font-normal'>Rescuing cats from trees. Yes, for real.</p>
        </li>
      </ul>

      <h2 className='text-2xl mt-10 font-medium '>And that’s it.</h2>
      <p className='text-xl mt-8 mb-32 font-normal'>
        But if you’re still curious, you can check out my{' '}
        <a onClick={() => window.open('https://www.github.com/asdf1899/', '_blank')} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>GitHub</b>
        </a>{' '}
        profile.
      </p>
    </div>
  );
};

export default Bio;
