function findMinimalSegment(n, k, a) {
  let hashMap = {};
  for (let i = 1; i <= a.length; i++) {
    if (!hashMap[a[i]]) {
      hashMap[a[i]] = i;
    }
  }

  console.log(hashMap);

  return [];
}

// findMinimalSegment(8, 3, [1, 1, 2, 2, 3, 3, 4, 5]);
// findMinimalSegment(4, 2, [1, 2, 2, 3]);
