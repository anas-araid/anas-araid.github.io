import { Action, KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, useKBar, useRegisterActions, VisualState } from 'kbar';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useThemeContext } from '../../../hooks/useThemeContext';
import { KBarRender } from '../KBarRender';
import actions from '../utils/actions';
import { animatorStyle, searchStyle } from '../utils/style';

const KBarContent: FunctionComponent = () => {
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
    setActionList(actions(handleActionTheme, router));
  }, []);

  useEffect(() => {
    setSearchReadonly(visible);
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
