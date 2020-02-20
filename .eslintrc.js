module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest: true"
  },
  extends: [
    "eslint:recomended",
    "plugin:react/recomended",
    "plugin:@typescript-eslint/recomended",
    "prettier/@typescript-eslint",
    'airbnb'
    //"plugin:prettier/recomended"
  ],
  
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    "react/jsx-filaname-extension": [1, {"extensions": [".ts", ".tsx"]}]
  },
};
