import { createContext, useContext } from 'react';
import configDefault from './config.default';
import { DefaultConfigProps } from './config.types';

export const ConfigContext = createContext<DefaultConfigProps>(configDefault);

export const useConfig = () => useContext(ConfigContext);
