module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': 'plugin:react/recommended',
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {

    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'semi': [2, 'always'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'no-whitespace-before-property': 'error',
    'no-multi-spaces': 'error',
    'no-console': 'warn',
    'indent': ['error', 2],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
  }
};
