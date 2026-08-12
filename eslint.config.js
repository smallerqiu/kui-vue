import eslint from '@eslint/js'
import globals from 'globals'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'docs/**',
      'es/**',
      'lib/**',
      'style/**',
      'types/**',
      'node_modules/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // Keep the initial adoption compatible with the existing codebase.
      // TypeScript already checks unused declarations in tsconfig.app.json.
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'warn',
      'no-constant-binary-expression': 'warn',
      'no-undef': 'warn',
      'no-useless-assignment': 'off',
      'no-useless-escape': 'off',
      'no-var': 'warn',
      'prefer-const': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'warn',
      'vue/no-reserved-component-names': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/require-v-for-key': 'warn',
      'vue/valid-v-for': 'warn',
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
      },
    },
  },
)
