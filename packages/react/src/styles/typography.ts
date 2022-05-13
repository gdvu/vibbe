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
