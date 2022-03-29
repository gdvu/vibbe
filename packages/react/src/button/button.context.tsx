import { createContext, useContext } from 'react';
import {
  BtnBaseProps,
  BtnDefaultAll,
  BtnInlineCssOptionsProps,
  BtnStyledOptionsProps
} from './button.types';

const defaultInlineCss: BtnInlineCssOptionsProps = {
  width: 'auto',
  color: 'primary'
};

const defaultBtnBase: BtnBaseProps = {
  type: 'button',
  variant: 'contained',
  sizes: 'medium',
  disabled: false
};

const defaultThemeStyled: BtnStyledOptionsProps = {
  button: `
    width: max-content;
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    font-size: 16px;
    font-weight: 500;
    font-family: var(--font-one);
    letter-spacing: 0.5px;
    box-sizing: border-box;
    user-select: none;
    outline: none;
    cursor: pointer;
  `,
  variant: {
    text: `
      border: 0;
      background-color: transparent;
    `,
    contained: `
      border: 0;
      border-radius: 5px;
      color: #fff;
    `,
    outlined: `
      border: 1px solid red};
      border-radius: 5px;
      background-color: transparent;
      color: red;
    `
  }
};

const defaultBtnAll: BtnDefaultAll = {
  ...defaultBtnBase,
  ...defaultInlineCss,
  theme: {
    ...defaultThemeStyled
  }
};

export const BtnContext = createContext<BtnDefaultAll>(defaultBtnAll);

export const useBtnContext = () => useContext<BtnDefaultAll>(BtnContext);
