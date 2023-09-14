module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'react', 'react-native'],
  ignorePatterns: [
    'node_modules/',
    'build/',
    'ios/',
    'android/',
    '**/*.test.js',
  ],

  rules: {
    'prettier/prettier': 'error',
    'react/jsx-uses-react': 'off',
  },

  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
    },
  ],
}
