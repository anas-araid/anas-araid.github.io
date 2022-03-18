import React, { FunctionComponent, useEffect, useState } from 'react';
import { useKBar, VisualState } from 'kbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { KBarButton } from '../KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils/tailwind';
import Link from 'next/link';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RootState } from '../../store';

const Navbar: FunctionComponent = (): JSX.Element => {
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
        {isAboutPageActive || isPostPageActive ? (
          <Link href='/'>
            <a className='mr-6'>Home</a>
          </Link>
        ) : null}
        {isAboutPageActive && (
          <Link href='/about'>
            <a className='mr-6'>About</a>
          </Link>
        )}
        {isPostPageActive && (
          <Link href='/posts'>
            <a className='mr-6'>Posts</a>
          </Link>
        )}
        <div onClick={() => setDarkMode(!isDark)}>
          <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
