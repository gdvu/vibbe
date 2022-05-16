import { AllStylesCSS, StylesCSS } from '.';
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

export interface DinamicProp {
  [key: string]: StylesCSS;
}

// sizes styled css
export interface StylesSizes {
  sizes?: DinamicProp;
}

// disable styled css
export interface StylesDisable {
  disabled?: StylesCSS;
}

// variant styled css
export interface StylesVariant {
  variants?: DinamicProp;
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
