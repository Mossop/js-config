import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintOverrides from "../base/eslint-overrides.js";
import tsOverrides from "../base/ts-overrides.js";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintOverrides,
  tsOverrides,
];
