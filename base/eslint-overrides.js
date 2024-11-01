export default {
  rules: {
    "class-methods-use-this": "off",
    eqeqeq: "off",
    "max-classes-per-file": "off",
    "no-await-in-loop": "off",
    "no-console": "off",
    "no-continue": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "prefer-const": "off",
    "prefer-destructuring": ["error", { object: true, array: false }],
  },
};
