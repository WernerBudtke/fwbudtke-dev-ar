/* eslint-env node */
// Flat ESLint config (ESLint v9+)
module.exports = [
  // ignore common build and env files
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.cache/**',
      '.vite/**',
      'coverage/**',
      '*.min.js',
      '/*.local',
      '.env',
      '.idea/**',
      '.vscode/**',
    ],
  },

  // apply to JS/TS/JSX/TSX files
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      // Pass the parser module itself (not its path). The flat config expects
      // an object with parse/parseForESLint methods.
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json'],
      },
    },
    // load plugin implementations
    plugins: {
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      // Accessibility tuning
      'jsx-a11y/anchor-is-valid': 'off',

      // General
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'warn',
    },
  },
]
