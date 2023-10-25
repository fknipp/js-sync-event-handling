const consoleDiv = document.querySelector('.console');

export function consoleLog(str) {
  const p = document.createElement('p');
  p.textContent = str;
  consoleDiv?.appendChild(p);
  consoleDiv?.scrollBy(0, 1000);
  console.log(str);
}
