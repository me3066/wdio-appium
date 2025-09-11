// config/wdio.shared.conf.js
export const config = {
  runner: 'local',
  logLevel: 'info',

  // test framework
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 120000,   // 2 minutes
  },

  // spec glob gets overridden in platform configs
  specs: [],
  exclude: [],

  maxInstances: 1,

  // Default Appium connection (platform configs override these if needed)
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',
};
