import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable type checking rules
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // Add other rules you want to disable
    },
  }
];

export default eslintConfig;