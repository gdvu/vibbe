import { ButtonHTMLAttributes, ReactNode, Ref } from 'react';

export interface BtnProps {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export type BtnAttrs = Omit<ButtonHTMLAttributes<unknown>, keyof BtnProps>;
export type RefProps = Ref<HTMLButtonElement | null>;
