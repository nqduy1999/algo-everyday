function findMissingNumberInSequence(numbers) {
  const size = numbers.length;
  let hashMapChecks = {};
  let i = 0;
  for (let j = 0; j < numbers.length; j++) {
    hashMapChecks[numbers[j]] = (hashMapChecks[numbers[j]] ?? 0) + 1;
  }

  while (i < size + 1) {
    if (!hashMapChecks[i]) return i;
    i++;
  }
}

console.log(findMissingNumberInSequence([1, 3, 0]));
