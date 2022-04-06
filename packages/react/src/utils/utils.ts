import { ClassNameProps } from '../config/config.types';

const defineClassNamePrefix = (className?: ClassNameProps) => {
  const classNameHasPrefix = className?.prefix;
  const prefixName = className?.prefixName;
  const classNamePrefix = classNameHasPrefix ? `${prefixName}-` : '';
  return classNamePrefix;
};

export { defineClassNamePrefix };
