import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import replace from '@rollup/plugin-replace';
import path from 'path';

const PKJSON = require('./package.json');
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const EXTERNALS = id => /^react|styled-jsx/.test(id);
const NODE_ENV = process.env.NODE_ENV || 'development';

// inputs
const inputFiles = path.resolve(__dirname, 'src', 'index.ts');
const inputDts = path.resolve(__dirname, 'dist', 'esm', 'types', 'index.d.ts');

// outputs
const outputFiles = [
  {
    file: PKJSON.main,
    format: 'cjs',
    sourcemap: true
  },
  {
    file: PKJSON.module,
    format: 'esm',
    sourcemap: true
  }
];

const outputDts = [
  {
    file: path.resolve(__dirname, 'dist', 'index.d.ts'),
    format: 'esm'
  }
];

// plugins options
const resolveOptions = {
  extensions: EXTENSIONS,
  moduleDirectories: ['src']
};

const babelOptions = {
  babelHelpers: 'bundled',
  extensions: EXTENSIONS,
  exclude: ['node_modules/**', 'src/**/**/*.test.tsx']
};

const typescriptOptions = {
  tsconfig: './tsconfig.build.json',
  sourceMap: true,
  inlineSources: true
};

// export config
export default [
  {
    input: inputFiles,
    output: outputFiles,
    plugins: [typescript(typescriptOptions)],
    external: EXTERNALS
  },
  {
    input: inputFiles,
    output: outputFiles,
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
        preventAssignment: true
      }),
      peerDepsExternal(),
      resolve(resolveOptions),
      commonjs(),
      babel(babelOptions),
      terser()
    ],
    external: EXTERNALS
  },
  {
    input: inputDts,
    output: outputDts,
    plugins: [dts()]
  }
];
