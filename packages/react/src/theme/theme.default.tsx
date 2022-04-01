import createTheme from './theme';

const defaultTheme = createTheme({
  className: {
    prefix: true,
    prefixName: 'vibbe'
  },
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
  },
  components: {
    button: {
      props: {
        type: 'button',
        variant: 'contained',
        disabled: false
      },
      shortcuts: {
        size: 'medium',
        width: 'auto',
        color: 'primary'
      },
      custom: {
        sizes: {
          xsmall: {
            padding: '7px 12px',
            fontSize: '14px'
          },
          small: {
            padding: '10px 18px',
            fontSize: '14px'
          },
          medium: {
            padding: '13px 26px',
            fontSize: '15px'
          },
          large: {
            padding: '16px 32px',
            fontSize: '16px'
          },
          xlarge: {
            padding: '18px 36px',
            fontSize: '16px'
          }
        }
      }
    }
  }
});

export default defaultTheme;
