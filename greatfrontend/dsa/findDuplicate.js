/**
 * @param {number[]} numbers
 * @return {boolean}
 */
function findDuplicates(numbers) {
  const hashMap = {};
  let i = 0;
  while (i < numbers.length) {
    if (hashMap[numbers[i]]) {
      return true;
    }
    hashMap[numbers[i]] = (hashMap[numbers[i]] ?? 0) + 1;
    i++;
  }
  return false;
}

console.log(findDuplicates([10, 7, 0, 0]));
