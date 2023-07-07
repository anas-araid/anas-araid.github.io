import { FunctionComponent, useEffect } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { useTrackLink } from '../../hooks/useTrackLink';
import { concatClassNames } from '../../utils/tailwind';

const Home: FunctionComponent = () => {
  const { theme } = useThemeContext();
  const openLink = useTrackLink();

  useEffect(() => {
    const el = document.getElementById('belka-logo');

    const restartAnimation = (e: Event) => {
      e.preventDefault();
      el?.classList.remove('animated-belka-logo');
      void el?.offsetWidth;
      setTimeout(() => {
        el?.classList.add('animated-belka-logo');
      }, 50)
    }
    el?.addEventListener('mouseenter', restartAnimation, false);
    return () => el?.removeEventListener('mouseenter', restartAnimation);
  }, [])

  return (
    <div className='mt-20'>
      <h1 className={concatClassNames('text-4xl font-normal', theme.homeTitle)}>Anas Araid</h1>
      <div className='flex flex-row items-center h-auto mt-12'>
        <h3 className='text-xl font-normal inline'>
          Designing and building interfaces — currently at
        </h3>
        <svg
          id='belka-logo'
          className='inline ml-0.5 mt-0.5 animated-belka-logo cursor-pointer'
          style={{ height: '22px' }}
          onClick={() => openLink('https://belkadigital.com')}
          viewBox='0 0 432 125'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M24 101L68.9981 101C88.8407 101 100.985 92.7485 100.985 79.2857C100.985 69.7314 94.8043 63 84.7204 61.5886L84.7204 61.1543C93.0694 59.7428 98.274 53.88 98.274 45.6286C98.274 32.8171 86.3468 25 66.8295 25L24 25L24 101ZM48.3966 55.4L48.3966 40.2L63.5767 40.2C69.6487 40.2 73.3353 43.1314 73.3353 47.8C73.3353 52.4686 69.6487 55.4 63.5767 55.4L48.3966 55.4ZM48.3966 85.2571L48.3966 70.0571L65.7452 70.0571C71.8173 70.0571 75.5039 72.9886 75.5039 77.6571C75.5039 82.3257 71.8173 85.2571 65.7452 85.2571L48.3966 85.2571Z' fill={theme.belkaLogo} />
          <path d='M172.603 42.9143L172.603 25L108.63 25L108.63 101L173.145 101L173.145 82.5428L133.026 82.5428L133.026 70.6L165.965 70.6L165.965 54.3143L133.026 54.3143L133.026 42.9143L172.603 42.9143Z' fill={theme.belkaLogo} />
          <path d='M206.75 82.5428L206.75 25L182.353 25L182.353 101L237.864 101L237.864 82.5428L206.75 82.5428Z' fill={theme.belkaLogo} />
          <path d='M328.453 101L295.707 56.7028L327.369 25L298.635 25L270.986 55.4L270.986 25L246.047 25L246.047 101L270.986 101L270.986 81.4571L279.335 73.0971L299.177 101L328.453 101Z' fill={theme.belkaLogo} />
          <path d='M389.886 101L415.692 101L382.621 25L352.261 25L319.19 101L344.779 101L350.96 85.7999L383.705 85.7999L389.886 101ZM358.116 68.4285L367.441 45.6285L376.657 68.4285L358.116 68.4285Z' fill={theme.belkaLogo} />
        </svg>
      </div>
    </div>
  );
};

export default Home;
