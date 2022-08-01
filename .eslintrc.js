module.exports = {
  "root": true,
  "ignorePatterns": ["**/util"],
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parser": "@babel/eslint-parser",
  "parserOptions": { "sourceType": "module" },
  "rules": {
    "indent": ["warn", 2],
    "no-unused-vars": ["off", { "vars": "local" }],
    "prefer-const": "warn",
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "space-infix-ops": "warn"
  }
}