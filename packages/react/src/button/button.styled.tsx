import css from 'styled-jsx/css';
import { evalColor } from '../styles/main';
import { useTheme } from '../theme/theme.context';
import { BtnStyledPropsAll } from './button.types';

export const GetStyledButton = (options: BtnStyledPropsAll) => {
  const { className, colors } = useTheme();
  const isPrefix = className?.prefix;
  const prefixName = className?.prefixName;
  const prefix = isPrefix ? `${prefixName}-` : '';

  const { inline } = options;

  const { color, width, radius, shadow } = inline;

  const colorDt = evalColor({ color, colors });

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
      color: ${colorDt?.light};
    }

    ${`.${prefix}btn--contained`} {
      border: 0;
      border-radius: 5px;
      background-color: ${colorDt?.light};
      color: ${colorDt?.light};
    }

    ${`.${prefix}btn--outlined`} {
      border: 1px solid ${colorDt?.light};
      border-radius: 5px;
      background-color: transparent;
      color: ${colorDt?.contrastText};
    }

    ${`.${prefix}btn`} {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${width ? `width: ${width};` : ''}
    }
  `;
};
