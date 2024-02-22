import { KBarProvider } from 'kbar';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
// import { getActivePages } from '../../api/featureFlag';
import { KBarContent } from '../../components/kbar/KBarContent';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useThemeContext } from '../../hooks/useThemeContext';
// import { EPAGE, TSettingsFieldSet } from '../../types/airtable';
// import { getMinifiedRecords } from '../../utils/airtable';
import { setActivePages } from '../featureFlag/featureFlagsSlice';
import { Layout } from '../layout';

const Root = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.className = `transition-all h-screen duration-300 ${theme.backgroundColor} ${theme.textColor}`;
  }, [theme]);

  useEffect(() => {
    /*(async () => {
      const records = await getActivePages();
      const pages = getMinifiedRecords<TSettingsFieldSet>(records).map((record) => record.fields);

      dispatch(
        setActivePages({
          isAboutPageActive: pages.find((page) => page.name === EPAGE.ABOUT)?.isActive || false,
          isPostPageActive: pages.find((page) => page.name === EPAGE.POST)?.isActive || false,
          isResumePageActive: pages.find((page) => page.name === EPAGE.RESUME)?.isActive || false,
          isLinkPageActive: pages.find((page) => page.name === EPAGE.LINKS)?.isActive || false,
          isLoading: false,
        })
      );
    })();*/
    dispatch(setActivePages(
      {
        isAboutPageActive: true,
        isPostPageActive: false,
        isResumePageActive: false,
        isLinkPageActive: true,
        isLoading: false,
      }
    ));
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
