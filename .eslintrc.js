const eslintSveltePreprocess = require('eslint-svelte3-preprocess')
const svelteConfig = require('./svelte.config')

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  plugins: ['svelte3', '@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    },
    {
      files: ['*.ts', '*.json'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
      ]
    }
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'after'
          }
        ],
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    'svelte3/preprocess': eslintSveltePreprocess(svelteConfig.preprocess)
  }
}
