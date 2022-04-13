import configDefault from './config.default';
import { ConfigProps, DefaultConfigProps } from './config.types';

const createConfig = (localConfig: ConfigProps) => {
  const { className, components } = localConfig;
  const { className: defaultClassName, components: defaultComponents } =
    configDefault;

  const mergeConfig: DefaultConfigProps = {
    className: {
      ...defaultClassName,
      ...className
    },
    components: {
      button: {
        propsDefault: {
          ...defaultComponents?.button?.propsDefault,
          ...components?.button?.propsDefault
        },
        sizes: {
          xsmall: {
            ...defaultComponents?.button?.sizes?.xsmall,
            ...components?.button?.sizes?.xsmall
          },
          small: {
            ...defaultComponents?.button?.sizes?.small,
            ...components?.button?.sizes?.small
          },
          medium: {
            ...defaultComponents?.button?.sizes?.medium,
            ...components?.button?.sizes?.medium
          },
          large: {
            ...defaultComponents?.button?.sizes?.large,
            ...components?.button?.sizes?.large
          },
          xlarge: {
            ...defaultComponents?.button?.sizes?.xlarge,
            ...components?.button?.sizes?.xlarge
          }
        },
        state: {
          ...defaultComponents?.button?.state,
          ...components?.button?.state
        },
        disabled: {
          ...defaultComponents?.button?.disabled,
          ...components?.button?.disabled
        },
        shortcuts: {
          ...defaultComponents?.button?.shortcuts,
          ...components?.button?.shortcuts
        },
        jsxBase: {
          ...defaultComponents?.button.jsxBase,
          ...components?.button?.jsxBase
        }
      },
      textarea: {
        ...defaultComponents.textarea,
        ...components?.textarea
      }
    }
  };

  return mergeConfig;
};

const createDefaultConfig = (options: DefaultConfigProps) => {
  const { className, components } = options;

  const config = {
    className,
    components
  };

  return config;
};

export { createDefaultConfig };
export default createConfig;
