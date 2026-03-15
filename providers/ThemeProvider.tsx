import { createContext, FunctionComponent, ReactNode } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { IThemeContext } from '../types/theme';

const THEMES = {
  dark: {
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    gradientText: 'gradient-text-light',
    kbarBackground: 'bg-[#1c1c1d]',
    kbarColor: 'text-white',
    homeTitle: 'home-title-dark',
    belkaLogo: 'white'
  },
  light: {
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    gradientText: 'gradient-text-dark',
    kbarBackground: 'bg-[#fcfcfc]',
    kbarColor: 'text-zinc-900',
    homeTitle: 'home-title-light',
    belkaLogo: 'black'
  },
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setDarkMode] = useDarkMode();

  const theme = isDark ? THEMES.dark : THEMES.light;

  return <ThemeContext.Provider value={{ theme, isDark, setDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
