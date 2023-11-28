import { clickEvent } from '../lib/events.js';
import { hide, show } from '../lib/elements.js';
import { timeout } from '../lib/timeout.js';

import { consoleLog } from './console.js';

while (true) {
  consoleLog('Waiting for the input.');
  const ev = await clickEvent('button');
  consoleLog(`You clicked on ${ev.currentTarget.innerText}.`);

  if(ev.currentTarget.dataset.hide) {
    hide('button');
    consoleLog('The buttons are hidden.');
    await timeout(+ev.currentTarget.dataset.hide);
    show('button');
    consoleLog('The buttons are shown again.');  
  }
  await timeout(1000);
}
