import css from 'styled-jsx/css';
import {
  ConfigJsxBaseProps,
  DisabledPropsConfig,
  ElementState,
  SizesPropsConfig
} from '../config/config.types';
import { evalColor } from '../styles/main';
import { Colors } from '../theme/theme.types';
import { defineConfigVariant } from '../utils';
import { ColorProps, SizesProps, VariantOneProps } from '../utils/global.types';
import { BtnStyledPropsAll } from './button.types';
import { defineSizesButton } from './button.utils';

export const getStyledButton = (
  inlineCss: BtnStyledPropsAll,
  defaultConfigCss: {
    prefix?: string;
    colors?: Colors;
    sizes?: SizesPropsConfig;
    disabled?: DisabledPropsConfig;
    state?: ElementState;
    jsxBase: ConfigJsxBaseProps;
  },
  basePropsCss: {
    color?: ColorProps;
    size?: SizesProps;
    disabled?: boolean;
    variant?: VariantOneProps;
  }
) => {
  const { colors, sizes, prefix, disabled, state, jsxBase } = defaultConfigCss;
  const { shortcuts } = inlineCss;
  const { width, radius, shadow } = shortcuts;
  const { color, size, disabled: disabledProps, variant } = basePropsCss;

  const definedColor = evalColor({ color, colors });
  const definedSize = defineSizesButton(size, sizes);
  const definedVariant = defineConfigVariant({
    variants: jsxBase.variants,
    color,
    variant
  });

  return css.resolve`
    ${`.${prefix}button`} {
      ${definedSize?.width ? `width: ${definedSize?.width};` : ''}
      ${definedSize?.height ? `height: ${definedSize?.height};` : ''}
      ${definedSize?.padding ? `padding: ${definedSize?.padding};` : ''}
      ${definedSize?.fontSize ? `font-size: ${definedSize?.fontSize};` : ''}
      ${jsxBase.base ?? ''}
    }

    ${`.${prefix}button-text`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}button-contained`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}button-outlined`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}button-hover`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.hover
          : ''
        : state?.hover}
    }

    ${`.${prefix}button-active`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.active
          : ''
        : state?.active}
    }

    ${`.${prefix}button-focus`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.focus
          : ''
        : state?.focus}
    }

    ${`.${prefix}button:visited`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.visited
          : ''
        : state?.visited}
    }

    ${`.${prefix}button`} {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${width ? `width: ${width};` : ''}
    }

    ${`.${prefix}button-disabled`} {
      ${disabled?.jsx ?? ''}
    }
  `;
};
