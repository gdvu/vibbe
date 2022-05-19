import css from 'styled-jsx/css';
import styledCss, { AllStylesCSS } from '../styles';
import { clearCss } from '../styles/utils';
import { ColorProps, SizesProps, VariantOneProps } from '../utils/global.types';

export const getStyledButton = (
  basePropsCss: {
    color?: ColorProps;
    size?: SizesProps;
    disabled?: boolean;
    variant?: VariantOneProps;
  },
  styled: AllStylesCSS,
  prefix?: string
) => {
  const { color, size, disabled, variant } = basePropsCss;

  const sizess = styled?.sizes;
  const variants = styled?.variants;

  // css base
  const cssBase = clearCss(styledCss(styled));
  const cssSize = clearCss(styledCss(sizess?.[size ?? '']));
  const cssDisabled = clearCss(styledCss(styled?.disabled));
  const cssHover = clearCss(styledCss(styled._hover));

  // css variant
  const cssVariant = clearCss(styledCss(variants?.[variant ?? '']));
  const cssVariantSize = clearCss(styledCss(sizess?.[size ?? '']?.sizes));
  const cssVariantDisabled = clearCss(
    styledCss(variants?.[variant ?? '']?.disabled)
  );

  return css.resolve`
    ${`.${prefix}button`} {
      ${cssBase}
      ${cssSize ?? ''}
    }

    ${`.${prefix}button-${variant}`} {
      ${cssVariant ?? ''}
      ${cssVariantSize ?? ''}
    }

    ${`.${prefix}button-hover`} {
      ${cssHover}
    }

    ${`.${prefix}button-active`} {
    }

    ${`.${prefix}button-focus`} {
    }

    ${`.${prefix}button:visited`} {
    }

    ${`.${prefix}button-disabled`} {
      ${cssDisabled ?? ''}
      ${disabled ? cssVariantDisabled ?? '' : ''}
    }
  `;
};
