import { BtnBaseProps } from '../Button/button.types';

export interface ClassNameProps {
  prefix?: boolean;
  prefixName?: string;
  prefixSeparator?: string;
}

export interface SizesOptionsProps {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
}

export interface SizesPropsConfig {
  xsmall?: SizesOptionsProps;
  small?: SizesOptionsProps;
  medium?: SizesOptionsProps;
  large?: SizesOptionsProps;
  xlarge?: SizesOptionsProps;
}

export interface ConfigButtonProps {
  propsDefault?: BtnBaseProps;
  sizes?: SizesPropsConfig;
}

export interface ConfigProps {
  className?: ClassNameProps;
  components?: {
    button?: ConfigButtonProps;
  };
}
