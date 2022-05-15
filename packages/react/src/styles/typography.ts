export interface FontSize {
  fsXsmall?: boolean;
  fsSmall?: boolean;
  fsMedium?: boolean;
  fsLarge?: boolean;
  fsXlarge?: boolean;
}

export interface FontWeight {
  fwThin?: boolean;
  fwExtraLight?: boolean;
  fwLight?: boolean;
  fwRegular?: boolean;
  fwMedium?: boolean;
  fwSemiBold?: boolean;
  fwBold?: boolean;
  fwExtraBold?: boolean;
  fwBlack?: boolean;
}

export type Typography = FontSize & FontWeight;

export type TypographyCSS = {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textAlign?: string;
  textShadow?: string;
  fontStyle?: string;
  textTransform?: string;
  textDecoration?: string;
  color?: string;
};

export const typographyCss = (vcs?: TypographyCSS) => {
  return `
    ${vcs?.fontFamily ? `font-family: ${vcs?.fontFamily};` : ''}
    ${vcs?.fontSize ? `font-size: ${vcs?.fontSize};` : ''}
    ${vcs?.fontWeight ? `font-weight: ${vcs?.fontWeight};` : ''}
    ${vcs?.lineHeight ? `line-height: ${vcs?.lineHeight};` : ''}
    ${vcs?.letterSpacing ? `letter-spacing: ${vcs?.letterSpacing};` : ''}
    ${vcs?.textAlign ? `text-align: ${vcs?.textAlign};` : ''}
    ${vcs?.textShadow ? `text-shadow: ${vcs?.textShadow};` : ''}
    ${vcs?.fontStyle ? `font-style: ${vcs?.fontStyle};` : ''}
    ${vcs?.textTransform ? `text-transform: ${vcs?.textTransform};` : ''}
    ${vcs?.textDecoration ? `text-decoration: ${vcs?.textDecoration};` : ''}
    ${vcs?.color ? `color: ${vcs?.color};` : ''}
  `;
};
