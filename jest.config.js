module.exports = {
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts'
    ],
    resolver: 'jest-pnp-resolver',
    setupFiles: [
        'react-app-polyfill/jsdom'
    ],
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}'
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '.+\\.module\\.(css|sass)$': 'jest-css-modules-transform',
        '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js'
    },
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'
    ],
    moduleDirectories: [
        'node_modules', 'src'
    ],
    moduleNameMapper: {
        '^react-native$': 'react-native-web'
    },
    moduleFileExtensions: [
        'web.js',
        'js',
        'web.ts',
        'ts',
        'web.tsx',
        'tsx',
        'json',
        'web.jsx',
        'jsx',
        'node'
    ],
    watchPlugins: [
        '/Users/connor/Documents/work/15-pazzle-game/node_modules/jest-watch-typeahead/filename.js',
        '/Users/connor/Documents/work/15-pazzle-game/node_modules/jest-watch-typeahead/testname.js'
    ]
};
