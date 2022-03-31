import css from 'styled-jsx/css';
import { evalColor } from '../styles/main';
import { Colors, DefaultPropsOptions } from '../theme/theme.types';
import { BtnStyledPropsAll } from './button.types';
import { defineSizesButton } from './button.utils';

export const getStyledButton = (
  options: BtnStyledPropsAll,
  defaultTheme: {
    colors?: Colors;
    custom?: DefaultPropsOptions;
  }
) => {
  const { colors, custom } = defaultTheme;
  const prefix = '';

  const { inline } = options;

  const { color, width, radius, shadow, size } = inline;

  const definedColor = evalColor({ color, colors });
  const definedSize = defineSizesButton(size, custom?.sizes);

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

    ${`.${prefix}btn`} {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${width ? `width: ${width};` : ''}
    }
  `;
};
