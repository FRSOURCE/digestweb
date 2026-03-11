import { typescript } from '@frsource/eslint-config';
import globals from 'globals';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  ...typescript,
  {
    ignores: [
      '**/dist',
      '**/coverage',
      '**/public',
      '**/node_modules',
      '.vitepress/cache',
    ],
  },
  {
    files: ['src/**', '.vitepress/**'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
  },
];
