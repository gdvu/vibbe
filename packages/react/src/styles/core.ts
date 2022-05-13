import { BackgroundsCSS } from './background';
import { BordersCSS } from './borders';
import { LayoutCSS } from './layout';
import { SpacingCSS } from './spacing';
import { TypographyCSS } from './typography';

export type StyledCSS = SpacingCSS &
  TypographyCSS &
  BordersCSS &
  LayoutCSS &
  BackgroundsCSS;
