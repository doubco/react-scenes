module.exports = {
  parser: "babel-eslint",
  plugins: ["prettier", "react", "import"],
  rules: {
    "import/named": "off",
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "prettier/prettier": "error",
    "no-alert": "warn",
    "no-duplicate-imports": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-undef": "error",
    "no-undef-init": "error",
    "react/jsx-no-undef": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/react-in-jsx-scope": "error",
    "react/self-closing-comp": "error",
    "react/jsx-wrap-multilines": "error"
  }
};
