import {
  StyledCSSBox,
  StyledCSSElement,
  StylesDisable,
  StylesSizes,
  StylesVariant
} from './core';

export type StylesCSS = StyledCSSBox &
  StyledCSSElement &
  StylesSizes &
  StylesDisable;

export type CsxProps = StyledCSSBox & StyledCSSElement;

export interface StyledTwo extends StyledCSSElement {
  base?: StyledCSSBox;
}

// all styled css
export type AllStylesCSS = StylesCSS & StylesVariant;

// all types css
export interface CSS {
  styled?: AllStylesCSS;
  csx?: CsxProps;
}

export { default } from './core';
