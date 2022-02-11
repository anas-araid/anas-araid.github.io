import React, { FunctionComponent } from 'react';
import { useKBar, VisualState } from 'kbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { KBarButton } from '../KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import Link from 'next/link';

const Navbar: FunctionComponent = () => {
  const { query } = useKBar();
  const { isDark, setDarkMode } = useThemeContext();

  return (
    <div className='flex mt-10 md:mt-20'>
      <div className='flex w-1/2 justify-start'>
        <KBarButton
          isDarkMode={isDark}
          onClick={() =>
            query.setVisualState((vs) => ([VisualState.animatingOut, VisualState.hidden].includes(vs) ? VisualState.animatingIn : VisualState.animatingOut))
          }
        />
      </div>
      <div className='flex w-1/2 justify-end m-auto'>
        {/* <span className='mr-2 mt-0.5'>
          <Link href='/'>home</Link>
        </span>
        <span className='mr-4 mt-0.5'>
          <Link href='/about'>about</Link>
        </span> */}
        <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
      </div>
    </div>
  );
};

export default Navbar;
