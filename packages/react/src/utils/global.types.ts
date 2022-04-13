import {
  ConfigVariantProps,
  ConfigVariantTwoProps
} from '../config/config.types';

export type ColorProps =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'warning'
  | 'danger';

export type SizesProps = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

// variants
export type VariantOneProps = 'contained' | 'outlined' | 'text';
export type VariantTwoProps = 'filled' | 'underlined' | 'outline';

export interface ShorcutsCssOptionsProps {
  width?: string;
  shadow?: string;
  radius?: string;
}

export interface ShorcutsCssProps {
  shorcuts: ShorcutsCssOptionsProps;
}

export interface DefineConfigVariantProps {
  variants: ConfigVariantProps[];
  color?: ColorProps;
  variant?: VariantOneProps;
}

export interface DefineConfigVariantTwoProps {
  variants: ConfigVariantTwoProps[];
  color?: ColorProps;
  variant?: VariantTwoProps;
}
