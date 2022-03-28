import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';
import { ColorProps, SizesProps } from '../utils/global.types';

export interface BtnInlineCssProps {
  fullWidth?: boolean;
  shadow?: boolean | string;
  radius?: boolean;
  color?: ColorProps;
}

export interface BtnBase {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: 'contained' | 'outlined' | 'text';
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  as?: keyof JSX.IntrinsicElements;
  sizes?: SizesProps;
}

export type BtnProps = BtnBase & BtnInlineCssProps;

export type BtnAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof BtnProps>;
export type RefProps = Ref<HTMLButtonElement | null>;

export interface StyledBtnOptionsProps {
  button?: string;
}

export interface StyledBtnProps {
  styled?: StyledBtnOptionsProps | undefined;
}

export interface StyledDefaultBtnProps {
  button?: string;
  variant?: {
    text: string;
    contained: string;
    outlined: string;
  };
}

export interface StyledBtnPropsAll {
  inline: BtnInlineCssProps;
  styled: StyledBtnOptionsProps | undefined;
  theme: StyledDefaultBtnProps;
}
