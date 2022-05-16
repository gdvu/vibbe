import {
  StyledCSSBox,
  StyledCSSElement,
  StylesSizes,
  StylesVariant
} from './core';

export type StylesCSS = StyledCSSBox & StyledCSSElement & StylesSizes;

// all styled css
export type AllStylesCSS = StylesCSS & StylesVariant;

// all types css
export interface CSS {
  styled?: AllStylesCSS;
}
