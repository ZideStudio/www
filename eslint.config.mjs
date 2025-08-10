import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintPluginCss from 'eslint-plugin-css';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: ['node_modules', '.next', 'dist', 'build'],
  },
  {
    files: ['**/*.{ts,tsx}'],

    extends: compat.extends('eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'),

    plugins: {
      'jsx-a11y': eslintPluginJsxA11y,
      '@typescript-eslint': tseslint,
      css: eslintPluginCss,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',

      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
    },

    rules: {
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
      'jsx-a11y/no-noninteractive-tabindex': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/lang': 'error',
      'no-extra-boolean-cast': 'error',
      'no-useless-catch': 'error',
      'no-useless-constructor': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-useless-rename': 'error',
      'no-unneeded-ternary': 'error',
      'prefer-arrow-callback': 'error',

      'array-callback-return': [
        'error',
        {
          checkForEach: true,
        },
      ],

      'object-shorthand': ['error', 'always'],
      '@typescript-eslint/prefer-optional-chain': 'error',
      'prefer-regex-literals': 'error',
      'prefer-numeric-literals': 'warn',
      'no-void': 'off',
      'no-continue': 'error',
      'react/no-children-prop': 'error',
      'no-const-assign': 'error',
      'no-constructor-return': 'error',
      'no-constant-condition': 'error',
      'no-empty-character-class': 'error',
      'no-inner-declarations': 'error',
      'no-global-assign': 'error',
      'constructor-super': 'error',
      'no-use-before-define': 'error',
      'no-loss-of-precision': 'error',
      'no-self-assign': 'error',
      'no-undef': 'off',
      'react/no-unknown-property': 'error',
      'css/no-unknown-unit': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-unsafe-optional-chaining': 'error',
      '@typescript-eslint/no-invalid-void-type': 'error',
      'use-isnan': 'error',
      'react/jsx-key': 'error',
      'generator-star-spacing': 'error',
      'valid-typeof': 'error',
      'no-delete-var': 'warn',
      'react/no-img-element': 'off',
      'react/no-danger': 'warn',
      'react/no-danger-with-children': 'error',
      'no-eval': 'error',
      'react/jsx-no-target-blank': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'no-param-reassign': 'error',
      'no-else-return': 'error',
      '@typescript-eslint/prefer-as-const': 'warn',
      yoda: 'error',
      'block-scoped-var': 'off',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
        },
      ],

      '@typescript-eslint/consistent-type-imports': 'error',
      'prefer-const': 'error',
      'default-param-last': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      'prefer-exponentiation-operator': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      'one-var': ['error', 'never'],
      'object-shorthand': 'error',
      '@typescript-eslint/prefer-literal-enum-member': 'error',
      'prefer-template': 'error',
      'react/self-closing-comp': 'error',
      'array-element-newline': 'off',
      'react/no-array-index-key': 'warn',
      'no-cond-assign': 'error',
      'no-async-promise-executor': 'error',
      'no-catch-shadow': 'error',
      'no-class-assign': 'error',
      'no-warning-comments': 'error',
      'no-compare-neg-zero': 'error',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      'no-debugger': 'error',
      eqeqeq: 'error',
      'no-duplicate-case': 'error',
      'no-dupe-class-members': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-empty': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-new-wrappers': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-self-compare': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-unsafe-negation': 'error',
      'default-case': 'error',

      'no-console': [
        'error',
        {
          allow: ['assert', 'error', 'info', 'warn', 'trace'],
        },
      ],

      'no-with': 'error',
      'no-var': 'error',
    },
  },
]);
