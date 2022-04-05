import { createDefaultTheme } from './theme';

const defaultTheme = createDefaultTheme({
  colors: {
    primary: {
      light: '#3f48cc',
      dark: '#3f48cc',
      contrastText: '#fff'
    },
    secondary: {
      light: '#0071B2',
      dark: '#0071B2',
      contrastText: '#fff'
    },
    tertiary: {
      light: '#5b5c5c',
      dark: '#5b5c5c',
      contrastText: '#fff'
    },
    danger: {
      light: '#ff265b',
      dark: '#ff265b',
      contrastText: '#fff'
    },
    warning: {
      light: '#ffba2f',
      dark: '#ffba2f',
      contrastText: '#fff'
    },
    success: {
      light: '#2dbd85',
      dark: '#2dbd85',
      contrastText: '#fff'
    }
  }
});

export default defaultTheme;
