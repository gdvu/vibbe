import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';
import { useConfig } from '../config/config.context';
import { useTheme } from '../theme/theme.context';
import { defineClassNamePrefix } from '../utils';
import {
  getStyledInput,
  getStyledLabel,
  getStyledTextField,
  styleInputContent
} from './input.styled';
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
      variant,
      autoFocus,
      ...rest
    } = mergeProps;

    useEffect(() => {
      if (autoFocus) {
        if (!inputRef.current) return;
        inputRef.current.focus();
      }
    }, []);

    // const shortcuts = { width, radius, shadow };
    // const defaultConfig = {
    //   prefix,
    //   colors,
    //   sizes: configSizes,
    //   disabled: configDisabled,
    //   state: configStateCss,
    //   jsxBase
    // };
    // const baseProps = { color, size, disabled, variant };

    const { className: jsxInput, styles: stylesInput } = getStyledInput();
    const { className: jsxInputContent, styles: stylesInputContent } =
      styleInputContent;
    const { className: jsxTextField, styles: stylesTextField } =
      getStyledTextField();
    const { className: jsxLabel, styles: stylesILabel } = getStyledLabel();

    const classNamesInput = `${prefix}input ${prefix}input-${variant} ${jsxInput}`;
    const classNamesTextField = `${prefix}input_textfield input_textfield-${variant} ${jsxTextField}`;
    const classNamesLabel = `input_label-${variant} ${jsxLabel} ${
      labelPlaceholder ? `input_labelplaceholder-${variant}` : ''
    }`;
    const classNamesInputContent = `${jsxInputContent}`;

    if (labelPlaceholder) {
      return (
        <>
          <div className={classNamesInput}>
            <div className={classNamesInputContent}>
              <label className={classNamesLabel}>{labelPlaceholder}</label>
              <input
                ref={inputRef}
                type={type}
                placeholder={placeholder}
                value={value}
                className={classNamesTextField}
                {...rest}
              />
            </div>
          </div>
          {stylesInput}
          {stylesInputContent}
          {stylesTextField}
          {stylesILabel}
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
