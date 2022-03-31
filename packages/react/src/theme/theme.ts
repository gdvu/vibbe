import { ThemeProps } from './theme.types';

const createTheme = (options: ThemeProps) => {
  const { colors, fonts, components, className } = options;

  const theme = {
    className,
    colors,
    fonts,
    components
  };

  return theme;
};

export default createTheme;
