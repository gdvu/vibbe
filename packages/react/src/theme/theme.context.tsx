import { createContext, useContext } from 'react';
import defaultTheme from './theme.default';
import { ThemeProps } from './theme.types';

export const ThemeContext = createContext<ThemeProps>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);
