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
        animated: false,
        type: 'button',
        variant: 'contained',
        color: 'primary',
        size: 'medium'
      },
      shortcuts: {
        radius: '16px'
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
      },
      state: {
        hover: `
          opacity: 0.85;
        `,
        active: `
          transform: scale(0.95);
        `
      },
      disabled: {
        jsx: `
        cursor: no-drop;
        background-color: #333;
        color: #777
      `,
        cancelState: true
      },
      jsxBase: {
        base: `
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 500;
          font-family: var(--font-one);
          letter-spacing: 0.5px;
          box-sizing: border-box;
          user-select: none;
          outline: none;
          cursor: pointer;
        `,
        variants: [
          {
            props: { variant: 'contained' },
            jsx: colors => `
              border: 0;
              background-color: ${colors?.light};
              color: ${colors?.contrastText};
            `
          },
          {
            props: { variant: 'outlined' },
            jsx: colors => `
              border: 2px solid ${colors?.light};
              background-color: transparent;
              color: ${colors?.light};
            `
          },
          {
            props: { variant: 'text' },
            jsx: colors => `
              border: 0;
              background-color: transparent;
              color: ${colors?.light};
            `
          }
        ]
      }
    },
    textarea: {
      propsDefault: {
        disabled: false,
        required: false,
        size: 'medium'
      },
      disabled: {
        jsx: `
          cursor: no-drop;
          background: #d6d6d6;
        `
      },
      jsxBase: {
        base: `
          padding: 12px 15px;
          outline: none;
          resize: none;
          font-size: 15px;
        `,
        variants: [
          {
            props: { variant: 'filled' },
            jsx: () => `
              border: 1px solid #e3e6eb;
              border-radius: 12px;
              background: #f2f2f2;
            `
          },
          {
            props: { variant: 'outline' },
            jsx: () => `
              border: 2px solid #d6d6d6;
              border-radius: 12px;
              background: transparent;
            `
          },
          {
            props: { variant: 'underlined' },
            jsx: () => `
              border: 0;
              border-radius: 0;
              border-bottom: 2px solid #d6d6d6;
              background: transparent;
            `
          }
        ]
      },
      shortcuts: {
        width: '100%'
      }
    },
    input: {
      propsDefault: {
        disabled: false,
        required: false,
        type: 'text',
        size: 'medium',
        variant: 'filled'
      }
    }
  }
});

export default configDefault;
