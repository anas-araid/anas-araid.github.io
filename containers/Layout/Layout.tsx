import { useKBar, VisualState } from 'kbar';
import React, { FunctionComponent } from 'react';
import { Home } from '../Home';
import { Navbar } from '../../components/Navbar';
import { concatClassNames } from '../../utils';

interface ILayout {
  isDark: string | undefined;
  handleClick: () => void;
}

const Layout: FunctionComponent<ILayout> = ({ isDark, handleClick }) => {
  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  return (
    <div className={concatClassNames('flex h-full justify-center px-5', visible ? 'opacity-25' : '')}>
      <div className='max-w-2xl w-full'>
        <Navbar isDarkMode={isDark === 'true'} onChange={handleClick} />
        <Home isDarkMode={isDark === 'true'} />
      </div>
    </div>
  );
};

export default Layout;
