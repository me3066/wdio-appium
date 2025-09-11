// config/wdio.ios.conf.js
import path from 'node:path';
import { config as shared } from './wdio.shared.conf.js';

shared.hostname = '127.0.0.1';
shared.port = 4727;
shared.path = '/';

shared.services = [
  ['appium', { command: 'appium', args: { port: 4727, basePath: '/' } }],
];

//shared.specs = ['test/specs/ios/ios-todo-list-screen.spec.js']; // original one
shared.specs = ['test/specs/ios/ios-todo-list-screen.spec.js'];



shared.capabilities = [{
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:deviceName': 'iPhone 12',
  'appium:platformVersion': '18.6',
  'appium:app': path.join(process.cwd(), 'app/ios/MVCTodo.app'),
}];

export const config = shared;
