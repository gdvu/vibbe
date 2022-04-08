import {
  ClassNameProps,
  SizesOptionsProps,
  SizesPropsConfig
} from '../config/config.types';
import { SizesProps } from './global.types';

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

export { defineClassNamePrefix, defineSizes };
