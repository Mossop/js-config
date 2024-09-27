export default {
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      {
        'ts-expect-error': false,
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ]
  }
}
