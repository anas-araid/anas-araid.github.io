import { Action } from 'kbar';
import { NextRouter } from 'next/router';
// import { HomeAlt } from '@styled-icons/boxicons-regular/HomeAlt'

interface IPageActivation {
  isAboutPageActive: boolean;
  isResumePageActive: boolean;
  isPostPageActive: boolean;
}

const action = (
  handleActionTheme: (value: boolean) => void,
  router: NextRouter,
  { isAboutPageActive, isResumePageActive, isPostPageActive }: IPageActivation
): Action[] => {
  const actions = [
    {
      id: 'homeAction',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'back',
      section: "Navigation",
      // icon: HomeAlt,
      perform: () => router.push('/'),
    },
    {
      id: 'aboutAction',
      name: 'About',
      shortcut: ['a'],
      keywords: 'about bio meme',
      section: "Navigation",
      perform: () => router.push('/about'),
    },
    {
      id: 'resumeAction',
      name: 'Resume',
      shortcut: ['r'],
      keywords: 'resume cv',
      section: "Navigation",
      perform: () => router.push('/resume'),
    },
    {
      id: 'postsAction',
      name: 'Posts',
      shortcut: ['p'],
      keywords: 'post posts writing',
      perform: () => router.push('/posts'),
    },
    {
      id: 'twitterAction',
      name: 'Twitter',
      shortcut: ['t', 'w'],
      keywords: 'twitter',
      section: "Stay in touch",
      perform: () => window.open('https://www.twitter.com/anas_araid/', '_blank'),
    },
    // {
    //   id: 'linkedinAction',
    //   name: 'Linkedin',
    //   shortcut: ['l', 'd'],
    //   keywords: 'linkedin',
    //   section: "Stay in touch",
    //   perform: () => window.open('https://www.linkedin.com/in/anas-araid/', '_blank'),
    // },
    {
      id: 'githubAction',
      name: 'Github',
      shortcut: ['g', 'h'],
      keywords: 'sourcecode',
      section: "Stay in touch",
      perform: () => window.open('https://github.com/asdf1899', '_blank'),
    },
    {
      id: 'theme',
      name: 'Change theme…',
      shortcut: [],
      keywords: 'interface color dark light theme',
      section: 'Theme',
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
    },
    {
      id: 'lightTheme',
      name: 'Light',
      shortcut: [],
      keywords: 'light',
      section: '',
      perform: () => handleActionTheme(false),
      parent: 'theme',
    },
  ];

  const actionList = actions.filter((value) => {
    if (!isAboutPageActive && value.id === 'aboutAction') {
      return;
    }
    if (!isResumePageActive && value.id === 'resumeAction') {
      return;
    }
    if (!isPostPageActive && value.id === 'postsAction') {
      return;
    }
    return value;
  });

  return actionList;
};

export default action;
