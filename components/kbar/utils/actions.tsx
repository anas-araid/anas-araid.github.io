import { Action } from 'kbar';
import { NextRouter } from 'next/router';
import { Home as HomeIcon } from '@styled-icons/feather/Home'
import { Link as LinkIcon } from '@styled-icons/feather/Link'
import { DarkTheme as DarkThemeIcon } from '@styled-icons/fluentui-system-regular/DarkTheme'
import { Info as InfoIcon } from '@styled-icons/fluentui-system-regular/Info'
import { Sun as SunIcon } from '@styled-icons/feather/Sun'
import { Moon as MoonIcon } from '@styled-icons/feather/Moon'

const action = (
  handleActionTheme: (value: boolean) => void,
  router: NextRouter,
): Action[] => [
  {
    id: 'homeAction',
    name: 'Home',
    shortcut: ['h'],
    keywords: 'back',
    section: "Navigation",
    icon: <HomeIcon size={19} />,
    perform: () => router.push('/'),
  },
  {
    id: 'aboutAction',
    name: 'About',
    shortcut: ['a'],
    keywords: 'about bio meme',
    section: "Navigation",
    icon: <InfoIcon size={19} />,
    perform: () => router.push('/about'),
  },
  {
    id: 'linksAction',
    name: 'Links',
    shortcut: ['l', 'k'],
    keywords: 'link contact github linkedin twitter',
    section: "Stay in touch",
    icon: <LinkIcon size={19} />,
    perform: () => router.push('/links'),
  },
  {
    id: 'theme',
    name: 'Change theme…',
    shortcut: [],
    keywords: 'interface color dark light theme',
    section: 'Theme',
    icon: <DarkThemeIcon size={19} />,
    children: ['darkTheme', 'lightTheme'],
  },
  {
    id: 'darkTheme',
    name: 'Dark',
    shortcut: [],
    keywords: 'dark',
    section: '',
    perform: () => handleActionTheme(true),
    parent: 'theme',
    icon: <MoonIcon size={19} />,
  },
  {
    id: 'lightTheme',
    name: 'Light',
    shortcut: [],
    keywords: 'light',
    section: '',
    perform: () => handleActionTheme(false),
    parent: 'theme',
    icon: <SunIcon size={19} />,
  },
];

export default action;
