import React, { FunctionComponent } from 'react';
import { useKBar, VisualState } from 'kbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { KBarButton } from '../KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import { concatClassNames } from '../../utils';

const Navbar: FunctionComponent = (): JSX.Element => {
  const { query } = useKBar();
  const { isDark, setDarkMode, theme } = useThemeContext();

  const buttonClass = `${theme.backgroundColor} bg-opacity-80 transition-all duration-300 p-3 rounded-full cursor-pointer`;

  return (
    <div className={concatClassNames('sticky top-0 flex pt-10 pb-10 md:pt-20')}>
      <div className='flex w-1/2 justify-start'>
        <div
          className={buttonClass}
          onClick={() =>
            query.setVisualState((vs) => ([VisualState.animatingOut, VisualState.hidden].includes(vs) ? VisualState.animatingIn : VisualState.animatingOut))
          }
        >
          <KBarButton isDarkMode={isDark} />
        </div>
      </div>
      <div className='flex w-1/2 justify-end m-auto'>
        <div className={buttonClass} onClick={() => setDarkMode(!isDark)}>
          <DarkModeSwitch className='h-6 outline-none ease-out' checked={isDark} onChange={() => setDarkMode(!isDark)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
