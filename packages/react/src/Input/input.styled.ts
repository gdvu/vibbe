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

    .input-outline {
      align-items: center;
      box-shadow: inset 0px 0px 0px 1.52px #ddd;
      border-radius: 24px;
      padding: 0 24px;
      height: 68px;
    }

    .input-underlined {
      align-items: flex-end;
      height: auto;
      padding-bottom: 6px;
      box-shadow: inset 0px -1.32px 0px 0px #8c8c8c;
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

  .input-content-outline {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .input-content-underlined {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
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

    .input_label-outline {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transform: translate(18px, -9px) scale(0.84);
      transform-origin: left top;
      background-color: #fff;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        top 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      font-size: 16px;
      color: #606060;
      letter-spacing: 0.35px;
      padding: 0 6px;
      pointer-events: none;
    }

    .input_labelplaceholder-outline {
      top: 50%;
      transform: translate(18px, -50%);
      letter-spacing: normal;
      padding: 0;
    }

    .input_label-underlined {
      padding-bottom: 18px;
      font-size: 16px;
      transform: scale(0.85);
      transform-origin: left top;
      transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
        transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      font-weight: normal;
      color: #646464;
    }

    .input_labelplaceholder-underlined {
      transform: translate(0, 95%);
    }
  `;
};
