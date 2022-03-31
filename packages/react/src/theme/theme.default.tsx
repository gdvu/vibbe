import createTheme from './theme';

const defaultTheme = createTheme({
  className: {
    prefix: true,
    prefixName: 'vibbe'
  },
  colors: {
    primary: {
      light: '#ffcc00',
      dark: '#ffcc00',
      contrastText: '#fff'
    },
    secondary: {
      light: '#e76d0c',
      dark: '#e76d0c',
      contrastText: '#fff'
    },
    tertiary: {
      light: '#e76d0c',
      dark: '#e76d0c',
      contrastText: '#fff'
    },
    danger: {
      light: '#e60000',
      dark: '#e60000',
      contrastText: '#fff'
    },
    warning: {
      light: 'yellow',
      dark: 'yellow',
      contrastText: '#fff'
    },
    success: {
      light: '#70a800',
      dark: '#70a800',
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
