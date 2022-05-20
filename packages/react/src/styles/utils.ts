import { AllStylesCSS, CsxProps, StyledTwo } from '.';
import { objBoolean } from '../utils';

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

interface OptionsUnionProp {
  size?: string;
  variant?: string;
  disabled?: boolean;
}

export const unionStyled = (
  styled: AllStylesCSS,
  csx: CsxProps | undefined,
  options: OptionsUnionProp
): StyledTwo => {
  const { size, variant, disabled } = options;

  const sizess = styled?.sizes;
  const variants = styled?.variants;

  const sizeSd = sizess?.[size ?? ''];
  const variantSd = variants?.[variant ?? ''];
  const variantSize = sizess?.[size ?? '']?.sizes;
  const disabledSd = disabled && styled.disabled;
  const variantDisabled = disabled && variants?.[variant ?? '']?.disabled;

  // hover
  const hoverSd = styled._hover;
  const variantHover = variants?.[variant ?? '']?._hover;
  const cssVariantDisabledHover =
    disabled && variants?.[variant ?? '']?.disabled?._hover;

  // active
  const activeSd = styled._active;
  const variantActive = variants?.[variant ?? '']?._active;
  const cssVariantDisabledActive =
    disabled && variants?.[variant ?? '']?.disabled?._active;

  // focus
  const focusSd = styled._focus;
  const variantFocus = variants?.[variant ?? '']?._focus;
  const cssVariantDisabledFocus =
    disabled && variants?.[variant ?? '']?.disabled?._focus;

  // visited
  const visitedSd = styled._visited;
  const variantvisited = variants?.[variant ?? '']?._visited;
  const cssVariantDisabledvisited =
    disabled && variants?.[variant ?? '']?.disabled?._visited;

  // placeholder
  const placeholderSd = styled._placeholder;
  const variantplaceholder = variants?.[variant ?? '']?._placeholder;
  const cssVariantDisabledplaceholder =
    disabled && variants?.[variant ?? '']?.disabled?._placeholder;

  const baseUni = purgeStyled({
    ...styled,
    ...sizeSd,
    ...variantSd,
    ...variantSize,
    ...disabledSd,
    ...variantDisabled,
    ...csx
  });

  const hoverUni = purgeStyled({
    ...hoverSd,
    ...variantHover,
    ...cssVariantDisabledHover,
    ...csx?._hover
  });

  const activeUni = purgeStyled({
    ...activeSd,
    ...variantActive,
    ...cssVariantDisabledActive,
    ...csx?._active
  });

  const focusUni = purgeStyled({
    ...focusSd,
    ...variantFocus,
    ...cssVariantDisabledFocus,
    ...csx?._focus
  });

  const visitedUni = purgeStyled({
    ...visitedSd,
    ...variantvisited,
    ...cssVariantDisabledvisited,
    ...csx?._visited
  });

  const placeholderUni = purgeStyled({
    ...placeholderSd,
    ...variantplaceholder,
    ...cssVariantDisabledplaceholder,
    ...csx?._placeholder
  });

  const base = objBoolean(baseUni) ? undefined : baseUni;
  const _hover = objBoolean(hoverUni) ? undefined : hoverUni;
  const _active = objBoolean(activeUni) ? undefined : activeUni;
  const _focus = objBoolean(focusUni) ? undefined : focusUni;
  const _visited = objBoolean(visitedUni) ? undefined : visitedUni;
  const _placeholder = objBoolean(placeholderUni) ? undefined : placeholderUni;

  return {
    base,
    _hover,
    _active,
    _focus,
    _visited,
    _placeholder
  };
};

export const classNameElements = (styled: StyledTwo, className: string) => {
  const disabled = 'undisabled291';
  const base = styled.base ? className : disabled;
  const hover = styled._hover ? className : disabled;
  const active = styled._active ? className : disabled;
  const focus = styled._focus ? className : disabled;
  const visited = styled._visited ? className : disabled;
  const after = styled._after ? className : disabled;
  const before = styled._before ? className : disabled;
  const placeholder = styled._placeholder ? className : disabled;
  return { hover, active, focus, visited, base, after, before, placeholder };
};
