const webpackTestConfig = require('./webpack.test.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'tests/**/*Test.js' },
    ],
    preprocessors: {
      'tests/**/*Test.js': ['webpack'],
    },
    webpack: webpackTestConfig,
    webpackMiddleware: {
      logLevel: 'error',
    },
    reporters: ['jasmine-diff', 'dots'],
    port: 9876,
    singleRun: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    captureTimeout: 60000,
  });
};
