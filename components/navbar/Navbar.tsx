import { useKBar, VisualState } from 'kbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import { isMobile } from 'react-device-detect';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils/tailwind';
import { KBarButton } from '../kbar/KBarButton';

const Navbar: FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const { query } = useKBar();
  const { isDark, setDarkMode, theme } = useThemeContext();

  return (
    <div className={concatClassNames(theme.backgroundColor, 'rounded-b-md transition-all duration-300 sticky top-0 flex pt-10 pb-10 md:pt-20 w-full z-10')}>
      <div className='flex w-1/2 justify-start'>
        <div
          onClick={() =>
            query.setVisualState((vs) => ([VisualState.animatingOut, VisualState.hidden].includes(vs) ? VisualState.animatingIn : VisualState.animatingOut))
          }
        >
          <KBarButton isDarkMode={isDark} />
        </div>
      </div>
      <div className='flex w-1/2 justify-end m-auto'>
        {!isMobile && (
          <span>
            <Link href='/' className={concatClassNames('mr-6', router.pathname === '/' ? 'opacity-60' : '')}>
              Home
            </Link>
            <Link href='/about' className={concatClassNames('mr-6', router.pathname === '/about' ? 'opacity-60' : '')}>
              About
            </Link>
          </span>
        )}
        <div onClick={() => setDarkMode(!isDark)}>
          <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
