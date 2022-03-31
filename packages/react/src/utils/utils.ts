import { ThemeProps } from '../theme/theme.types';

const mergeThemes = (defaultTheme: ThemeProps, localTheme: ThemeProps) => {
  const {
    colors: defaultColors,
    fonts: defaultFonts,
    components: defaultComponents,
    className: defaultClassName
  } = defaultTheme;
  const {
    colors: localColors,
    fonts: localFonts,
    components: localComponents,
    className: localClassName
  } = localTheme;

  // theme merged
  const theme: ThemeProps = {
    className: {
      ...defaultClassName,
      ...localClassName
    },
    colors: {
      primary: {
        ...defaultColors?.primary,
        ...localColors?.primary
      },
      secondary: {
        ...defaultColors?.secondary,
        ...localColors?.secondary
      },
      tertiary: {
        ...defaultColors?.tertiary,
        ...localColors?.tertiary
      },
      danger: {
        ...defaultColors?.danger,
        ...localColors?.danger
      },
      warning: {
        ...defaultColors?.warning,
        ...localColors?.warning
      },
      success: {
        ...defaultColors?.success,
        ...localColors?.success
      }
    },
    fonts: {
      family: {
        ...defaultFonts?.family,
        ...localFonts?.family
      },
      sizes: {
        ...defaultFonts?.sizes,
        ...localFonts?.sizes
      },
      weight: {
        ...defaultFonts?.weight,
        ...localFonts?.weight
      }
    },
    components: {
      button: {
        props: {
          ...defaultComponents?.button?.props,
          ...localComponents?.button?.props
        },
        shortcuts: {
          ...defaultComponents?.button?.shortcuts,
          ...localComponents?.button?.shortcuts
        },
        custom: {
          sizes: {
            ...defaultComponents?.button?.custom?.sizes,
            ...localComponents?.button?.custom?.sizes
          }
        },
        theme: {
          ...defaultComponents?.button?.theme,
          ...localComponents?.button?.theme
        }
      }
    }
  };

  return theme;
};

export { mergeThemes };
