import { InputBaseProps, InputPropsAll } from './input.types';

const inputDefaultProps = (options?: InputBaseProps) => {
  return {
    ...options
  };
};

const inputMergePropsAndConfig = (
  props: InputPropsAll,
  config: InputBaseProps
) => {
  return {
    ...config,
    ...props
  };
};

export { inputDefaultProps, inputMergePropsAndConfig };
