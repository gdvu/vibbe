import css from 'styled-jsx/css';

export const getGlobalCss = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  input:focus,
  button:focus,
  textarea:focus {
    outline: none;
  }

  path {
    fill: currentColor !important;
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;
