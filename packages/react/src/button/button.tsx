import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { getStyledButton } from './button.styled';
import {
  BtnAttrs,
  BtnProps,
  RefProps,
  StyledBtnProps,
  StyledBtnPropsAll,
  StyledDefaultBtnProps
} from './button.types';

const defaultProps: BtnProps = {
  type: 'button',
  disabled: false,
  fullWidth: false,
  color: 'primary',
  sizes: 'medium',
  variant: 'contained'
};

const defaultTheme: StyledDefaultBtnProps = {
  button: `
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
  `,
  variant: {
    text: `
      border: 0;
      background-color: transparent;
    `,
    contained: `
      border: 0;
      border-radius: 5px;
      color: #fff;
    `,
    outlined: `
      border: 1px solid red};
      border-radius: 5px;
      background-color: transparent;
      color: red;
    `
  }
};

type BtnPropsAll = BtnProps & BtnAttrs & StyledBtnProps;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const {
      type = defaultProps.type,
      variant = defaultProps.variant,
      children,
      styled = undefined,
      iconLeft,
      iconRight,
      disabled = defaultProps.disabled,
      fullWidth = defaultProps.fullWidth,
      color = defaultProps.color,
      radius,
      shadow,
      ...rest
    } = props;

    const inlineCss = {
      color,
      fullWidth,
      radius,
      shadow
    };

    const styledButton: StyledBtnPropsAll = {
      inline: inlineCss,
      styled,
      theme: defaultTheme
    };

    const { className, styles } = getStyledButton(styledButton);

    const isIconLeft = Boolean(iconLeft);
    const isIconRight = Boolean(iconRight);

    return (
      <>
        <button
          ref={btnRef}
          type={type}
          className={`btn btn--${variant} ${className}`}
          disabled={disabled}
          {...rest}
        >
          {isIconLeft && iconLeft}
          {children}
          {isIconRight && iconRight}
        </button>
        {styles}
      </>
    );
  }
);

Button.displayName = 'Button';

export default Button;
