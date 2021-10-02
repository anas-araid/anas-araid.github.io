import React from 'react';
import type { NextPage } from 'next';
import { DocumentHead } from '../components/DocumentHead';
import { Navbar } from '../components/Navbar';
import { Home } from '../containers/Home';
import { useDarkMode } from '../hooks/useDarkMode';
import { concatClassNames } from '../utils';

const Index: NextPage = () => {
  const [isDark, setDarkMode] = useDarkMode();

  const handleClick = () => {
    setDarkMode(isDark === 'true' ? 'false' : 'true');
  };

  return (
    <div className={concatClassNames(isDark === 'true' ? 'h-screen bg-black text-white' : 'bg-white text-black')}>
      <DocumentHead />
      <div className='flex justify-center px-5'>
        <div className='max-w-2xl w-full'>
          <Navbar isDarkMode={isDark === 'true'} onChange={handleClick} />
          <Home isDarkMode={isDark === 'true'} />
        </div>
      </div>
    </div>
  );
};

export default Index;
