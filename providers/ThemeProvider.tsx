import { createContext, FunctionComponent } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { IThemeContext } from '../models/theme';

const THEMES = {
  dark: {
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    gradientText: 'from-pink-300 via-purple-300 to-indigo-400',
    kbarBackground: 'rgb(28 28 29)',
    kbarColor: 'rgb(252 252 252)',
  },
  light: {
    backgroundColor: 'bg-white',
    textColor: 'text-black',
    gradientText: 'from-pink-500 via-red-500 to-yellow-500',
    kbarBackground: 'rgb(252 252 252)',
    kbarColor: 'rgb(28 28 29)',
  },
};

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [isDark, setDarkMode] = useDarkMode();

  const theme = isDark ? THEMES.dark : THEMES.light;

  return <ThemeContext.Provider value={{ theme, isDark, setDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
