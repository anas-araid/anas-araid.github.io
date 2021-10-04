import React from 'react';
import type { NextPage } from 'next';
import { DocumentHead } from '../components/DocumentHead';
import { Layout } from '../containers/Layout';
import { useDarkMode } from '../hooks/useDarkMode';
import { concatClassNames } from '../utils';
import { KBarProvider } from 'kbar';
import { actions } from '../components/KBar';
import { KBarContent } from '../containers/KBarContent';

const Index: NextPage = () => {
  const [isDark, setDarkMode] = useDarkMode();

  const handleClick = () => {
    setDarkMode(isDark === 'true' ? 'false' : 'true');
  };

  const handleActionTheme = (value: string) => {
    setDarkMode(value);
  };

  return (
    <div className={concatClassNames('transition-all h-screen duration-300', isDark === 'true' ? ' bg-black text-white ' : 'bg-white text-black')}>
      <DocumentHead />
      <KBarProvider
        actions={actions(handleActionTheme)}
        options={{
          animations: {
            enterMs: 200,
            exitMs: 100,
          },
        }}
      >
        <KBarContent />
        <Layout handleClick={handleClick} isDark={isDark} />
      </KBarProvider>
    </div>
  );
};

export default Index;
