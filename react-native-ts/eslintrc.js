module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-airbnb-typescript",
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
