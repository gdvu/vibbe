import css from 'styled-jsx/css';
import {
  DisabledPropsConfig,
  ElementState,
  SizesPropsConfig
} from '../config/config.types';
import { evalColor } from '../styles/main';
import { Colors } from '../theme/theme.types';
import { ColorProps, SizesProps } from '../utils/global.types';
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
  },
  basePropsCss: {
    color?: ColorProps;
    size?: SizesProps;
  }
) => {
  const { colors, sizes, prefix, disabled, state } = defaultConfigCss;
  const { shortcuts } = inlineCss;
  const { width, radius, shadow } = shortcuts;
  const { color, size } = basePropsCss;

  const definedColor = evalColor({ color, colors });
  const definedSize = defineSizesButton(size, sizes);

  return css.resolve`
    ${`.${prefix}btn`} {
      ${definedSize?.width ? `width: ${definedSize?.width};` : ''}
      ${definedSize?.height ? `height: ${definedSize?.height};` : ''}
      display: flex;
      justify-content: center;
      align-items: center;
      ${definedSize?.padding ? `padding: ${definedSize?.padding};` : ''}
      ${definedSize?.fontSize ? `font-size: ${definedSize?.fontSize};` : ''}
      font-weight: 500;
      font-family: var(--font-one);
      letter-spacing: 0.5px;
      box-sizing: border-box;
      user-select: none;
      outline: none;
      cursor: pointer;
    }

    ${`.${prefix}btn--text`} {
      border: 0;
      background-color: transparent;
      color: ${definedColor?.light};
    }

    ${`.${prefix}btn--contained`} {
      border: 0;
      border-radius: 17px;
      background-color: ${definedColor?.light};
      color: ${definedColor?.contrastText};
    }

    ${`.${prefix}btn--outlined`} {
      border: 1px solid ${definedColor?.light};
      border-radius: 17px;
      background-color: transparent;
      color: ${definedColor?.light};
    }

    ${`.${prefix}btn:hover`} {
      ${!disabled?.cancelState ? state?.hover : ''}
    }

    ${`.${prefix}btn:active`} {
      ${!disabled?.cancelState ? state?.active : ''}
    }

    ${`.${prefix}btn:focus`} {
      ${!disabled?.cancelState ? state?.focus : ''}
    }

    ${`.${prefix}btn:visited`} {
      ${!disabled?.cancelState ? state?.visited : ''}
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
