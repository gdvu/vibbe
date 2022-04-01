import { ColorsOptions } from '../theme/theme.types';
import { evalColorPros } from './main.types';

export const evalColor = (
  options: evalColorPros
): ColorsOptions | undefined => {
  const { color, colors } = options;

  if (color === 'primary') {
    return colors?.primary;
  }
  if (color === 'secondary') {
    return colors?.secondary;
  }
  if (color === 'tertiary') {
    return colors?.tertiary;
  }
  if (color === 'warning') {
    return colors?.warning;
  }
  if (color === 'success') {
    return colors?.success;
  }

  if (color === 'danger') {
    return colors?.danger;
  }
};
