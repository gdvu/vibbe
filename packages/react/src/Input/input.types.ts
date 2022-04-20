import { InputHTMLAttributes, ReactNode, Ref } from 'react';
import {
  ColorProps,
  ShorcutsCssOptionsProps,
  SizesProps,
  VariantTwoProps
} from '../utils/global.types';

export interface InputInlineCssProps {
  shortcuts?: ShorcutsCssOptionsProps;
}

export interface InputBaseProps {
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder?: string;
  variant?: VariantTwoProps;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  color?: ColorProps;
  size?: SizesProps;
  label?: string;
  labelPlaceholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export type InputProps = InputBaseProps & ShorcutsCssOptionsProps;
export type InputAttrs = Omit<InputHTMLAttributes<unknown>, keyof InputProps>;
export type InputRef = Ref<HTMLInputElement | null>;

export type InputPropsAll = InputProps & InputAttrs;
