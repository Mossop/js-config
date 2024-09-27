import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintHooks from "eslint-plugin-react-hooks";
import eslintOverrides from "../base/eslint-overrides.js";
import reactOverrides from "../base/react-overrides.js";
import tsOverrides from "../base/ts-overrides.js";
import globals from "globals";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintReact.configs.flat.recommended,
  eslintReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": eslintHooks,
    },
    rules: eslintHooks.configs.recommended.rules,
  },
  eslintOverrides,
  tsOverrides,
  reactOverrides,

  {
    rules: {
      "no-console": "off",
      "react/react-in-jsx-scope": "off",
    },

    settings: {
      "react": {
        "version": "detect",
      }
    }
  },
  {
    files: ["server.{js,mjs,cjs,tx,tsx,jsx}", "app/entry.server.{js,mjs,cjs,tx,tsx,jsx}"],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ["public/**/*.js", "app/entry.client.{js,mjs,cjs,tx,tsx,jsx}"],
    languageOptions: {
      globals: globals.browser
    }
  }
];
