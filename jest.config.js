module.exports = {
  transform: {
    '.(ts|tsx)':
      '/Users/bernardo/Projects/react-hide-show-utils-ts/node_modules/ts-jest/dist/index.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testMatch: ['<rootDir>/test/**/*.(spec|test).{ts,tsx}'],
  testURL: 'http://localhost',
  rootDir: '/Users/bernardo/Projects/react-hide-show-utils-ts',
  watchPlugins: [
    '/Users/bernardo/Projects/react-hide-show-utils-ts/node_modules/jest-watch-typeahead/filename.js',
    '/Users/bernardo/Projects/react-hide-show-utils-ts/node_modules/jest-watch-typeahead/testname.js',
  ],
};
