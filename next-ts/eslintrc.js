module.exports = {
  extends: [
    "eslint-config-next/core-web-vitals",
    "eslint-config-airbnb-base",
    "eslint-config-airbnb-typescript/base",
    "eslint-config-prettier",
    "../base/eslint-overrides",
  ].map(require.resolve),

  settings: {
    "import/internal-regex": "^@/",
  },

  rules: {
    "no-console": "off",
    "@next/next/no-img-element": "off",
  },
};
