module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ]
  }
};
