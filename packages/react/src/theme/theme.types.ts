import { ConfigProps } from '../config/config.types';
import { RootProps } from '../root/root.types';

export interface ColorsOptions {
  light?: string;
  dark?: string;
  contrastText?: string;
}

export interface Colors {
  primary?: ColorsOptions;
  secondary?: ColorsOptions;
  tertiary?: ColorsOptions;
  danger?: ColorsOptions;
  warning?: ColorsOptions;
  success?: ColorsOptions;
}

export interface ThemeProps {
  colors?: Colors;
}

export interface ThemeProviderProps {
  theme: ThemeProps;
  root?: RootProps;
  config?: ConfigProps;
}
