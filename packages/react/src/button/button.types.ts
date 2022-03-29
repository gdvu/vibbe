import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { ColorProps, SizesProps } from '../utils/global.types';

// inline css props
export interface BtnInlineCssOptionsProps {
  width?: string;
  shadow?: string;
  radius?: string;
  color?: ColorProps;
}

export interface BtnInlineCssProps {
  inline: BtnInlineCssOptionsProps;
}

// base props
export interface BtnBaseProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'contained' | 'outlined' | 'text';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  as?: keyof JSX.IntrinsicElements;
  sizes?: SizesProps;
}

export type BtnProps = BtnBaseProps & BtnInlineCssOptionsProps;

export type BtnAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof BtnProps>;
export type RefProps = Ref<HTMLButtonElement | null>;

// styled props
export interface BtnStyledOptionsProps {
  button?: string;
  variant?: {
    text: string;
    contained: string;
    outlined: string;
  };
}

export interface BtnStyledProps {
  styled?: BtnStyledOptionsProps;
}

// default styled props
export interface BtnDefaultStyledProps {
  theme: BtnStyledOptionsProps;
}

// all styled props
export type BtnStyledPropsAll = BtnInlineCssProps &
  BtnStyledProps &
  BtnDefaultStyledProps;

// all btn props
export type BtnPropsAll = BtnProps & BtnAttrs & BtnStyledProps;

export type BtnDefaultAll = BtnProps & BtnDefaultStyledProps;
