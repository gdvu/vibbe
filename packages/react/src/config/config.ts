import configDefault from './config.default';
import { ConfigProps } from './config.types';

const createConfig = (localConfig: ConfigProps) => {
  const { className, components } = localConfig;
  const { className: defaultClassName, components: defaultComponents } =
    configDefault;

  const mergeConfig: ConfigProps = {
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
        shortcuts: {
          ...defaultComponents?.button?.shortcuts,
          ...components?.button?.shortcuts
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
        }
      }
    }
  };

  return mergeConfig;
};

const createDefaultConfig = (options: ConfigProps) => {
  const { className, components } = options;

  const config = {
    className,
    components
  };

  return config;
};

export { createDefaultConfig };
export default createConfig;
