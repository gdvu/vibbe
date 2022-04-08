import { Ref, TextareaHTMLAttributes } from 'react';
import { ColorProps, SizesProps } from '../utils/global.types';

export interface TextareaInlineCssOptionsProps {
  width?: string;
  shadow?: string;
  radius?: string;
}

export interface TextareaInlineCssProps {
  inline: TextareaInlineCssOptionsProps;
}

// base props
export interface TextareaBaseProps {
  color?: ColorProps;
  size?: SizesProps;
  value?: TextareaHTMLAttributes<HTMLTextAreaElement>['value'];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export type TextareaProps = TextareaBaseProps & TextareaInlineCssOptionsProps;
export type TextareaAttrs = Omit<
  TextareaHTMLAttributes<unknown>,
  keyof TextareaProps
>;
export type TextareaRef = Ref<HTMLTextAreaElement | null>;

// styled props
export interface TextareaJSXProps {
  jsx?: any;
}

export type TextareaStyledPropsAll = TextareaInlineCssProps;
export type TextareaPropsAll = TextareaProps & TextareaAttrs & TextareaJSXProps;
