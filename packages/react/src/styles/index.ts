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

// all styled css
export type AllStylesCSS = StylesCSS & StylesVariant;

// all types css
export interface CSS {
  styled?: AllStylesCSS;
}

export { default } from './core';
