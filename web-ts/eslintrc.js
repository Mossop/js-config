module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "eslint-config-prettier",
    "../base/eslint-overrides",
  ].map(require.resolve),

  parser: require.resolve("@typescript-eslint/parser"),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  env: {
    es6: true,
    node: true,
  },
};
