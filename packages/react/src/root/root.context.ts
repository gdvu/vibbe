import { createContext, useContext } from 'react';
import rootDefault from './root.default';
import { RootProps } from './root.types';

export const RootContext = createContext<RootProps>(rootDefault);

export const useRoot = () => useContext(RootContext);
