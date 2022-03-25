import css from 'styled-jsx/css';

export const getLinkStyles = (style: any) => {
  return css.resolve`
    button {
      ${style?.color ? `color:${style?.color};` : ''}
      ${style?.margin ? `margin:${style?.margin};` : ''}
      ${style?.backgroundColor
        ? `background-color:${style?.backgroundColor};`
        : ''}
      ${style?.padding ? `padding:${style?.padding};` : ''}
      ${style?.borderRadius ? `border-radius:${style?.borderRadius};` : ''}
    }
  `;
};
