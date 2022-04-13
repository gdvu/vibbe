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
    ${`.${prefix}btn`} {
      ${definedSize?.width ? `width: ${definedSize?.width};` : ''}
      ${definedSize?.height ? `height: ${definedSize?.height};` : ''}
      ${definedSize?.padding ? `padding: ${definedSize?.padding};` : ''}
      ${definedSize?.fontSize ? `font-size: ${definedSize?.fontSize};` : ''}
      ${jsxBase.base ?? ''}
    }

    ${`.${prefix}btn--text`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}btn--contained`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}btn--outlined`} {
      ${definedVariant(definedColor) ?? ''}
    }

    ${`.${prefix}btn:hover`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.hover
          : ''
        : state?.hover}
    }

    ${`.${prefix}btn:active`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.active
          : ''
        : state?.active}
    }

    ${`.${prefix}btn:focus`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.focus
          : ''
        : state?.focus}
    }

    ${`.${prefix}btn:visited`} {
      ${disabledProps
        ? !disabled?.cancelState
          ? state?.visited
          : ''
        : state?.visited}
    }

    ${`.${prefix}btn`} {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${width ? `width: ${width};` : ''}
    }

    ${`.${prefix}btn-disabled`} {
      ${disabled?.jsx ?? ''}
    }
  `;
};
