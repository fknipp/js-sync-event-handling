import { keydownEvent } from '../lib/events.js';

import { consoleLog } from './console.js';

while (true) {
  consoleLog('Waiting for a key down event.');
  const ev = await keydownEvent('body');
  console.log(ev);
  consoleLog(`You clicked the ${ev.key} key (key code ${ev.code}).`);
}
