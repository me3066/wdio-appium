import path from 'node:path';
import { config as shared } from './wdio.shared.conf.js';

shared.hostname = '127.0.0.1';
shared.port = 4723;
shared.path = '/';                 // Appium 2 default
shared.services = [];              // you’re starting Appium yourself
shared.specs = [path.join(process.cwd(), 'test/specs/android/*.spec.js')];

shared.capabilities = [{
  platformName: 'Android',         // REQUIRED
  'appium:automationName': 'UiAutomator2', // REQUIRED
  'appium:udid': '8eb1fe5b', // strongly recommended
  'appium:deviceName': 'Redmi Note 11',  // any string is fine
  'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
  'appium:noReset': true,
  'appium:newCommandTimeout': 300,
  // Helpful on Xiaomi/MIUI (prevents hidden-API/policy issues)
  'appium:autoGrantPermissions': true,
  'appium:disableHiddenApiPolicyCommand': true,
  'appium:ignoreHiddenApiPolicyError': true,
  // If MIUI blocks helper apps, try:
  // 'appium:skipDeviceInitialization': true,
}];

export const config = shared;