import { useKBar, VisualState } from 'kbar';
import { AppProps } from 'next/app';
import { Navbar } from '../../components/Navbar';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../store';
import { concatClassNames } from '../../utils/tailwind';

const Layout = ({ pageProps, Component }: AppProps): JSX.Element => {
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  const isLoading = useAppSelector((state: RootState) => state.featureFlags.isLoading);

  return !isLoading ? (
    <div className={concatClassNames('flex justify-center px-5', visible ? 'opacity-25' : '')}>
      <div className='max-w-2xl w-full'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  ) : (
    <div className='flex m-auto h-screen w-full'>
      <img src='/assets/loading.svg' className='m-auto h-52' alt='loading' />
    </div>
  );
};

export default Layout;
