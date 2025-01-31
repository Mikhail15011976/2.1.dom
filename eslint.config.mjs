import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  languageOptions: {
    globals: {
      ...globals.node,
      module: 'readonly',
      require: 'readonly',
      __dirname: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
  rules: {
    // Здесь вы можете добавить свои специфические правила
  },
  overrides: [
    {
      files: ['*.js'],
      languageOptions: {
        globals: {
          ...globals.node,
        },
      },
    },
  ],
  extends: [
    pluginJs.configs.recommended,
  ],
  env: {
    node: true,
    browser: false,
  },
};