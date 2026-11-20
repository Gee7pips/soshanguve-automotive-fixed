import { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
})

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // These rules are stylistic/legacy JSX constraints, not runtime or accessibility blockers.
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["**/*.js", "**/*.cjs"],
    rules: {
      // CommonJS is the established format for Tailwind and PostCSS configuration files.
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]

export default eslintConfig
