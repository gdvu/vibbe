export type FlexBoxCSS = {
  alignItems?: string;
  alignContent?: string;
  justifyItems?: string;
  justifyContent?: string;
};

export const flexboxCss = (vcs?: FlexBoxCSS) => {
  return `
    ${vcs?.justifyContent ? `justify-content: ${vcs?.justifyContent};` : ''}
    ${vcs?.justifyItems ? `justify-items: ${vcs?.justifyItems};` : ''}
    ${vcs?.alignItems ? `align-items: ${vcs?.alignItems};` : ''}
    ${vcs?.alignContent ? `align-content: ${vcs?.alignContent};` : ''}
  `;
};
