module.exports = {
  'root': true,
  'ignorePatterns': ['**/util'],
  'env': {
    'node': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react/jsx-runtime',
  ],
  'parser': '@babel/eslint-parser',
  'parserOptions': { 
    'sourceType': 'module',
    'requireConfigFile': false
  },
  'rules': {
    'indent': ['warn', 2],
    'no-unused-vars': ['off', { 'vars': 'local' }],
    'prefer-const': 'warn',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'space-infix-ops': 'warn'
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
};