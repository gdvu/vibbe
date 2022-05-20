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

export const purgeStyled = (styled: AllStylesCSS) => {
  delete styled.disabled;
  delete styled.variants;
  delete styled.sizes;
  delete styled._hover;
  delete styled._active;
  delete styled._focus;
  delete styled._visited;
  delete styled._after;
  delete styled._before;
  delete styled._placeholder;
  return styled;
};
