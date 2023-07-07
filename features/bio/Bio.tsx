import { TWITTER_URL } from '../../constants';
import { useTrackLink } from '../../hooks/useTrackLink';
import { concatClassNames } from '../../utils/tailwind';

const Bio = (): JSX.Element => {
  const openLink = useTrackLink();

  return (
    <div className='mt-20'>
      <p className='text-xl mt-8 font-font-normal'>
        Well, I’m a non-award winning frontend developer, Human-Computer Interaction graduate and maker of dad jokes without being a dad.
      </p>
      <p className='text-xl mt-2 font-normal'>
        Lately I’m interested in spatial interfaces, design systems and micro interactions.
      </p>
      <h2 className='text-2xl mt-8 font-medium'>What else?</h2>
      <p className='text-xl mt-4 font-normal'>
        I was born and raised in Trento, a small city in the heart of the Italian Alps.
      </p>
      <p className='text-xl mt-2 font-normal'>Outside of work I enjoy cycling, firefighting and spending time with friends.</p>
      <h2 className='text-2xl mt-8 font-medium '>And that’s it.</h2>
      <p className='text-xl mt-4 mb-32 font-normal'>
        The best way to contact me is on{' '}
        <a onClick={() => openLink(TWITTER_URL)} className='cursor-pointer font-medium'>
          <b className={concatClassNames('font-medium pt-1')}><u>Twitter</u></b>
        </a>.
      </p>
    </div>
  );
};

export default Bio;
