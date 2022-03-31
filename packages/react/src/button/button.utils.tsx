import { ThemeBtnOptions } from '../theme/theme.types';
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

export { btnProvider, buttonMergeButtonAndConfig };
