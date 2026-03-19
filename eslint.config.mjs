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
      'playwright-report',
      'test-results',
      'tools/imported.json',
      'tools/candidates-input.json',
      'tools/candidates-output.json',
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
