import ConfettiExplosion from 'react-confetti-explosion';
import { useEffect, useState } from 'react';
import { Sparkles } from '../../components/sparkles';
import { TWITTER_URL } from '../../constants';
import { useThemeContext } from '../../hooks/useThemeContext';
import { useTrackLink } from '../../hooks/useTrackLink';
import { captureEvent, CLICK_EVENT } from '../../lib/analytics';
import { concatClassNames } from '../../utils/tailwind';

const EXPLOSION_DURATION = 3000;

const Bio = (): JSX.Element => {
  const { isDark } = useThemeContext();
  const [isExploding, setIsExploding] = useState(false);
  const openLink = useTrackLink();

  useEffect(() => {
    if (isExploding) {
      setTimeout(() => {
        setIsExploding(false);
      }, EXPLOSION_DURATION);
    }
  }, [isExploding]);

  const handleMemesClick = () => {
    captureEvent(CLICK_EVENT, {
      event_label: 'memes_link',
    });
    setIsExploding(true);
  }

  return (
    <div className='mt-20'>
      {isExploding && (
        <div>
          <div className='absolute top-1/2 left-1/2  z-50'>
            <ConfettiExplosion duration={EXPLOSION_DURATION} />
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
        Well, I’m a non-award winning frontend developer, Human-Computer Interaction graduate and maker of dad jokes without being a dad.
      </p>
      <p className='text-xl mt-8 font-normal'>
        Currently I’m working with good people and pushing pixels at{' '}
        <a onClick={() => openLink('https://belkadigital.com')} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Belka</b>
        </a>
        .
      </p>
      <h2 className='text-2xl mt-10 font-medium'>What else?</h2>
      <p className='text-xl mt-8 font-normal'>
        I was born and raised in <u>Trento</u>, a small city in the heart of the Italian Alps.{' '}
      </p>
      <p className='text-xl mt-8 font-normal'>In my spare time I enjoy </p>
      <ul className='pl-8 shiny-list'>
        <li>
          <p className='text-xl font-normal'>
            Building things using <u>React</u> and <u>TypeScript</u>.
          </p>
        </li>
        <li>
          <p className='text-xl font-normal'>Hiking and playing football.</p>
        </li>
        <li>
          <p className='text-xl font-normal'>
            Designing{' '}
            <span onClick={() => handleMemesClick()} className='underline--magical rainbow-gradient-bg pt-1 cursor-pointer hover:text-white'>
              <Sparkles>memes</Sparkles>
            </span>
            .
          </p>
        </li>
        <li>
          <p className='text-xl font-normal'>Rescuing cats from trees.</p>
        </li>
      </ul>

      <h2 className='text-2xl mt-10 font-medium '>And that’s it.</h2>
      <p className='text-xl mt-8 mb-32 font-normal'>
        The best way to contact me is on{' '}
        <a onClick={() => openLink(TWITTER_URL)} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium underline--magical pt-1', isDark ? 'underline--dark' : 'underline--light')}>Twitter</b>
        </a>.
      </p>
    </div>
  );
};

export default Bio;
