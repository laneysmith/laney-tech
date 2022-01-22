module.exports = {
  extends: '@mlaursen/eslint-config',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/no-unescaped-entities': 0,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['@typescript-eslint/recommended-requiring-type-checking'],
    },
  ],
};
