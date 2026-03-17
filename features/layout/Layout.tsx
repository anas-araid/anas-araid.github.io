import { AppProps } from 'next/app';
import { Navbar } from '../../components/navbar';
import { ScreenSaver } from '../../components/screensaver';
import { useCmdk } from '../../contexts/cmdk-context';
import { useWindowInactivity } from '../../hooks/useWindowInactivity';
import { concatClassNames } from '../../utils/tailwind';

const Layout = ({ pageProps, Component }: AppProps): JSX.Element => {
  const { open: visible } = useCmdk();

  const inactive = useWindowInactivity();

  if (inactive) {
    return <ScreenSaver />;
  }

  return (
    <div className={concatClassNames('transition-all', visible ? 'opacity-25' : '')}>
      <Navbar />
      <div className='flex justify-center px-5'>
        <div className='max-w-2xl w-full'>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
