module.exports = {
  extends: [
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "eslint-config-prettier",
    "../base/eslint-overrides",
  ].map(require.resolve),

  settings: {
    "import/internal-regex": "^@/",
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    "no-console": "off",
  },
};
