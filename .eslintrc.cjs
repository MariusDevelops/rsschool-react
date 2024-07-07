module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "eslint:all",
    "plugin:react/all",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      "./tsconfig.json",
      "./tsconfig.app.json",
      "./tsconfig.node.json",
      "vite.config.ts",
    ],
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-refresh", "react-compiler", "react"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "no-unused-vars": "off",
    "react/no-set-state": "off",
    "react/jsx-no-literals": "off",
    "react/react-in-jsx-scope": "off",
    "func-style": ["error", "expression"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "react-compiler/react-compiler": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
      flowVersion: "0.53",
    },
    propWrapperFunctions: [
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" },
      { property: "forbidExtraProps", exact: true },
    ],
    componentWrapperFunctions: [
      "observer",
      { property: "styled" },
      { property: "observer", object: "Mobx" },
      { property: "observer", object: "<pragma>" },
    ],
    formComponents: [
      "CustomForm",
      { name: "SimpleForm", formAttribute: "endpoint" },
      {
        name: "Form",
        formAttribute: ["registerEndpoint", "loginEndpoint"],
      },
    ],
    linkComponents: [
      "Hyperlink",
      { name: "MyLink", linkAttribute: "to" },
      { name: "Link", linkAttribute: ["to", "href"] },
    ],
  },
};
