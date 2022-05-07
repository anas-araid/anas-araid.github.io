import { useKBar, VisualState } from 'kbar';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Loading } from '../../components/loading';
import { Navbar } from '../../components/navbar';
import { ScreenSaver } from '../../components/screensaver';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useWindowInactivity } from '../../hooks/useWindowInactivity';
import { RootState } from '../../store';
import { concatClassNames } from '../../utils/tailwind';

const Layout = ({ pageProps, Component }: AppProps): JSX.Element => {
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));
  const isLoading = useAppSelector((state: RootState) => state.featureFlags.isLoading);

  const { inactive, resetTimer } = useWindowInactivity();

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach((name) => {
      document.addEventListener(name, resetTimer, true);
    });
  }, []);

  if (inactive) {
    return <ScreenSaver />;
  }

  return !isLoading ? (
    <div className={concatClassNames('flex justify-center px-5 transition-all', visible ? 'opacity-25' : '')}>
      <div className='max-w-2xl w-full'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Layout;
