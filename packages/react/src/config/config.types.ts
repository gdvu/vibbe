import { BtnBaseProps } from '../Button/button.types';
import { TextareaBaseProps } from '../Textarea/textarea.types';
import { ColorProps, ShorcutsCssOptionsProps, VariantOneProps } from '../utils/global.types';

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

export interface DisabledPropsConfig {
  jsx?: string;
  cancelState?: boolean;
}

export interface ElementState {
  active?: string;
  focus?: string;
  target?: string;
  hover?: string;
  visited?: string;
}

export interface ConfigVariantOneOptionsProps {
  variant?: VariantOneProps;
  color?: ColorProps;
}

export interface ConfigVariantProps {
  props: ConfigVariantOneOptionsProps;
  jsx: string;
}

export interface ConfigJsxBaseProps {
  base?: string;
  variants: ConfigVariantProps[];
}

export interface ConfigButtonProps {
  propsDefault?: BtnBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes?: SizesPropsConfig;
  state?: ElementState;
  disabled?: DisabledPropsConfig;
  jsxBase?: ConfigJsxBaseProps;
}

export interface ConfigTextAreaProps {
  propsDefault?: TextareaBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes?: SizesPropsConfig;
  state?: ElementState;
  disabled?: DisabledPropsConfig;
  jsxBase?: ConfigJsxBaseProps;
}

export interface ConfigProps {
  className?: ClassNameProps;
  components?: {
    button?: ConfigButtonProps;
    textarea?: ConfigTextAreaProps;
  };
}
