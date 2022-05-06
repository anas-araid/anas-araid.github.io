import { Action, KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, useKBar, useRegisterActions, VisualState } from 'kbar';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useThemeContext } from '../../../hooks/useThemeContext';
import { RootState } from '../../../store';
import { KBarRender } from '../KBarRender';
import actions from '../utils/actions';
import { animatorStyle, searchStyle } from '../utils/style';

const KBarContent: FunctionComponent = () => {
  const isAboutPageActive = useAppSelector((state: RootState) => state.featureFlags.isAboutPageActive);
  const isResumePageActive = useAppSelector((state: RootState) => state.featureFlags.isResumePageActive);
  const isPostPageActive = useAppSelector((state: RootState) => state.featureFlags.isPostPageActive);
  const isLoading = useAppSelector((state: RootState) => state.featureFlags.isLoading);

  const { theme, setDarkMode } = useThemeContext();
  const { query } = useKBar();
  const router = useRouter();

  const [isSearchReadonly, setSearchReadonly] = useState(true);
  const [actionList, setActionList] = useState<Action[]>([]);

  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  const handleActionTheme = (value: boolean) => {
    setDarkMode(value);
  };

  useEffect(() => {
    if (!isLoading) {
      setActionList(actions(handleActionTheme, router, { isAboutPageActive, isResumePageActive, isPostPageActive }));
    }
  }, [isLoading]);

  useEffect(() => {
    setSearchReadonly(visible);
    // useDocumentLock() function
    // KBar uses a simple implementation for preventing the underlying page content from scrolling when kbar is open.
    // but is not necessary.
    document.body.style.all = '';
  }, [visible]);

  if (query) {
    useRegisterActions(actionList, [actionList]);
  }

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={{ ...animatorStyle, background: theme.kbarBackground, color: theme.kbarColor }}>
          <KBarSearch
            style={{ ...searchStyle, background: theme.kbarBackground, color: theme.kbarColor }}
            placeholder='Type a command or search…'
            readOnly={isMobile ? isSearchReadonly : false}
            onClick={() => setSearchReadonly(false)}
          />
          <KBarRender />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

export default KBarContent;
