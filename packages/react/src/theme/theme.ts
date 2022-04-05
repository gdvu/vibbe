import { ThemeProps } from './theme.types';

const createTheme = (options: ThemeProps) => {
  const { colors } = options;

  const theme = {
    colors
  };

  return theme;
};

export default createTheme;
