import css from 'styled-jsx/css';
import {
  DisabledPropsConfig,
  ElementState,
  SizesPropsConfig
} from '../config/config.types';
import { evalColor } from '../styles/main';
import { Colors } from '../theme/theme.types';
import { defineSizes } from '../utils';
import { ColorProps, SizesProps } from '../utils/global.types';
import { TextareaStyledPropsAll } from './textarea.types';

export const getStyledTextarea = (
  inlineCss: TextareaStyledPropsAll,
  defaultConfigCss: {
    prefix?: string;
    colors?: Colors;
    sizes?: SizesPropsConfig;
    disabled: DisabledPropsConfig;
    state?: ElementState;
  },
  basePropsCss: {
    color?: ColorProps;
    size?: SizesProps;
  }
) => {
  const { colors, sizes, prefix, disabled, state } = defaultConfigCss;
  const { inline } = inlineCss;
  const { color, size } = basePropsCss;
  const { radius, shadow, width } = inline;

  const definedColor = evalColor({ color, colors });
  const definedSize = defineSizes(size, sizes);

  return css.resolve`
    ${`.${prefix}textarea`} {
      ${definedSize?.width ? `width: ${definedSize.width};` : ''}
      ${definedSize?.height ? `height: ${definedSize.height};` : ''}
      ${definedSize?.padding ? `padding: ${definedSize.padding};` : ''}
      ${definedSize?.fontSize ? `font-size: ${definedSize.fontSize};` : ''}
    }
  `;
};
