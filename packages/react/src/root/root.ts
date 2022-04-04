import rootDefault from './root.default';
import { RootProps } from './root.types';

const createRoot = (localRoot: RootProps) => {
  const { fonts, palette, radius, spaces, zIndex } = localRoot;
  const {
    fonts: defaultFonts,
    palette: defaultPalette,
    radius: defaultRadius,
    spaces: defaultSpaces,
    zIndex: defaultZindex
  } = rootDefault;

  const mergeRoot: RootProps = {
    palette: {
      ...defaultPalette,
      ...palette
    },
    fonts: {
      ...defaultFonts,
      ...fonts
    },
    radius: {
      ...defaultRadius,
      ...radius
    },
    spaces: {
      ...defaultSpaces,
      ...spaces
    },
    zIndex: {
      ...defaultZindex,
      ...zIndex
    }
  };

  return mergeRoot;
};

const createDefaultRoot = (options: RootProps) => {
  const { fonts, palette, radius, spaces, zIndex } = options;

  const rootO = {
    palette,
    fonts,
    radius,
    spaces,
    zIndex
  };

  return rootO;
};

export { createDefaultRoot };
export default createRoot;
