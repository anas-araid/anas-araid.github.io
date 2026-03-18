import { TWITTER_URL } from '../../constants';
import { useTrackLink } from '../../hooks/useTrackLink';
import { concatClassNames } from '../../utils/tailwind';
import Sparkles from '../../components/sparkles/Sparkles';
import { useThemeContext } from '../../hooks/useThemeContext';

const Bio = (): JSX.Element => {
  const { isDark } = useThemeContext();
  const openLink = useTrackLink();
  const sparkleColor = isDark ? '#ffffff' : '#000000';
  const textClass = isDark ? 'text-zinc-400' : 'text-zinc-500';

  return (
    <div className='mt-20'>
      <h2 className='text-2xl mt-8 font-medium'>Oh, hello.</h2>
      <p className='text-base mt-8 font-normal leading-relaxed'>
        Well, I'm a non-award winning UI engineer, HCI graduate and maker of dad jokes without being a dad. <br />
        Lately I'm interested in design systems, motion design and the <Sparkles color={sparkleColor}>feel of things.</Sparkles>
      </p>
      <p className={`text-base mt-4 font-normal leading-relaxed ${textClass}`}>The kind of detail you only notice when it&apos;s missing.</p>
      <p className='text-base mt-4 font-normal leading-relaxed'>
        Over the years I've worked with Segugio.it, Spiagge.it, NeN, Banca Sella, Fatture in Cloud, Soundtrap and a few others.
      </p>
      <h2 className='text-2xl mt-12 font-medium'>What else?</h2>
      <p className='text-base mt-6 font-normal leading-relaxed'>I was born and raised in Trento, in the Italian Alps.</p>
      <p className='text-base mt-4 font-normal leading-relaxed'>
        Outside of work I train as an endurance athlete and volunteer as a firefighter. Nobody said hobbies had to be relaxing.
      </p>
      <h2 className='text-2xl mt-12 font-medium'>And that's it.</h2>
      <p className='text-base mt-6 mb-32 font-normal leading-relaxed'>
        The best way to contact me is on{' '}
        <a onClick={() => openLink(TWITTER_URL)} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium pt-1')}>
            <u>Twitter</u>
          </b>
        </a>
        .
      </p>
    </div>
  );
};

export default Bio;
