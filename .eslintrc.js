module.exports = {
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  rules: {
    // eslint rules
    'arrow-body-style': ['off'],
    'arrow-parens': ['off'],
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    'comma-dangle': ['off'],
    'func-names': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off'],
    'import/prefer-default-export': ['off'],
    'max-len': ['error', {code: 120}],
    'no-console': ['off'],
    'no-continue': ['off'],
    'no-empty': ['error', {allowEmptyCatch: true}],
    'no-param-reassign': ['off'],
    'no-prototype-builtins': ['off'],
    'no-restricted-syntax': ['off'],
    'no-trailing-spaces': ['error', {skipBlankLines: true}],
    'no-underscore-dangle': ['off'],
    'object-curly-spacing': ['off'],
    'quote-props': ['error', 'consistent', {keywords: true}],
    'semi': ['error', 'never'],

    // vue rules
    'vue/attributes-order': ['off'],
    'vue/max-attributes-per-line': ['off'],
    'vue/name-property-casing': ['error', 'kebab-case']
  }
}