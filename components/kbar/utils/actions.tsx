import { NextRouter } from 'next/router';
import { ReactNode } from 'react';
import { Home as HomeIcon } from '@styled-icons/feather/Home';
import { Link as LinkIcon } from '@styled-icons/feather/Link';
import { Sun as SunIcon } from '@styled-icons/feather/Sun';
import { Moon as MoonIcon } from '@styled-icons/feather/Moon';
import { Info as InfoIcon } from '@styled-icons/fluentui-system-regular/Info';
import { Zap as ZapIcon } from '@styled-icons/feather/Zap';

export interface ICmdkAction {
  id: string;
  name: string;
  keywords?: string;
  shortcut?: string[];
  icon?: ReactNode;
  section: string;
  perform: () => void;
}

const getActions = (
  setDarkMode: (value: boolean) => void,
  router: NextRouter,
): ICmdkAction[] => [
  {
    id: 'home',
    name: 'Home',
    shortcut: ['H'],
    keywords: 'back',
    section: 'Navigation',
    icon: <HomeIcon size={19} />,
    perform: () => router.push('/'),
  },
  {
    id: 'about',
    name: 'About',
    shortcut: ['A'],
    keywords: 'about bio meme',
    section: 'Navigation',
    icon: <InfoIcon size={19} />,
    perform: () => router.push('/about'),
  },
  {
    id: 'lab',
    name: 'Lab',
    keywords: 'lab prototypes videos twitter ui',
    section: 'Navigation',
    icon: <ZapIcon size={19} />,
    perform: () => router.push('/lab'),
  },
  {
    id: 'links',
    name: 'Links',
    shortcut: ['L'],
    keywords: 'link contact github linkedin twitter',
    section: 'Navigation',
    icon: <LinkIcon size={19} />,
    perform: () => router.push('/links'),
  },
  {
    id: 'dark',
    name: 'Dark',
    keywords: 'dark theme',
    section: 'Theme',
    icon: <MoonIcon size={19} />,
    perform: () => setDarkMode(true),
  },
  {
    id: 'light',
    name: 'Light',
    keywords: 'light theme',
    section: 'Theme',
    icon: <SunIcon size={19} />,
    perform: () => setDarkMode(false),
  },
];

export default getActions;
