import { clickEvent } from "../lib/events.js";
import { animationFrame } from "../lib/timeout.js";
import { consoleLog } from "./console.js";

let previousTimestamp = 0;

consoleLog("Click button to start.");
await clickEvent("button");

while (true) {
  const timestamp = await animationFrame();
  const delta = timestamp - previousTimestamp;
  previousTimestamp = timestamp;

  consoleLog(
    `Got animation frame after ${delta} milliseconds (${1000 / delta} fps).`
  );
}
