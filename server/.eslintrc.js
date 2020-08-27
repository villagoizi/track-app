module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    camelcase: 2,
    'dot-notation': [2, { allowKeywords: false, allowPattern: '^[a-z]+(_[a-z]+)+$' }]
  }
}
