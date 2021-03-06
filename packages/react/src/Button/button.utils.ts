import { SizesOptionsProps, SizesPropsConfig } from '../config/config.types';
import { SizesProps } from '../utils/global.types';
import { BtnProps, BtnPropsAll } from './button.types';

const buttonDefaultProps = (options?: BtnProps) => {
  return {
    ...options
  };
};

const buttonMergeButtonAndConfig = (
  props: BtnPropsAll,
  config: BtnProps
) => {
  return {
    ...config,
    ...props
  };
};

const defineSizesButton = (
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

export { buttonDefaultProps, buttonMergeButtonAndConfig, defineSizesButton };
