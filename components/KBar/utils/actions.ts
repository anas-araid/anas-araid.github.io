import { Action, createAction } from 'kbar';
import { useRouter } from 'next/dist/client/router';

const action = (handleActionTheme: (value: string) => void): Action[] => {
  const router = useRouter();

  return [
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
      keywords: 'resume cv',
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
      keywords: 'interface color dark light theme',
      section: '',
      children: ['darkTheme', 'lightTheme'],
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      shortcut: [],
      keywords: 'dark',
      section: '',
      perform: () => handleActionTheme('true'),
      parent: 'theme',
    },
    {
      id: 'lightTheme',
      name: 'Light',
      shortcut: [],
      keywords: 'light',
      section: '',
      perform: () => handleActionTheme('false'),
      parent: 'theme',
    },
  ];
};

export default action;
