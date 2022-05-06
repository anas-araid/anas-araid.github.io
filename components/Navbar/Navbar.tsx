import { useKBar, VisualState } from 'kbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useThemeContext } from '../../hooks/useThemeContext';
import { RootState } from '../../store';
import { concatClassNames } from '../../utils/tailwind';
import { KBarButton } from '../Kbar/KBarButton';

const Navbar: FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  const { query } = useKBar();
  const { isDark, setDarkMode, theme } = useThemeContext();

  const isAboutPageActive = useAppSelector((state: RootState) => state.featureFlags.isAboutPageActive);
  const isPostPageActive = useAppSelector((state: RootState) => state.featureFlags.isPostPageActive);

  // BAD CODE - preventing navbar bg from flickering
  const [background, setBackground] = useState('transparent');

  useEffect(() => {
    setBackground(theme.backgroundColor);
  }, [isDark]);

  return (
    <div className={concatClassNames(background, 'bg-opacity-90 rounded-b-md transition-all duration-300 sticky top-0 flex pt-10 pb-10 md:pt-20 w-full z-10')}>
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
            {isAboutPageActive || isPostPageActive ? (
              <Link href='/'>
                <a className={concatClassNames('mr-6', router.pathname === '/' ? 'opacity-60' : '')}>Home</a>
              </Link>
            ) : null}
            {isAboutPageActive && (
              <Link href='/about'>
                <a className={concatClassNames('mr-6', router.pathname === '/about' ? 'opacity-60' : '')}>About</a>
              </Link>
            )}
            {isPostPageActive && (
              <Link href='/posts'>
                <a className={concatClassNames('mr-6', router.pathname === '/post' ? 'opacity-50' : '')}>Posts</a>
              </Link>
            )}
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
