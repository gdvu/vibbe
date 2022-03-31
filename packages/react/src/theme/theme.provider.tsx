import React, { FC, PropsWithChildren, useMemo } from 'react';
import { mergeThemes } from '../utils';
import { ThemeContext } from './theme.context';
import defaultTheme from './theme.default';
import { ThemeProviderProps } from './theme.types';

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = props => {
  const { theme: localTheme, children } = props;

  const theme = useMemo(() => {
    const output = localTheme
      ? mergeThemes(defaultTheme, localTheme)
      : defaultTheme;
    return output;
  }, [localTheme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider };
