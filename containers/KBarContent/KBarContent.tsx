import React, { FunctionComponent, useEffect, useState } from 'react';
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useKBar, VisualState, Action, useRegisterActions } from 'kbar';
import { isMobile } from 'react-device-detect';
import { animatorStyle, searchStyle, KBarRender, actions } from '../../components/KBar';
import { useThemeContext } from '../../hooks/useThemeContext';
import { isAboutPageActive, isResumePageActive } from '../../api/featureFlag';
import { useRouter } from 'next/router';

const KBarContent: FunctionComponent = () => {
  const [isSearchReadonly, setSearchReadonly] = useState(true);
  const [actionList, setActionList] = useState<Action[]>([]);

  const { theme, setDarkMode } = useThemeContext();
  const { query } = useKBar();
  const router = useRouter();

  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  const handleActionTheme = (value: boolean) => {
    setDarkMode(value);
  };

  useEffect(() => {
    async function getActions() {
      const action = actions(handleActionTheme, router);
      const isAboutActive = await isAboutPageActive();
      const isResumeActive = await isResumePageActive();

      setActionList(
        action.filter((value) => {
          if (!isAboutActive && value.id === 'aboutAction') {
            return;
          }
          if (!isResumeActive && value.id === 'resumeAction') {
            return;
          }
          return value;
        })
      );
    }
    getActions();
  }, []);

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
