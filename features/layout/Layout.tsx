import { useKBar, VisualState } from 'kbar';
import { AppProps } from 'next/app';
import { Navbar } from '../../components/navbar';
import { ScreenSaver } from '../../components/screensaver';
import { useWindowInactivity } from '../../hooks/useWindowInactivity';
import { concatClassNames } from '../../utils/tailwind';

const Layout = ({ pageProps, Component }: AppProps): JSX.Element => {
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  const inactive = useWindowInactivity();

  if (inactive) {
    return <ScreenSaver />;
  }

  return (
    <div className={concatClassNames('flex justify-center px-5 transition-all', visible ? 'opacity-25' : '')}>
      <div className='max-w-2xl w-full'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default Layout;
