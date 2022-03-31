import {
  BtnBaseProps,
  BtnInlineCssOptionsProps,
  BtnStyledOptionsProps
} from '../button/button.types';

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

export interface Fonts {
  family: {};
  sizes: {};
  weight: {};
}

export interface ClassNameProps {
  prefix?: boolean;
  prefixName?: string;
}

export interface SizesButtonOptionsProps {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
}

export interface MeasurementsButtonProps {
  xsmall?: SizesButtonOptionsProps;
  small?: SizesButtonOptionsProps;
  medium?: SizesButtonOptionsProps;
  large?: SizesButtonOptionsProps;
  xlarge?: SizesButtonOptionsProps;
}

export interface DefaultPropsOptions {
  sizes?: MeasurementsButtonProps;
}

export interface ThemeBtnOptions {
  props?: BtnBaseProps;
  custom?: DefaultPropsOptions;
  shortcuts?: BtnInlineCssOptionsProps;
  theme?: BtnStyledOptionsProps;
}

export interface ThemeProps {
  className?: ClassNameProps;
  colors?: Colors;
  fonts?: Fonts;
  components?: {
    button?: ThemeBtnOptions;
  };
}

export interface ThemeProviderProps {
  theme: ThemeProps;
}
