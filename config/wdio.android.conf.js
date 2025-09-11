// config/wdio.android.conf.js (ESM)
import path from 'node:path';
import { config as shared } from './wdio.shared.conf.js';
import { saveLogcat } from '../utils/logHelper.js';  // 👈 add this

shared.hostname = '127.0.0.1';
shared.port = 4728;
shared.path = '/';
shared.relaxedSecurity = true;

// Let WDIO spawn Appium automatically
shared.services = [
  ['appium', { command: 'appium', args: { port: 4723, basePath: '/' } }],
];

// Specs
shared.specs = ['test/specs/android/add-note-screen.spec.js'];

// Capabilities
shared.capabilities = [
  {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:platformVersion': '11.0',
    'appium:deviceName': 'Pixel 3-v11',
    'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
    'appium:autoGrantPermissions': true,
  }
];

// 🔎 Save logcat after every test using your helper
shared.afterTest = async function (test /*, context, result */) {
  const pkgRegex = /com\.socialnmobile\.dictapps\.notepad\.color\.note/i; // your app
  try {
    const file = await saveLogcat(test.title, pkgRegex);
    if (file) console.log(`logcat saved → ${file}`);
  } catch (err) {
    console.warn('Failed to save logcat:', err?.message || err);
  }
};

export const config = shared;
