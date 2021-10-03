import { Action, ResultHandlers, ResultState } from 'kbar';
import React, { FunctionComponent, useEffect } from 'react';

interface IKBarRenderProps {
  action: Action;
  handlers: ResultHandlers;
  state: ResultState;
}

const KBarRender: FunctionComponent<IKBarRenderProps> = ({ action, handlers, state }) => {
  const ownRef = React.useRef<HTMLDivElement>(null);

  const active = state.index === state.activeIndex;

  useEffect(() => {
    if (active) {
      // wait for the KBarAnimator to resize, _then_ scrollIntoView.
      // https://medium.com/@owencm/one-weird-trick-to-performant-touch-response-animations-with-react-9fe4a0838116
      window.requestAnimationFrame(() =>
        window.requestAnimationFrame(() => {
          const element = ownRef.current;
          if (!element) {
            return;
          }
          element.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth',
            inline: 'start',
          });
        })
      );
    }
  }, [active]);

  return (
    <div
      ref={ownRef}
      {...handlers}
      style={{
        padding: '12px 16px',
        background: active ? 'rgba(0 0 0 / 0.05)' : 'rgb(252 252 252)',
        borderLeft: `2px solid ${active ? 'rgb(28 28 29)' : 'transparent'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
      }}
    >
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {action.icon && action.icon}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{action.name}</span>
          {action.subtitle && <span style={{ fontSize: 12 }}>{action.subtitle}</span>}
        </div>
      </div>
      {action.shortcut?.length ? (
        <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '4px' }}>
          {action.shortcut.map((sc) => (
            <kbd
              key={sc}
              style={{
                padding: '4px 6px',
                background: 'rgba(0 0 0 / .1)',
                borderRadius: '4px',
              }}
            >
              {sc}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default KBarRender;
