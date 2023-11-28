import { getElements } from "./elements.js";

export async function universalEvent(type, selector) {
  const elements = getElements(selector);
  const onCleanup = [];
  const promises = Array.from(elements).map((element) => {
    return new Promise((resolve, reject) => {
      const handler = (evt) => {
        resolve(evt);
      };
      const disabled = element.disabled;
      onCleanup.push(() => {
        if (disabled) {
          element.disabled = true;
        }
        element.removeEventListener(type, handler);
      });
      element.addEventListener(type, handler);
      element.disabled = false;
    });
  });
  const event = await Promise.race(promises);
  onCleanup.forEach((f) => f());
  return event;
}

export async function multiEvent(typeSelectors) {
  // e.g. click@button, keydown@input, mousein,mouseout@form, given as array
  // * generate an array of promises
  // * generate a list of clean-up handlers
}

export const clickEvent = (selector) => universalEvent("click", selector);

export const keydownEvent = (selector) => universalEvent("keydown", selector);
export const keyupEvent = (selector) => universalEvent("keyup", selector);

export const changeEvent = (selector) => universalEvent("change", selector);