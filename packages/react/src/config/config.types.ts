import { BtnBaseProps } from '../Button/button.types';
import { TextareaBaseProps } from '../Textarea/textarea.types';
import { ColorProps } from '../utils/global.types';

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

export interface ConfigButtonProps {
  propsDefault?: BtnBaseProps;
  sizes?: SizesPropsConfig;
  state?: ElementState;
  disabled?: DisabledPropsConfig;
}

export interface ConfigVariantProps {
  props: { variant: string; color: ColorProps };
  jsx: string;
}

export interface ConfigJsxBaseProps {
  base: string;
  variants: ConfigVariantProps[];
}

export interface ConfigTextAreaProps {
  propsDefault?: TextareaBaseProps;
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
