import { ThemeProps } from './theme.types';

const createTheme = (options: ThemeProps) => {
  const { colors, fonts, components } = options;

  const theme = {
    colors,
    fonts,
    components
  };

  return theme;
};

export default createTheme;
