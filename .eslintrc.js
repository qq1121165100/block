module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: '@arcblock/eslint-config',
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },
  globals: {
    logger: true,
  },
};
