import defaultTheme from '../theme/theme.default';
import { BtnDefaultAll, BtnPropsAll } from './button.types';

const defaultButton = defaultTheme.components?.button;

const defaultBtnAll = {
  ...defaultButton?.props,
  ...defaultButton?.shortcuts,
  theme: {
    ...defaultButton?.theme
  }
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

export { defaultBtnAll, buttonMergeButtonAndConfig };
