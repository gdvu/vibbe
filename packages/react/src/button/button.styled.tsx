import css from 'styled-jsx/css';
import { evalColor } from '../styles/main';
import { Colors } from '../theme/theme.types';
import { BtnStyledPropsAll } from './button.types';

export const getStyledButton = (
  options: BtnStyledPropsAll,
  defaultTheme: {
    colors?: Colors;
  }
) => {
  const { colors } = defaultTheme;
  const prefix = '';

  const { inline } = options;

  const { color, width, radius, shadow } = inline;

  const definedColor = evalColor({ color, colors });

  return css.resolve`
    ${`.${prefix}btn`} {
      width: max-content;
      min-width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px 24px;
      font-size: 16px;
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
      border-radius: 5px;
      background-color: ${definedColor?.light};
      color: ${definedColor?.contrastText};
    }

    ${`.${prefix}btn--outlined`} {
      border: 1px solid ${definedColor?.light};
      border-radius: 5px;
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
