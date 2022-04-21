import css from 'styled-jsx/css';

export const getGlobalCss = css.global`
  input:focus,
  button:focus,
  textarea:focus {
    outline: none;
  }

  path {
    fill: currentColor !important;
  }
`;
