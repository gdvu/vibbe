import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { buttonDefaultProps, buttonMergeButtonAndConfig } from './button.utils';
import { getStyledButton } from './button.styled';
import { BtnPropsAll, BtnStyledPropsAll, RefProps } from './button.types';
import { useTheme } from '../theme/theme.context';
import { defineClassNamePrefix } from '../utils';
import { useConfig } from '../config/config.context';

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const { colors } = useTheme();
    const { className: classNameConfig, components } = useConfig();

    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const configButtonProps = {
      ...components?.button?.propsDefault,
      ...components?.button?.shortcuts
    };

    const defautBtnAll = buttonDefaultProps(configButtonProps);
    const mergeProps = buttonMergeButtonAndConfig(props, defautBtnAll);

    const configSizes = components?.button?.sizes;
    const configDisabled = components?.button?.disabled;
    const configStateCSS = components?.button?.state;
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
      jsx,
      size,
      className: classNameProps,
      ...rest
    } = mergeProps;

    const inlineCss = {
      width,
      radius,
      shadow
    };

    const basePropsCss = {
      color,
      size,
      disabled
    };

    const styledButton: BtnStyledPropsAll = {
      shortcuts: inlineCss
    };

    const defaultConfigCss = {
      prefix,
      colors,
      sizes: configSizes,
      disabled: configDisabled,
      state: configStateCSS
    };

    const { className, styles } = getStyledButton(
      styledButton,
      defaultConfigCss,
      basePropsCss
    );

    const isIconLeft = Boolean(iconLeft);
    const isIconRight = Boolean(iconRight);

    const isClassNameProps = classNameProps || '';
    const classDisabled = disabled ? `${prefix}btn-disabled` : '';
    const classNames = `${prefix}btn ${prefix}btn--${variant} ${className} ${isClassNameProps} ${classDisabled}`;

    if (jsx) {
      return (
        <>
          <button
            ref={btnRef}
            type={type}
            className={classNames}
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
          className={classNames}
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
