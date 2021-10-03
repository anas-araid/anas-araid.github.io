import React, { FunctionComponent, useEffect } from 'react';
import { useKBar, VisualState } from 'kbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ReactTooltip from 'react-tooltip';
import { isMobile } from 'react-device-detect';
import { KBarButton } from '../KBar';

interface INavbarProps {
  isDarkMode: boolean;
  onChange: () => void;
}

const Navbar: FunctionComponent<INavbarProps> = ({ isDarkMode, onChange }) => {
  const [isTooltipVisible, setTooltipVisibility] = React.useState(false);
  const { query } = useKBar();

  useEffect(() => {
    setTooltipVisibility(true);
  }, []);

  return (
    <div className='flex mt-10 md:mt-20'>
      <div className='flex w-1/2 justify-start'>
        <KBarButton
          isDarkMode={isDarkMode}
          onClick={() =>
            query.setVisualState((vs) => ([VisualState.animatingOut, VisualState.hidden].includes(vs) ? VisualState.animatingIn : VisualState.animatingOut))
          }
        />
      </div>
      <div className='flex w-1/2 justify-end'>
        <DarkModeSwitch className='h-6 outline-none' checked={isDarkMode} onChange={onChange} data-tip data-for='darkModeSwitch' />
        {isTooltipVisible && !isMobile && (
          <ReactTooltip id='darkModeSwitch' effect='solid'>
            <span>{isDarkMode ? 'Activate light mode' : 'Activate dark mode'}</span>
          </ReactTooltip>
        )}
      </div>
    </div>
  );
};

export default Navbar;
