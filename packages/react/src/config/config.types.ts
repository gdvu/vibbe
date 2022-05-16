import { BtnBaseProps } from '../Button/button.types';
import { InputBaseProps } from '../Input/input.types';
import { AllStylesCSS } from '../styles';
import { TextareaBaseProps } from '../Textarea/textarea.types';
import { ColorsOptions } from '../theme/theme.types';
import {
  ColorProps,
  ShorcutsCssOptionsProps,
  VariantOneProps,
  VariantTwoProps
} from '../utils/global.types';

// ClassNames config
export interface ClassNameProps {
  prefix?: boolean;
  prefixName?: string;
  prefixSeparator?: string;
}

// Sizes config
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

// Disabled config
export interface DisabledPropsConfig {
  jsx?: string;
  cancelState?: boolean;
}

// Element state config
export interface ElementState {
  active?: string;
  focus?: string;
  target?: string;
  hover?: string;
  visited?: string;
}

// Variants config
export interface ConfigVariantOneOptionsProps {
  variant: VariantOneProps;
  color?: ColorProps;
}

export interface ConfigVariantTwoOptionsProps {
  variant: VariantTwoProps;
  color?: ColorProps;
}

export interface ConfigVariantProps {
  props: ConfigVariantOneOptionsProps;
  jsx: (colors?: ColorsOptions) => string;
}

export interface ConfigVariantTwoProps {
  props: ConfigVariantTwoOptionsProps;
  jsx: (colors?: ColorsOptions) => string;
}

export interface ConfigJsxBaseProps {
  base?: string;
  variants: ConfigVariantProps[];
}

export interface ConfigJsxBaseTwoProps {
  base?: string;
  variants: ConfigVariantTwoProps[];
}

// Components config
export interface ConfigButtonProps {
  propsDefault?: BtnBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes?: SizesPropsConfig;
  state?: ElementState;
  disabled?: DisabledPropsConfig;
  jsxBase?: ConfigJsxBaseProps;
  styled?: AllStylesCSS;
}

export interface DefaultConfigButtonProps {
  propsDefault?: BtnBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes: SizesPropsConfig;
  state?: ElementState;
  disabled: DisabledPropsConfig;
  jsxBase: ConfigJsxBaseProps;
  styled?: AllStylesCSS;
}

export interface ConfigTextAreaProps {
  propsDefault?: TextareaBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes?: SizesPropsConfig;
  state?: ElementState;
  disabled?: DisabledPropsConfig;
  jsxBase?: ConfigJsxBaseTwoProps;
}

export interface DefaultConfigTextAreaProps {
  propsDefault?: TextareaBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes: SizesPropsConfig;
  state?: ElementState;
  disabled: DisabledPropsConfig;
  jsxBase: ConfigJsxBaseTwoProps;
}

export interface ConfigInputProps {
  propsDefault?: InputBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes: SizesPropsConfig;
  state?: ElementState;
  disabled: DisabledPropsConfig;
  jsxBase: ConfigJsxBaseTwoProps;
}

export interface DefaultConfigInputProps {
  propsDefault?: InputBaseProps;
  shortcuts?: ShorcutsCssOptionsProps;
  sizes: SizesPropsConfig;
  state?: ElementState;
  disabled: DisabledPropsConfig;
  jsxBase: ConfigJsxBaseTwoProps;
}

// All config
export interface ConfigProps {
  className?: ClassNameProps;
  components?: {
    button?: ConfigButtonProps;
    textarea?: ConfigTextAreaProps;
    input?: ConfigInputProps;
  };
}

export interface DefaultConfigProps {
  className: ClassNameProps;
  components: {
    button: DefaultConfigButtonProps;
    textarea: DefaultConfigTextAreaProps;
    input: DefaultConfigInputProps;
  };
}
