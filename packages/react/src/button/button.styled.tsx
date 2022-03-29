import css from 'styled-jsx/css';
import { BtnStyledPropsAll } from './button.types';

export const getStyledButton = (options: BtnStyledPropsAll) => {
  const { inline, styled, theme } = options;

  const { color, width, radius, shadow } = inline;

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
      ${styled?.button === undefined ? '' : styled.button}
    }

    .btn--text {
      ${styled?.variant?.text === undefined ? '' : styled.variant.text}
    }

    .btn--contained {
      ${styled?.variant?.contained === undefined
        ? ''
        : styled.variant.contained}
    }

    .btn--outlined {
      ${styled?.variant?.outlined === undefined ? '' : styled.variant.outlined}
    }

    .btn {
      ${radius ? `border-radius: ${radius};` : ''}
      ${shadow ? `box-shadow: ${shadow};` : ''}
      ${width ? `width: ${width};` : ''}
      ${color ? `background-color: ${color};` : ''}
    }
  `;
};
