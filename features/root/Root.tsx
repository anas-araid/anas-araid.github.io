import { KBarProvider } from 'kbar';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { isAboutPageActive, isPostsPageActive, isResumePageActive } from '../../api/featureFlag';
import { KBarContent } from '../../components/Kbar/KBarContent';
import { useDispatchAll } from '../../hooks/useDispatchAll';
import { useThemeContext } from '../../hooks/useThemeContext';
import { setAboutPageActive, setIsLoading, setPostPageActive, setResumePageActive } from '../featureFlag/featureFlagsSlice';
import { Layout } from '../layout';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { theme } = useThemeContext();
  const dispatchAll = useDispatchAll();

  useEffect(() => {
    document.body.className = `transition-all h-screen duration-300 ${theme.backgroundColor} ${theme.textColor}`;
  }, [theme]);

  useEffect(() => {
    (async () => {
      dispatchAll([
        setAboutPageActive(await isAboutPageActive()),
        setResumePageActive(await isResumePageActive()),
        setPostPageActive(await isPostsPageActive()),
        setIsLoading(false),
      ]);
    })();
  }, []);

  return (
    <div>
      <KBarProvider
        actions={[]}
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
