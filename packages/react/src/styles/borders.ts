export interface BorderRadius {
  brXsmall?: boolean;
  brSmall?: boolean;
  brMedium?: boolean;
  brLarge?: boolean;
  brXlarge?: boolean;
  brRounded?: boolean;
}

export interface BorderWidth {
  bw1?: boolean;
  bw2?: boolean;
  bw3?: boolean;
  bw4?: boolean;
  bw5?: boolean;

  bwt1?: boolean;
  bwt2?: boolean;
  bwt3?: boolean;
  bwt4?: boolean;
  bwt5?: boolean;

  bwbt?: boolean;
  bwb2?: boolean;
  bwb3?: boolean;
  bwb4?: boolean;
  bwb5?: boolean;

  bwl1?: boolean;
  bwl2?: boolean;
  bwl3?: boolean;
  bwl4?: boolean;
  bwl5?: boolean;

  bwr1?: boolean;
  bwr2?: boolean;
  bwr3?: boolean;
  bwr4?: boolean;
  bwr5?: boolean;
}

export interface BorderStyle {
  bsSolid?: boolean;
  bsDashed?: boolean;
  bsDotted?: boolean;
  bsDouble?: boolean;
  bsNone?: boolean;
}

export type Borders = BorderRadius & BorderWidth & BorderStyle;

export interface BordersCSS {
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;

  borderTop?: string;
  borderTopWidth?: string;
  borderTopStyle?: string;
  borderTopColor?: string;

  borderRight?: string;
  borderRightWidth?: string;
  borderRightStyle?: string;
  borderRightColor?: string;

  borderBottom?: string;
  borderBottomWidth?: string;
  borderBottomStyle?: string;
  borderBottomColor?: string;

  borderLeft?: string;
  borderLeftWidth?: string;
  borderLeftStyle?: string;
  borderLeftColor?: string;

  borderX?: string;
  borderStyleX?: string;
  borderWidthX?: string;
  borderColorX?: string;

  borderY?: string;
  borderStyleY?: string;
  borderWidthY?: string;
  borderColorY?: string;
}

export const borderCss = (vcs?: BordersCSS) => {
  return `
    ${vcs?.border ? `border: ${vcs?.border};` : ''}
    ${vcs?.borderStyle ? `border-style: ${vcs?.borderStyle};` : ''}
    ${vcs?.borderWidth ? `border-width: ${vcs?.borderWidth};` : ''}
    ${vcs?.borderColor ? `border-color: ${vcs?.borderColor};` : ''}
    ${
      vcs?.borderX
        ? `border-left: ${vcs?.borderX};border-right: ${vcs?.borderX};`
        : ''
    }
    ${
      vcs?.borderStyleX
        ? `border-left-style: ${vcs?.borderStyleX};border-right-style: ${vcs?.borderStyleX};`
        : ''
    }
    ${
      vcs?.borderWidthX
        ? `border-left-width: ${vcs?.borderWidthX};border-right-width: ${vcs?.borderWidthX};`
        : ''
    }
    ${
      vcs?.borderColorX
        ? `border-left-color: ${vcs?.borderColorX};border-right-color: ${vcs?.borderColorX};`
        : ''
    }
    ${
      vcs?.borderY
        ? `border-top: ${vcs?.borderY};border-bottom: ${vcs?.borderY};`
        : ''
    }
    ${
      vcs?.borderStyleY
        ? `border-top-style: ${vcs?.borderStyleY};border-bottom-style: ${vcs?.borderStyleY};`
        : ''
    }
    ${
      vcs?.borderWidthY
        ? `border-top-width: ${vcs?.borderWidthY};border-bottom-width: ${vcs?.borderWidthY};`
        : ''
    }
    ${
      vcs?.borderColorY
        ? `border-top-color: ${vcs?.borderColorY};border-bottom-color: ${vcs?.borderColorY};`
        : ''
    }
  `;
};
