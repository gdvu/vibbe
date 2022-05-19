export interface PositioningCSS {
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  inset?: number;
}

export const positioningCss = (vcs?: PositioningCSS) => {
  return `
    ${vcs?.position ? `position: ${vcs?.position};` : ''}
    ${vcs?.top ? `top: ${vcs?.top};` : ''}
    ${vcs?.right ? `right: ${vcs?.right};` : ''}
    ${vcs?.left ? `left: ${vcs?.left};` : ''}
    ${vcs?.inset ? `inset: ${vcs?.inset};` : ''}
  `;
};
