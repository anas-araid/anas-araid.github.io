import React from 'react';
import type { NextPage } from 'next';
import { Layout } from '../containers/Layout';
import { concatClassNames } from '../utils';
import { KBarProvider } from 'kbar';
import { actions } from '../components/KBar';
import { KBarContent } from '../containers/KBarContent';
import { useThemeContext } from '../hooks/useThemeContext';

const Index: NextPage = () => {
  const { setDarkMode, theme } = useThemeContext();

  const handleActionTheme = (value: boolean) => {
    setDarkMode(value);
  };

  return (
    <div className={concatClassNames('transition-all h-screen duration-300', theme.backgroundColor, theme.textColor)}>
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
        <Layout />
      </KBarProvider>
    </div>
  );
};

export default Index;
