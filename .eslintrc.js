module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "vue/script-setup-no-uses-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/require-default-prop": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  ignorePatterns: ["**/lib/ZohoEmbeddedAppSDK.min.js", "dist/**"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
    },
  ],
}
