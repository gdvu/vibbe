import {
  MeasurementsButtonProps,
  SizesButtonOptionsProps,
  ThemeBtnOptions
} from '../theme/theme.types';
import { SizesProps } from '../utils/global.types';
import { BtnDefaultAll, BtnPropsAll } from './button.types';

const btnProvider = (options?: ThemeBtnOptions) => {
  return {
    ...options?.props,
    ...options?.shortcuts,
    theme: {
      ...options?.theme
    }
  };
};

const buttonMergeButtonAndConfig = (
  props: BtnPropsAll,
  config: BtnDefaultAll
) => {
  return {
    ...config,
    ...props
  };
};

const defineSizesButton = (
  sizes?: SizesProps,
  measurements?: MeasurementsButtonProps
): SizesButtonOptionsProps | undefined => {
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

export { btnProvider, buttonMergeButtonAndConfig, defineSizesButton };
