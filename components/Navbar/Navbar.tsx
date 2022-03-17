import React, { FunctionComponent, useEffect, useState } from 'react';
import { useKBar, VisualState } from 'kbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { KBarButton } from '../KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils/tailwind';
import Link from 'next/link';

const Navbar: FunctionComponent = (): JSX.Element => {
  const { query } = useKBar();
  const { isDark, setDarkMode, theme } = useThemeContext();
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
        <Link href='/about'>
          <a className='mr-4'>About</a>
        </Link>
        <Link href='/posts'>
          <a className='mr-4'>Post</a>
        </Link>
        <div onClick={() => setDarkMode(!isDark)}>
          <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;