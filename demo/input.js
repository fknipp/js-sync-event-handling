import { changeEvent } from '../lib/events.js';

import { consoleLog } from './console.js';

while (true) {
  consoleLog('Waiting for a new change event.');
  const ev = await changeEvent('input');
  consoleLog(`The event was triggered on ${ev.currentTarget.name} with value ${ev.currentTarget.value} (checked: ${ev.currentTarget.checked}).`);
}
