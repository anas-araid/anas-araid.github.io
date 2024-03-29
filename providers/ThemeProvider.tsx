import { createContext, FunctionComponent } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { IThemeContext } from '../types/theme';

const THEMES = {
  dark: {
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    gradientText: 'gradient-text-light',
    kbarBackground: 'rgb(28 28 29)',
    kbarColor: 'rgb(252 252 252)',
    homeTitle: 'home-title-dark',
    belkaLogo: 'white'
  },
  light: {
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    gradientText: 'gradient-text-dark',
    kbarBackground: 'rgb(252 252 252)',
    kbarColor: 'rgb(28 28 29)',
    homeTitle: 'home-title-light',
    belkaLogo: 'black'
  },
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [isDark, setDarkMode] = useDarkMode();

  const theme = isDark ? THEMES.dark : THEMES.light;

  return <ThemeContext.Provider value={{ theme, isDark, setDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
