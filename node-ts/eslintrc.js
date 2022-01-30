const { resolve } = require("../base/utils");

module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "eslint-config-prettier",
    "./eslint-overrides",
  ].map(resolve),

  parser: resolve("@typescript-eslint/parser"),

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },

  env: {
    es6: true,
    node: true,
  },
};
