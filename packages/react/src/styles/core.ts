import { AllStylesCSS, StylesCSS } from '.';
import { backgroundCss, BackgroundsCSS } from './background';
import { borderCss, BordersCSS } from './borders';
import { flexboxCss, FlexBoxCSS } from './flexbox';
import { layoutCss, LayoutCSS } from './layout';
import { positioningCss, PositioningCSS } from './positioning';
import { radiusCss, RadiusCSS } from './radius';
import { spacingCss, SpacingCSS } from './spacing';
import { transformCss, TransformCSS } from './transform';
import { typographyCss, TypographyCSS } from './typography';

// styled css
export type StyledCSSBox = SpacingCSS &
  TypographyCSS &
  BordersCSS &
  RadiusCSS &
  LayoutCSS &
  BackgroundsCSS &
  TransformCSS &
  PositioningCSS &
  FlexBoxCSS;

export interface StyledCSSElement {
  _hover?: StyledCSSBox;
  _focus?: StyledCSSBox;
  _active?: StyledCSSBox;
  _visited?: StyledCSSBox;
  _after?: StyledCSSBox;
  _before?: StyledCSSBox;
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

const styledCss = (vcs?: AllStylesCSS) => {
  return `
    ${layoutCss(vcs) ?? ''}
    ${flexboxCss(vcs) ?? ''}
    ${positioningCss(vcs) ?? ''}
    ${spacingCss(vcs) ?? ''}
    ${backgroundCss(vcs) ?? ''}
    ${borderCss(vcs) ?? ''}
    ${radiusCss(vcs) ?? ''}
    ${typographyCss(vcs) ?? ''}
     ${transformCss(vcs) ?? ''}
  `;
};

export default styledCss;
