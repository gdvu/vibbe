export interface Height {
  h0?: boolean;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  h7?: boolean;
  h8?: boolean;
  h9?: boolean;
  h10?: boolean;
  h11?: boolean;
  h12?: boolean;
  h13?: boolean;
  h14?: boolean;
  h15?: boolean;
  h16?: boolean;
  h17?: boolean;
  h18?: boolean;
  h19?: boolean;
  h20?: boolean;
  h21?: boolean;
  h22?: boolean;
  h23?: boolean;
  h24?: boolean;
  h25?: boolean;
  hView30?: boolean;
  hView50?: boolean;
  hViewFull?: boolean;
  hPorc25?: boolean;
  hPorc50?: boolean;
  hPorc75?: boolean;
  hPorc80?: boolean;
  hPorc1?: boolean;
  hPorc2?: boolean;
  hPorc3?: boolean;
  hPorcFull?: boolean;
}

export interface Width {
  w0?: boolean;
  w1?: boolean;
  w2?: boolean;
  w3?: boolean;
  w4?: boolean;
  w5?: boolean;
  w6?: boolean;
  w7?: boolean;
  w8?: boolean;
  w9?: boolean;
  w10?: boolean;
  w11?: boolean;
  w12?: boolean;
  w13?: boolean;
  w14?: boolean;
  w15?: boolean;
  w16?: boolean;
  w17?: boolean;
  w18?: boolean;
  w19?: boolean;
  w20?: boolean;
  w21?: boolean;
  w22?: boolean;
  w23?: boolean;
  w24?: boolean;
  w25?: boolean;
  wView30?: boolean;
  wView50?: boolean;
  wViewFull?: boolean;
  wPorc25?: boolean;
  wPorc50?: boolean;
  wPorc75?: boolean;
  wPorc80?: boolean;
  wPorc1?: boolean;
  wPorc2?: boolean;
  wPorc3?: boolean;
  wPorcFull?: boolean;
  wAuto?: boolean;
}

export type Layout = Height & Width;

export interface LayoutCSS {
  width?: string;
  height?: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
  display?: string;
  boxSizing?: string;
  boxShadow?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
}

export const layoutCss = (vcs?: LayoutCSS) => {
  return `
    ${vcs?.width ? `width: ${vcs?.width};` : ''}
    ${vcs?.height ? `height: ${vcs?.height};` : ''}
    ${vcs?.maxWidth ? `max-width: ${vcs?.maxWidth};` : ''}
    ${vcs?.maxHeight ? `max-height: ${vcs?.maxHeight};` : ''}
    ${vcs?.minWidth ? `min-width: ${vcs?.minWidth};` : ''}
    ${vcs?.minHeight ? `min-height: ${vcs?.minHeight};` : ''}
    ${vcs?.display ? `display: ${vcs?.display};` : ''}
    ${vcs?.boxSizing ? `box-sizing: ${vcs?.boxSizing};` : ''}
    ${vcs?.boxShadow ? `box-shadow: ${vcs?.boxShadow};` : ''}
    ${vcs?.overflowX ? `overflox-x: ${vcs?.overflowX};` : ''}
    ${vcs?.overflowY ? `overflow-y: ${vcs?.overflowY};` : ''}
  `;
};
