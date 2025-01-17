function minBy(array, iteratee) {
  let result, computed;
  for (const value of array) {
    const current = iteratee(value);
    if (current !== null && (computed === undefined || current < computed)) {
      computed = current;
      result = value;
    }
  }
  return result;
}

console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));
