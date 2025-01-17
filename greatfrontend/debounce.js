/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait) {
  setTimeout(() => {
    return func;
  }, wait);
}

let i = 0;
function increment() {
  i++;
}

const debouncedIncrement = debounce(increment, 100);
2
debouncedIncrement();
