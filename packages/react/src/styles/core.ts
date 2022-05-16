import { backgroundCss, BackgroundsCSS } from './background';
import { borderCss, BordersCSS } from './borders';
import { layoutCss, LayoutCSS } from './layout';
import { radiusCss, RadiusCSS } from './radius';
import { spacingCss, SpacingCSS } from './spacing';
import { typographyCss, TypographyCSS } from './typography';

// styled css
export type StyledCSSBox = SpacingCSS &
  TypographyCSS &
  BordersCSS &
  RadiusCSS &
  LayoutCSS &
  BackgroundsCSS;

export interface StyledCSSElement {
  _hover?: StyledCSSBox;
  _focus?: StyledCSSBox;
  _active?: StyledCSSBox;
  _visited?: StyledCSSBox;
}

export type StylesCSS = StyledCSSBox & StyledCSSElement;

export interface DinamicProp {
  [key: string]: StylesCSS;
}

// variant styled css
export interface StylesVariant {
  variants?: DinamicProp;
}

// all styled css
export type AllStylesCSS = StylesCSS & StylesVariant;

// all types css
export interface CSS {
  styled?: AllStylesCSS;
}

export const styledCss = (vcs?: AllStylesCSS) => {
  return `
    ${layoutCss(vcs) ?? ''}
    ${spacingCss(vcs) ?? ''}
    ${backgroundCss(vcs) ?? ''}
    ${borderCss(vcs) ?? ''}
    ${radiusCss(vcs) ?? ''}
    ${typographyCss(vcs) ?? ''}
  `;
};
