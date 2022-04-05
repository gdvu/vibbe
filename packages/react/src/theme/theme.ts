import defaultTheme from './theme.default';
import { ThemeProps } from './theme.types';

const createTheme = (options: ThemeProps) => {
  const { colors } = options;
  const { colors: defaultColors } = defaultTheme;

  const theme: ThemeProps = {
    colors: {
      primary: {
        ...defaultColors?.primary,
        ...colors?.primary
      },
      secondary: {
        ...defaultColors?.secondary,
        ...colors?.secondary
      },
      tertiary: {
        ...defaultColors?.tertiary,
        ...colors?.tertiary
      },
      success: {
        ...defaultColors?.success,
        ...colors?.success
      },
      warning: {
        ...defaultColors?.warning,
        ...colors?.warning
      },
      danger: {
        ...defaultColors?.danger,
        ...colors?.danger
      }
    }
  };

  return theme;
};

const createDefaultTheme = (options: ThemeProps) => {
  const { colors } = options;

  const theme = {
    colors
  };

  return theme;
};

export { createDefaultTheme };
export default createTheme;
