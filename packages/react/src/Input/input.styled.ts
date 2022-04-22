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

    .input-filled {
      align-items: center;
      background-color: #f2f2f2;
      border-radius: 24px;
      padding: 0 24px;
      height: 78px;
    }
  `;
};

export const styleInputContent = css.resolve`
  .input-content {
    width: 100%;
  }

  .input-content-filled {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }
`;

export const getStyledTextField = () => {
  return css.resolve`
    .input_textfield {
      width: 100%;
      position: relative;
      padding: 0;
      margin: 0;
      border: 0;
      font-family: inherit;
      font-size: inherit;
      font-weight: inherit;
      background-color: inherit;
      box-sizing: border-box;
    }

    input::placeholder {
      color: #a6a6a7;
      color: #acacac;
      font-weight: 500;
    }
  `;
};

export const getStyledLabel = () => {
  return css.resolve`
    .input_label {
      font-size: inherit;
      color: #000;
    }

    .input_label-filled {
      display: block;
      position: relative;
      z-index: 1;
      transform: scale(0.8);
      transform-origin: left top;
      padding-bottom: 2px;
      font-family: 'Open Sans', sans-serif;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      font-size: 15px;
      font-weight: 500;
      color: #acacac;
      pointer-events: none;
    }

    .input_labelplaceholder-filled {
      transform: translate(0, 50%);
    }
  `;
};
