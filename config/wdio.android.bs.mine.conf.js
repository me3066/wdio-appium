import 'dotenv/config';
import path from 'node:path';
import { config as shared } from './wdio.shared.conf.js';

// BrowserStack auth
shared.user = process.env.BROWSERSTACK_USERNAME;
shared.key  = process.env.BROWSERSTACK_ACCESS_KEY;

// BS hub
shared.hostname = 'hub.browserstack.com';
shared.protocol = 'https';
shared.port     = 443;
shared.path     = '/wd/hub';

// Service
shared.services = [
  ['browserstack', { browserstackLocal: false }]
];

// Specs
shared.specs = [path.join(process.cwd(), 'test/specs/android/add-note-screen.spec.js')];

// Capabilities
shared.capabilities = [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': process.env.APP_URL || 'bs://fc8533004b4166aa283f05a5cb57905bd240edb9',
  'bstack:options': {
    deviceName: process.env.BROWSERSTACK_DEVICE_NAME || 'Google Pixel 3',
    osVersion:  process.env.BROWSERSTACK_OS_VERSION  || '9.0',
    projectName: 'wdio-appium',
    buildName:   process.env.BUILD_TAG || 'Android add-note-screen',
    sessionName: 'add-note-screen'
  },
  'appium:autoGrantPermissions': true
}];

export const config = shared;
