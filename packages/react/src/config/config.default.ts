import { createDefaultConfig } from './config';

const configDefault = createDefaultConfig({
  className: {
    prefix: true,
    prefixName: 'vibbe',
    prefixSeparator: '-'
  },
  components: {
    button: {
      propsDefault: {
        disabled: false,
        type: 'button',
        variant: 'contained',
        color: 'primary',
        size: 'medium'
      },
      sizes: {
        xsmall: {
          padding: '14px 20px',
          fontSize: '13px'
        },
        small: {
          padding: '16px 24px',
          fontSize: '14px'
        },
        medium: {
          padding: '16px 28px',
          fontSize: '15px'
        },
        large: {
          padding: '18px 32px',
          fontSize: '16px'
        },
        xlarge: {
          padding: '20px 36px',
          fontSize: '16px'
        }
      }
    }
  }
});

export default configDefault;
