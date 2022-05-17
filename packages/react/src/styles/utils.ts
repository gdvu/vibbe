import { AllStylesCSS } from '.';

export const clearCss = (cssIn: string) => {
  const cssInTrim = cssIn.trim();
  const cssOut = cssInTrim.replace(/\s+/g, ' ');
  return cssOut;
};

export const mergeCss = (cssOne?: AllStylesCSS, cssTwo?: AllStylesCSS) => {
  return {
    ...cssOne,
    ...cssTwo
  };
};
