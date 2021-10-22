export interface IThemeContext {
  theme: ITheme;
  isDark: boolean;
  setDarkMode: (value: boolean) => void;
}

interface ITheme {
  backgroundColor: string;
  textColor: string;
  gradientText: string;
}
