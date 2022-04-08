import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { ColorProps, ShorcutsCssOptionsProps, SizesProps, VariantOneProps } from '../utils/global.types';

// inline css props
export interface BtnInlineCssProps {
  shortcuts: ShorcutsCssOptionsProps;
}

// base props
export interface BtnBaseProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: VariantOneProps;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  color?: ColorProps;
  size?: SizesProps;
  as?: keyof JSX.IntrinsicElements;
}

export type BtnProps = BtnBaseProps & ShorcutsCssOptionsProps;

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

export interface BtnStylesJSXProps {
  jsx?: any;
}

// default styled props
export interface BtnDefaultStyledProps {
  theme: BtnStyledOptionsProps;
}

// all styled props
export type BtnStyledPropsAll = BtnInlineCssProps;

// all btn props
export type BtnPropsAll = BtnProps & BtnAttrs & BtnStylesJSXProps;

export type BtnDefaultAll = BtnProps & BtnDefaultStyledProps;
