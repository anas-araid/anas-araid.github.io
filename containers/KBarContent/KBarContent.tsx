import React, { FunctionComponent, useEffect, useState } from 'react';
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults, useKBar, VisualState } from 'kbar';
import { isMobile } from 'react-device-detect';
import { animatorStyle, searchStyle, resultsStyle, KBarRender } from '../../components/KBar';

const KBarContent: FunctionComponent = () => {
  const [isSearchReadonly, setSearchReadonly] = useState(true);

  const { visible } = useKBar((state) => ({
    visible: state.visualState !== VisualState.hidden,
  }));

  useEffect(() => {
    setSearchReadonly(visible);
  }, [visible]);

  return (
    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={animatorStyle}>
          <KBarSearch
            style={searchStyle}
            placeholder='Type a command or search…'
            readOnly={isMobile ? isSearchReadonly : false}
            onClick={() => setSearchReadonly(false)}
          />
          <KBarResults style={resultsStyle} onRender={(action, handlers, state) => <KBarRender action={action} handlers={handlers} state={state} />} />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
};

export default KBarContent;
