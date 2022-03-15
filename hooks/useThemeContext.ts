import { useContext } from 'react';
import { IThemeContext } from '../types/theme';
import { ThemeContext } from '../providers/ThemeProvider';

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
