import { KBarProvider } from 'kbar';
import React from 'react';
import { concatClassNames } from '../../utils';
import { actions } from '../../components/KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import { KBarContent } from '../KBarContent';
import { AppProps } from 'next/app';
import { Layout } from '../Layout';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { setDarkMode, theme } = useThemeContext();

  const handleActionTheme = (value: boolean) => {
    setDarkMode(value);
  };

  return (
    <div className={concatClassNames('transition-all h-full duration-300', theme.backgroundColor, theme.textColor)}>
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
        <Layout pageProps={pageProps} Component={Component} router={router} />
      </KBarProvider>
    </div>
  );
};

export default Root;
