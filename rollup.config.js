import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';
import postcssImport from 'postcss-import';

const production = !process.env.ROLLUP_WATCH;

const baseConfig = {
  input: 'src/index.ts',
  external: [], // No external dependencies for this library
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false, // We'll generate declarations separately
      sourceMap: production ? false : true
    }),
    postcss({
      extract: 'cosmic-ui.css',
      minimize: production,
      sourceMap: !production,
      plugins: [
        postcssImport({
          path: ['src/styles', 'src/styles/base', 'src/styles/components', 'src/styles/animations']
        })
      ]
    })
  ]
};

export default [
  // ES Module build
  {
    ...baseConfig,
    output: {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: !production
    },
    plugins: [
      ...baseConfig.plugins,
      production && terser()
    ].filter(Boolean)
  },
  
  // CommonJS build
  {
    ...baseConfig,
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: !production
    },
    plugins: [
      ...baseConfig.plugins,
      production && terser()
    ].filter(Boolean)
  },
  
  // UMD build for browser
  {
    ...baseConfig,
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'CosmicUI',
      sourcemap: !production
    },
    plugins: [
      ...baseConfig.plugins,
      production && terser()
    ].filter(Boolean)
  },
  
  // TypeScript declarations
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm'
    },
    plugins: [dts()],
    external: [/\.css$/] // Exclude CSS imports from type declarations
  }
];