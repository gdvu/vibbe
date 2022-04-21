import React, { FC, PropsWithChildren, useMemo } from 'react';
import { ConfigContext } from '../config/config.context';
import configDefault from '../config/config.default';
import { RootContext } from '../root/root.context';
import rootDefault from '../root/root.default';
import { getGlobalCss } from '../styles/global.styles';
import { ThemeContext } from './theme.context';
import defaultTheme from './theme.default';
import { ThemeProviderProps } from './theme.types';

const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = props => {
  const {
    theme: localTheme,
    root: localRoot,
    config: localConfig,
    children
  } = props;

  const root = useMemo(() => localRoot ?? rootDefault, [localRoot]);
  const theme = useMemo(() => localTheme ?? defaultTheme, [localTheme]);
  const config = useMemo(() => localConfig ?? configDefault, [localConfig]);

  return (
    <RootContext.Provider value={root}>
      <ThemeContext.Provider value={theme}>
        <ConfigContext.Provider value={config}>
          {children}
        </ConfigContext.Provider>
        <style jsx global>
          {getGlobalCss}
        </style>
      </ThemeContext.Provider>
    </RootContext.Provider>
  );
};

export { ThemeProvider };
