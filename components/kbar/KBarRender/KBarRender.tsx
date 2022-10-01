import { Action, KBarResults, useMatches } from 'kbar';
import { NO_GROUP } from 'kbar/lib/useMatches';
import React, { forwardRef } from 'react';
import { useThemeContext } from '../../../hooks/useThemeContext';

const KBarRender = (): JSX.Element => {
  const groups = useMatches();
  const flattened = React.useMemo(
    () =>
      groups.reduce((acc: unknown[], curr) => {
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  const renderSection = (item: string) => (
    <div className='px-4 py-2 opacity-50 text-xs'>
      {item}
    </div>
  )

  return (
    <KBarResults
      items={flattened.filter((i) => i !== NO_GROUP)}
      onRender={({ item, active }) => (typeof item === 'string' ? renderSection(item) : <ResultItem action={item} active={active} />)}
    />
  );
};

export default KBarRender;

const ResultItem = forwardRef(
  (
    {
      action,
      active,
    }: {
      action: Action;
      active: boolean;
    },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { theme } = useThemeContext();

    return (
      <div
        ref={ref}
        style={{
          padding: '12px 16px',
          background: active ? 'rgba(0 0 0 / 0.05)' : theme.kbarBackground,
          borderLeft: `2px solid ${active ? theme.kbarColor : 'transparent'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {action.icon && <span style={{ marginRight: '0.5rem'}}>{action.icon}</span>}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{fontSize: '14px', fontWeight: 400}}>{action.name}</span>
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
  }
);

ResultItem.displayName = 'ResultItem';
