import { useContext } from 'react';
import { IThemeContext } from '../models/theme';
import { ThemeContext } from '../providers/ThemeProvider';

export const useThemeContext = (): IThemeContext => useContext(ThemeContext);
