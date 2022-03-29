import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { mergePropsAndConfig } from '../utils';
import { useBtnContext } from './button.context';
import { getStyledButton } from './button.styled';
import { BtnPropsAll, BtnStyledPropsAll, RefProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const propsDefault = useBtnContext();
    const mergeProps = mergePropsAndConfig(props, propsDefault);

    const {
      type,
      variant,
      children,
      styled,
      iconLeft,
      iconRight,
      disabled,
      width,
      color,
      radius,
      shadow,
      theme,
      ...rest
    } = mergeProps;

    const inlineCss = {
      color,
      width,
      radius,
      shadow
    };

    const styledButton: BtnStyledPropsAll = {
      inline: inlineCss,
      styled,
      theme
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
