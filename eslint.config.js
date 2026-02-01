const nextConfig = require('eslint-config-next')
const eslintConfigPrettier = require('eslint-config-prettier/flat')
const eslintPluginPrettier = require('eslint-plugin-prettier')

// eslint-plugin-tailwindcss は Tailwind v4 と非互換のため一時無効化
// const tailwindcssFlat = require('eslint-plugin-tailwindcss').configs['flat/recommended']

module.exports = [
  ...nextConfig,
  // ...tailwindcssFlat,
  {
    files: ['src/**/*.{ts,tsx,js}'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-default-export': 'warn',
      semi: ['error', 'never'],
      indent: ['error', 2],
    },
  },
  {
    files: ['src/pages/**/*.tsx'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          semi: false,
        },
      ],
    },
  },
]
