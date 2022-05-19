import {
  ClassNameProps,
  SizesOptionsProps,
  SizesPropsConfig
} from '../config/config.types';
import { ColorsOptions } from '../theme/theme.types';
import {
  DefineConfigVariantProps,
  DefineConfigVariantTwoProps,
  SizesProps
} from './global.types';

const defineClassNamePrefix = (className?: ClassNameProps) => {
  const classNameHasPrefix = className?.prefix;
  const prefixName = className?.prefixName;
  const classNamePrefix = classNameHasPrefix ? `${prefixName}-` : '';
  return classNamePrefix;
};

const defineSizes = (
  sizes?: SizesProps,
  measurements?: SizesPropsConfig
): SizesOptionsProps | undefined => {
  if (sizes === 'xsmall') {
    return measurements?.xsmall;
  }

  if (sizes === 'small') {
    return measurements?.small;
  }

  if (sizes === 'medium') {
    return measurements?.medium;
  }

  if (sizes === 'large') {
    return measurements?.large;
  }

  if (sizes === 'xlarge') {
    return measurements?.xlarge;
  }
};

const defineConfigVariant = (options: DefineConfigVariantProps) => {
  const { variants, color: colorSelected, variant: variantSelected } = options;

  let jsxInit = (colors?: ColorsOptions) => '';

  for (let i = 0; i < variants.length; i++) {
    const item = variants[i];
    const variant = item.props.variant;
    const color = item.props.color;

    if (variant === variantSelected && color === colorSelected) {
      jsxInit = item.jsx;
    }

    if (variant === variantSelected) {
      jsxInit = item.jsx;
    }
  }

  return jsxInit;
};

const defineConfigVariantTwo = (options: DefineConfigVariantTwoProps) => {
  const { variants, color: colorSelected, variant: variantSelected } = options;

  let jsxInit = (colors?: ColorsOptions) => '';

  for (let i = 0; i < variants.length; i++) {
    const item = variants[i];
    const variant = item.props.variant;
    const color = item.props.color;

    if (variant === variantSelected && color === colorSelected) {
      jsxInit = item.jsx;
    }

    if (variant === variantSelected) {
      jsxInit = item.jsx;
    }
  }

  return jsxInit;
};

const objBoolean = (obj: object): boolean => {
  return Object.entries(obj).length === 0;
};

const trimIn = (str: string): string => {
  return str.replace(/\s+/gi, ' ');
};

const trimAll = (str: string): string => {
  return str.replace(/\s+/gi, ' ').trim();
};

export {
  defineClassNamePrefix,
  defineSizes,
  defineConfigVariant,
  defineConfigVariantTwo,
  objBoolean,
  trimIn,
  trimAll
};
