import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { useConfig } from '../config/config.context';
import { useTheme } from '../theme/theme.context';
import { defineClassNamePrefix } from '../utils';
import {
  TextareaPropsAll,
  TextareaRef,
  TextareaStyledPropsAll
} from './textarea.types';
import {
  textAreaDefaultProps,
  textAreaMergePropsAndConfig
} from './textarea.utils';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaPropsAll>(
  ({ ...props }, ref: TextareaRef) => {
    const { colors } = useTheme();
    const { className: classNameConfig, components } = useConfig();

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle(ref, () => textAreaRef.current);

    const defaultTextareaAll = textAreaDefaultProps(
      components?.textarea?.propsDefault
    );
    const mergeProps = textAreaMergePropsAndConfig(props, defaultTextareaAll);

    const configSizes = components?.textarea?.sizes;
    const configDisabled = components?.textarea?.disabled;
    const configStateCSS = components?.textarea?.state;
    const prefix = defineClassNamePrefix(classNameConfig);

    const {
      color,
      size,
      value,
      placeholder,
      disabled,
      required,
      width,
      shadow,
      radius,
      jsx,
      className: classNameProps,
      ...rest
    } = mergeProps;

    const inlineCss = { width, radius, shadow };
    const basePropsCss = { color, size };
    const styledTextarea: TextareaStyledPropsAll = { inline: inlineCss };
    const defaultConfigCss = {
      prefix,
      colors,
      sizes: configSizes,
      disabled: configDisabled,
      state: configStateCSS
    };

    return (
      <>
        <textarea
          ref={textAreaRef}
          name=''
          id=''
          cols='30'
          rows='10'
          {...rest}
        ></textarea>
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
