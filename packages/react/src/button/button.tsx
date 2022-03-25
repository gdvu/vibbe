import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef
} from 'react';
import { CssProps } from '../styles/main.types';
import { getLinkStyles } from './button.styled';
import { BtnAttrs, BtnProps, RefProps } from './button.types';

type BtnPropsAll = BtnProps & BtnAttrs & CssProps;

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<BtnPropsAll>>(
  ({ ...props }, ref: RefProps) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => btnRef.current);

    const { type, children, css, iconLeft, iconRight, ...rest } = props;

    const { className, styles } = getLinkStyles(css);

    const isIconLeft = Boolean(iconLeft);
    const isIconRight = Boolean(iconRight);

    return (
      <>
        <button ref={btnRef} type={type} className={className} {...rest}>
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
