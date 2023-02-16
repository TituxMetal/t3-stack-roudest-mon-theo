/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  arrowParens: "avoid",
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: "always",
  semi: true,
  tabWidth: 2,
  trailingComma: "none",
};
