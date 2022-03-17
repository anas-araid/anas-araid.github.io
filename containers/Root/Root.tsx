import { KBarProvider } from 'kbar';
import React, { useEffect } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import { KBarContent } from '../KBarContent';
import { AppProps } from 'next/app';
import { Layout } from '../Layout';
import { isAboutPageActive, isResumePageActive, isPostsPageActive } from '../../api/featureFlag';
import { setAboutPageActive, setResumePageActive, setPostPageActive, setIsLoading } from '../../features/featureFlags/featureFlagsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.className = `transition-all h-screen duration-300 ${theme.backgroundColor} ${theme.textColor}`;
  }, [theme]);

  useEffect(() => {
    async function fetch() {
      dispatch(setAboutPageActive(await isAboutPageActive()));
      dispatch(setResumePageActive(await isResumePageActive()));
      dispatch(setPostPageActive(await isPostsPageActive()));
      dispatch(setIsLoading(false));
    }

    fetch();
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
