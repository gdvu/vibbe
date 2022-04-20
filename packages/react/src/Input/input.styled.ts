import css from 'styled-jsx/css';
import { evalColor } from '../styles/main';
import { defineConfigVariantTwo, defineSizes } from '../utils';
import { GetStyledTwoProps } from '../utils/global.types';

export const getStyledInput = (options: GetStyledTwoProps) => {
  const { shortcuts, baseProps, defaultConfig } = options;
  const { colors, sizes, prefix, disabled, state, jsxBase } = defaultConfig;
  const { color, size, disabled: disabledProps, variant } = baseProps;
  const { width, shadow, radius } = shortcuts;

  const definedColor = evalColor({ color, colors });
  const definedSize = defineSizes(size, sizes);
  const definedVariant = defineConfigVariantTwo({
    variants: jsxBase.variants,
    color,
    variant
  });

  return css.resolve`
    .input {
      ${jsxBase.base ?? ''}
    }

    .input-filled {
      ${definedVariant(definedColor) ?? ''}
    }

    .input-underlined {
      ${definedVariant(definedColor) ?? ''}
    }

    .input-outline {
      ${definedVariant(definedColor) ?? ''}
    }
  `;
};
