export function getElements(selector) {
  if (typeof selector === 'string') {
    return document.querySelectorAll(selector);
  } else if (Array.isArray(selector)) {
    return selector;
  } else {
    return [selector];
  }
}

export function show(selector, shown = true) {
  const elements = getElements(selector);
  elements.forEach((element) => {
    if (shown) {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  });
}

export function hide(selector) {
  return show(selector, false);
}
