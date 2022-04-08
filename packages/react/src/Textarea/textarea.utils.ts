import { TextareaBaseProps, TextareaPropsAll } from './textarea.types';

const textAreaDefaultProps = (options?: TextareaBaseProps) => {
  return {
    ...options
  };
};

const textAreaMergePropsAndConfig = (
  props: TextareaPropsAll,
  config: TextareaBaseProps
) => {
  return {
    ...config,
    ...props
  };
};

export { textAreaDefaultProps, textAreaMergePropsAndConfig };
