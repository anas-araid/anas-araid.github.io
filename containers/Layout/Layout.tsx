import { useKBar, VisualState } from 'kbar';
import { AppProps } from 'next/app';
import { Navbar } from '../../components/Navbar';
import { concatClassNames } from '../../utils';

const Layout = ({ pageProps, Component }: AppProps): JSX.Element => {
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  return (
    <div className={concatClassNames('flex justify-center px-5', visible ? 'opacity-25' : '')}>
      <div className='max-w-2xl w-full'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default Layout;
