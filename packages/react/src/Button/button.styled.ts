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

  const cssBase = clearCss(styledCss(styled));

  return css.resolve`
    ${`.${prefix}button`} {
      ${cssBase}
    }

    ${`.${prefix}button-text`} {
    }

    ${`.${prefix}button-contained`} {
    }

    ${`.${prefix}button-outlined`} {
    }

    ${`.${prefix}button-hover`} {
    }

    ${`.${prefix}button-active`} {
    }

    ${`.${prefix}button-focus`} {
    }

    ${`.${prefix}button:visited`} {
    }

    ${`.${prefix}button-disabled`} {
    }
  `;
};
