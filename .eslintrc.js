module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'react-app'
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      semi: ['error', 'never'],
      indent: ['error', 2]
    }
  }
