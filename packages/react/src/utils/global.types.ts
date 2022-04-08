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

export interface ShorcutsCssOptionsProps {
  width?: string;
  shadow?: string;
  radius?: string;
}

export interface ShorcutsCssProps {
  shorcuts: ShorcutsCssOptionsProps;
}