import css from 'styled-jsx/css';

export const getStyledInput = () => {
  return css.resolve`
    .input {
      width: 100%;
      display: flex;
      align-items: flex-end;
      position: relative;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 16px;
      color: #000;
    }
  `;
};

export const styleInputContent = css.resolve`
  .input-content {
    width: 100%;
  }
`;

export const getStyledTextField = () => {
  return css.resolve`
    input {
      width: inherit;
      box-sizing: border-box;
      margin: 0;
    }

    input::placeholder {
      color: #a6a6a7;
      color: #acacac;
      font-weight: 500;
    }
  `;
};

export const getStyledLabel = () => {
  return css.resolve``;
};
