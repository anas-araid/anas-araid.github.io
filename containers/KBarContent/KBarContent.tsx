import React, { FunctionComponent, useEffect, useState } from 'react';
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useKBar, VisualState } from 'kbar';
import { isMobile } from 'react-device-detect';
import { animatorStyle, searchStyle, KBarRender } from '../../components/KBar';
import { useThemeContext } from '../../hooks/useThemeContext';

const KBarContent: FunctionComponent = () => {
  const [isSearchReadonly, setSearchReadonly] = useState(true);
  const { theme } = useThemeContext();

  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  useEffect(() => {
    setSearchReadonly(visible);
  }, [visible]);

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
