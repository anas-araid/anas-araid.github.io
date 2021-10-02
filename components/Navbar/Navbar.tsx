import React, { FunctionComponent, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import ReactTooltip from 'react-tooltip';

interface INavbarProps {
  isDarkMode: boolean;
  onChange: () => void;
}

const Navbar: FunctionComponent<INavbarProps> = ({ isDarkMode, onChange }) => {
  const [isTooltipVisible, setTooltipVisibility] = React.useState(false);
  useEffect(() => {
    setTooltipVisibility(true);
  }, []);
  return (
    <div className='flex mt-10 md:mt-20'>
      <div className='flex w-1/2 justify-start'>
        <h2>A</h2>
      </div>
      <div className='flex w-1/2 justify-end'>
        <DarkModeSwitch className='h-6' checked={isDarkMode} onChange={onChange} data-tip data-for='darkModeSwitch' />
        {isTooltipVisible && (
          <ReactTooltip id='darkModeSwitch' effect='solid'>
            <span>{isDarkMode ? 'Activate light mode' : 'Activate dark mode'}</span>
          </ReactTooltip>
        )}
      </div>
    </div>
  );
};

export default Navbar;
