import { useKBar, VisualState } from 'kbar';
import { AppProps } from 'next/app';
import { Loading } from '../../components/loading';
import { Navbar } from '../../components/navbar';
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
    <Loading />
  );
};

export default Layout;
