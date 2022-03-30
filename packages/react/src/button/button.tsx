import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { buttonMergeButtonAndConfig, defaultBtnAll } from './button.utils';
import { GetStyledButton } from './button.styled';
import { BtnPropsAll, BtnStyledPropsAll, RefProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const mergeProps = buttonMergeButtonAndConfig(props, defaultBtnAll);

    const {
      type,
      variant,
      children,
      iconLeft,
      iconRight,
      disabled,
      width,
      color,
      radius,
      shadow,
      theme,
      jsx,
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
      theme
    };

    const { className, styles } = GetStyledButton(styledButton);

    const isIconLeft = Boolean(iconLeft);
    const isIconRight = Boolean(iconRight);

    if (jsx) {
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
          <style jsx>{jsx}</style>
        </>
      );
    }

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
