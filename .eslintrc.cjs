module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      ts: '@typescript-eslint/parser'
    }
  },
  env: {
    node: true,
    browser: true
  },
  extends: ['plugin:vue/vue3-recommended', '@nuxtjs/eslint-config-typescript'],
  rules: {
    'no-trailing-spaces': ['warn'],
    'no-extra-semi': 'off',
    indent: ['error', 2],
    'prefer-promise-reject-errors': 'off',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/comma-dangle': 'error',
    'vue/max-attributes-per-line': [
      1,
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  ignorePatterns: ['dist', 'node_modules', 'build', 'coverage', 'docs', 'test'],
  overrides: [
    {
      files: ['components/**/**/*.vue', '{js,ts,jsx, cjs}']
    }
  ]
}
