import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { btnProvider, buttonMergeButtonAndConfig } from './button.utils';
import { getStyledButton } from './button.styled';
import { BtnPropsAll, BtnStyledPropsAll, RefProps } from './button.types';
import { useTheme } from '../theme/theme.context';
import { defineClassNamePrefix } from '../utils';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const { className: classNameConfig, colors, components } = useTheme();

    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const defautBtnAll = btnProvider(components?.button);
    const mergeProps = buttonMergeButtonAndConfig(props, defautBtnAll);

    const customBtn = components?.button?.custom;
    const prefix = defineClassNamePrefix(classNameConfig);

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
      size,
      className: classNameProps,
      ...rest
    } = mergeProps;

    const inlineCss = {
      color,
      width,
      radius,
      shadow,
      size
    };

    const styledButton: BtnStyledPropsAll = {
      inline: inlineCss,
      theme
    };

    const styleDefaultTheme = {
      prefix,
      colors,
      custom: customBtn
    };

    const { className, styles } = getStyledButton(
      styledButton,
      styleDefaultTheme
    );

    const isIconLeft = Boolean(iconLeft);
    const isIconRight = Boolean(iconRight);

    if (jsx) {
      return (
        <>
          <button
            ref={btnRef}
            type={type}
            className={`${prefix}btn ${prefix}btn--${variant} ${className} ${classNameProps}`}
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
          className={`${prefix}btn ${prefix}btn--${variant} ${className}`}
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
