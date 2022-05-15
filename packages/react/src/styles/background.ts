export type BackgroundsCSS = {
  background?: string;
  backgroundColor?: string;
  backgroundClip?: string;
  backgroundImage?: string;
  linearGradient?: string;
  radialGradient?: string;
};

export const backgroundCss = (vcs?: BackgroundsCSS) => {
  return `
    ${vcs?.backgroundColor ? `background-color: ${vcs?.backgroundColor};` : ''}
    ${vcs?.background ? `background: ${vcs?.background};` : ''}
    ${vcs?.backgroundClip ? `background-clip: ${vcs?.backgroundClip};` : ''}
    ${vcs?.backgroundImage ? `background-image: ${vcs?.backgroundImage};` : ''}
    ${
      vcs?.linearGradient
        ? `background-image: linear-gradient(${vcs?.linearGradient});`
        : ''
    }
    ${
      vcs?.radialGradient
        ? `background-image: radial-gradient(${vcs?.radialGradient});`
        : ''
    }
  `;
};
