module.exports = {
  extends: [
    "eslint-config-airbnb",
    "eslint-config-airbnb/hooks",
    "eslint-config-airbnb-typescript",
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
