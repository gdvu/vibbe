import css from 'styled-jsx/css';
import { StyledBtnPropsAll } from './button.types';

export const getStyledButton = (options: StyledBtnPropsAll) => {
  const { inline, styled, theme } = options;

  const { color, fullWidth, radius, shadow } = inline;

  return css.resolve`
    .btn {
      ${theme.button === undefined ? '' : theme.button}
    }

    .btn--text {
      ${theme.variant?.text === undefined ? '' : theme.variant.text}
    }

    .btn--contained {
      ${theme.variant?.contained === undefined ? '' : theme.variant.contained}
    }

    .btn--outlined {
      ${theme.variant?.outlined === undefined ? '' : theme.variant.outlined}
    }

    .btn {
      ${styled === undefined ? '' : styled}
    }

    .btn {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${fullWidth ? `width: ${fullWidth};` : ''}
      ${color ? `background-color: ${color};` : ''}
    }
  `;
};
