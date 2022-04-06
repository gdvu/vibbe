import { createContext, useContext } from 'react';
import configDefault from './config.default';
import { ConfigProps } from './config.types';

export const ConfigContext = createContext<ConfigProps>(configDefault);

export const useConfig = () => useContext(ConfigContext);
