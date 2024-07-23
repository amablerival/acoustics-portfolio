import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.jsx'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }
  },
  //   pluginReactConfig,
  {
    ignores: [
      '/node_modules',
      '/scripts',
      '/config',
      '/pnpm-lock.yaml',
      '/pnpm-workspace.yaml',
      '.DS_Store',
      '/package.json',
      '/tsconfig.json',
      '**/*.md',
      'build',
      '.eslintrc.js'
    ]
  }
];
