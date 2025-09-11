import 'dotenv/config';
import path from 'node:path';
import { config as shared } from './wdio.shared.conf.js';
import { devices } from './devices.js';

shared.user = process.env.BROWSERSTACK_USERNAME;
shared.key  = process.env.BROWSERSTACK_ACCESS_KEY;

shared.hostname = 'hub.browserstack.com';
shared.protocol = 'https';
shared.port     = 443;
shared.path     = '/wd/hub';

shared.services = [
  ['browserstack', { browserstackLocal: false }]
];

shared.specs = [path.join(process.cwd(), 'test/specs/android/**/*.spec.js')];


shared.maxInstances = 5;

const appId = process.env.BROWSERSTACK_APP_ID;
 // pre-uploaded app

// Generate capabilities dynamically from devices.js
shared.capabilities = devices.map(d => ({
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:app': appId,
  'bstack:options': {
    deviceName: d.deviceName,
    osVersion: d.osVersion,
    projectName: 'wdio-appium',
    buildName: process.env.BUILD_TAG || 'Android Regression',
    sessionName: `${d.deviceName}-${d.osVersion}`,
  },
  'appium:autoGrantPermissions': true,
}));

export const config = shared;
