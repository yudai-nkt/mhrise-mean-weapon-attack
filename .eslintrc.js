module.exports = {
  env: {
    es2020: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "prettier",
  ],
  rules: {
    // React 17 doesn't require these 2 rules anymore.
    // cf. https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
