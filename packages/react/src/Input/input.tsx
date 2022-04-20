import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useConfig } from '../config/config.context';
import { useTheme } from '../theme/theme.context';
import { defineClassNamePrefix } from '../utils';
import { getStyledInput } from './input.styled';
import { InputPropsAll, InputRef } from './input.types';
import { inputDefaultProps, inputMergePropsAndConfig } from './input.utils';

const Input = forwardRef<HTMLInputElement, InputPropsAll>(
  (props, ref: InputRef) => {
    const { colors } = useTheme();
    const { className: classNameConfig, components } = useConfig();

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current);

    const defaultInputAll = inputDefaultProps(components.input.propsDefault);
    const mergeProps = inputMergePropsAndConfig(props, defaultInputAll);

    const configSizes = components.input.sizes;
    const configDisabled = components.input.disabled;
    const configStateCss = components.input.state;
    const jsxBase = components.input.jsxBase;
    const prefix = defineClassNamePrefix(classNameConfig);

    const {
      type,
      placeholder,
      value,
      width,
      radius,
      shadow,
      color,
      size,
      label,
      labelPlaceholder,
      disabled,
      variant
    } = mergeProps;

    const shortcuts = { width, radius, shadow };
    const defaultConfig = {
      prefix,
      colors,
      sizes: configSizes,
      disabled: configDisabled,
      state: configStateCss,
      jsxBase
    };
    const baseProps = { color, size, disabled, variant };

    const { className: classNameInput, styles: stylesInput } = getStyledInput({
      shortcuts,
      defaultConfig,
      baseProps
    });

    const classNamesInput = `${prefix}input ${prefix}input-${variant} ${classNameInput}`;

    if (labelPlaceholder) {
      const classNamesContainer = `input-holder`;
      const classNamesLabel = `label-holder`;

      return (
        <>
          <div className={classNamesContainer}>
            <label className={classNamesLabel}>{labelPlaceholder}</label>
            <input
              ref={inputRef}
              type={type}
              placeholder={placeholder}
              value={value}
              className={classNamesInput}
            />
          </div>
          {stylesInput}
        </>
      );
    }

    return (
      <>
        <div>
          <label>{label}</label>
          <input
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            value={value}
            className={classNamesInput}
          />
        </div>
        {stylesInput}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
