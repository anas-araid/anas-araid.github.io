import React from 'react';
import type { NextPage } from 'next';
import { DocumentHead } from '../components/DocumentHead';
import { Navbar } from '../components/Navbar';
import { Home } from '../containers/Home';
import { useDarkMode } from '../hooks/useDarkMode';
import { concatClassNames } from '../utils';
import { KBarProvider, KBarResults, KBarSearch, KBarAnimator, KBarPortal, KBarPositioner, Action, ResultHandlers, ResultState, createAction } from 'kbar';
import { useRouter } from 'next/dist/client/router';

const Index: NextPage = () => {
  const [isDark, setDarkMode] = useDarkMode();

  const router = useRouter();

  const handleClick = () => {
    setDarkMode(isDark === 'true' ? 'false' : 'true');
  };

  const actions = [
    {
      id: 'homeAction',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'back',
      section: 'Navigation',
      perform: () => router.push('/'),
    },
    {
      id: 'resumeAction',
      name: 'Resume',
      shortcut: ['r'],
      keywords: 'resume',
      section: 'Navigation',
      perform: () => router.push('/resume'),
    },
    createAction({
      name: 'Github',
      shortcut: ['g', 'h'],
      keywords: 'sourcecode',
      section: 'Navigation',
      perform: () => window.open('https://github.com/asdf1899', '_blank'),
    }),
    {
      id: 'linkedinAction',
      name: 'Linkedin',
      shortcut: ['l', 'd'],
      keywords: 'linkedin',
      section: 'Navigation',
      perform: () => window.open('https://www.linkedin.com/in/anas-araid/', '_blank'),
    },
    {
      id: 'instagramAction',
      name: 'Instagram',
      shortcut: ['i', 'g'],
      keywords: 'instagram social contact dm',
      section: 'Navigation',
      perform: () => window.open('https://instagram.com/anas.araid', '_blank'),
    },

    {
      id: 'theme',
      name: 'Change theme…',
      shortcut: [],
      keywords: 'interface color dark light',
      section: '',
      children: ['darkTheme', 'lightTheme'],
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      shortcut: [],
      keywords: 'dark',
      section: '',
      perform: () => setDarkMode('true'),
      parent: 'theme',
    },
    {
      id: 'lightTheme',
      name: 'Light',
      shortcut: [],
      keywords: 'light',
      section: '',
      perform: () => setDarkMode('false'),
      parent: 'theme',
    },
  ];

  return (
    <div className={concatClassNames(isDark === 'true' ? 'h-screen bg-black text-white' : 'bg-white text-black')}>
      <DocumentHead />
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle} placeholder='Type a command or search…' />
              <KBarResults style={resultsStyle} onRender={(action, handlers, state) => <Render action={action} handlers={handlers} state={state} />} />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        <div className='flex justify-center px-5'>
          <div className='max-w-2xl w-full'>
            <Navbar isDarkMode={isDark === 'true'} onChange={handleClick} />
            <Home isDarkMode={isDark === 'true'} />
          </div>
        </div>
      </KBarProvider>
    </div>
  );
};

export default Index;

const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box' as React.CSSProperties['boxSizing'],
  outline: 'none',
  border: 'none',
  background: 'rgb(252 252 252)',
  color: 'rgb(28 28 29)',
};

const resultsStyle = {
  maxHeight: 400,
  overflow: 'auto',
};

const animatorStyle = {
  maxWidth: '500px',
  width: '100%',
  background: 'rgb(252 252 252)',
  color: 'rgb(28 28 29)',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)',
};

function Render({ action, handlers, state }: { action: Action; handlers: ResultHandlers; state: ResultState }) {
  const ownRef = React.useRef<HTMLDivElement>(null);

  const active = state.index === state.activeIndex;

  React.useEffect(() => {
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
}
