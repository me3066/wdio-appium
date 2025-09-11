// utils/logHelper.js
import fs from 'fs';
import path from 'path';

export async function saveLogcat(testTitle, pkgRegex) {
  const logs = await driver.getLogs('logcat');
  const filtered = logs
    .filter(e => pkgRegex.test(e.message))
    .map(e => `[${new Date(e.timestamp).toISOString()}] [${e.level}] ${e.message}`);

  const dir = path.resolve('./logs/logcat');
  fs.mkdirSync(dir, { recursive: true });
  const safeName = testTitle.replace(/[^\w.-]+/g, '_');
  const file = path.join(dir, `${safeName}.log`);
  fs.writeFileSync(file, filtered.join('\n'), 'utf-8');
  return file;
}
