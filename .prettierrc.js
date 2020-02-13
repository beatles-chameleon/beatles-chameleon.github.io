module.exports = {
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.styl'],
      options: {
        parser: 'scss',
      },
    },
  ],
};
