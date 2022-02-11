import { FunctionComponent, useEffect, useState } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

const EXPLOSION_DURATION = 3000;

const Bio: FunctionComponent = () => {
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
      <div className='absolute top-1/2 left-1/2'>
        {isExploding && <ConfettiExplosion duration={EXPLOSION_DURATION} floorWidth={document.documentElement.offsetWidth} />}
      </div>

      <h3 className='text-xl mt-12 font-light'>
        Well, I’m a non-award winning frontend developer, HCI undergraduate and maker of dad jokes without being a dad.
      </h3>
      <h3 className='text-xl mt-8 font-light'>
        Currently I’m working with good people and pushing pixels at{' '}
        <a onClick={() => window.open('https://belkadigital.com', '_blank')} className='cursor-pointer font-bold'>
          <b className={concatClassNames('font-bold underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </h3>
      <h3 className='text-2xl mt-8 font-light'>What else?</h3>
      <h3 className='text-xl mt-8 font-light'>
        I was born and raised in <span className='font-bold'>Trento</span>, a small city in the heart of the Italian Alps.{' '}
      </h3>
      <h3 className='text-xl mt-8 font-light'>In my spare time </h3>
      <ul className='list-disc pl-8'>
        <li>
          <h3 className='text-xl font-light'>
            I enjoy building things using <span className='font-bold'>React</span> and <span className='font-bold'>TypeScript</span>.
          </h3>
        </li>
        <li>
          <h3 className='text-xl font-light'>Hiking and playing football.</h3>
        </li>
        <li>
          <h3 className='text-xl font-light'>
            Designing{' '}
            <span onClick={() => setIsExploding(true)} className='underline--magical rainbow-gradient-bg pt-1 cursor-pointer hover:text-white'>
              memes
            </span>
            .
          </h3>
        </li>
        <li>
          <h3 className='text-xl font-light'>Rescuing cats from trees. Yes, for real.</h3>
        </li>
      </ul>

      <h3 className='text-2xl mt-8 font-light'>And that’s it.</h3>
      <h3 className='text-xl mt-8 mb-32 font-light'>
        Okay, now that you&apos;ve read this normie and cringe af bio 🌱 you can checkout my{' '}
        <a onClick={() => window.open('https://www.linkedin.com/in/anas-araid/', '_blank')} className='cursor-pointer font-bold 0'>
          <b className={concatClassNames('font-bold underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Linkedin</b>
        </a>{' '}
        profile.
      </h3>
    </div>
  );
};

export default Bio;
